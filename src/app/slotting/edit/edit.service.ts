import { Injectable } from '@angular/core';
import * as xml from 'xml2js';
import { SlottingService } from '../slotting.service';

@Injectable()
export class EditService {
  public match: any;

  constructor(private slottingService: SlottingService) {
    this.match = JSON.parse(JSON.stringify(this.slottingService.match));
  }

  public getMatchXml(): string {
    const parsedMatch = this.parseMatchForXml(JSON.parse(JSON.stringify(this.match)));
    const builder = new xml.Builder({
      rootName: 'match',
      headless: true
    });
    const xmlMatch = builder.buildObject(parsedMatch);
    return xmlMatch;
  }

  private parseMatchForXml(rawMatch: any): any {
    function recurse(match: any): any {
      ['company', 'platoon', 'squad', 'fireteam', 'slot'].forEach(currentFilter => {

        if (match[currentFilter] && match[currentFilter].length > 0) {
          match[currentFilter].forEach(current => {
            // Delete current user and slotted player count
            if (current.user) {
              delete current.user;
            }
            delete current.slottedPlayerCount;

            // Take all keys and apply them as attributes
            const attributes = current['$'] || {};
            Object.keys(current).forEach(key => {
              if (['company', 'platoon', 'squad', 'fireteam', 'slot'].indexOf(key) === -1) {
                attributes[key] = current[key];
                delete current[key];
              }
            });
            current['$'] = attributes;

            recurse(current);
          });
        }
      });

      return match;
    }

    rawMatch['$'] = {uuid: rawMatch.uuid};
    delete rawMatch.uuid;
    delete rawMatch.slottedPlayerCount;
    return recurse(rawMatch);
  }

  public updateMatchFromXml(xmlMatch: string): void {
    xml.parseString(xmlMatch, (err, result) => {
      this.match = this.parseMatchFromXml(result);
    });
  }

  private parseMatchFromXml(rawMatch: any): any {
    function recurse(match: any): any {
      ['company', 'platoon', 'squad', 'fireteam', 'slot'].forEach(currentFilter => {

        if (match[currentFilter] && match[currentFilter].length > 0) {
          match[currentFilter].forEach(current => {
            // Take all attributes and apply them as properties
            const attributes = current['$'] || {};
            Object.keys(attributes).forEach(key => {
              current[key] = attributes[key];
            });
            delete current['$'];

            recurse(current);
          });
        }
      });

      return match;
    }

    rawMatch = rawMatch.match;
    const matchAttributes = rawMatch['$'] || {};
    console.log(matchAttributes);
    Object.keys(matchAttributes).forEach(key => {
      rawMatch[key] = matchAttributes[key];
    });
    delete rawMatch['$'];

    return recurse(rawMatch);
  }
}