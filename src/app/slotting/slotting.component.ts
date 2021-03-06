import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlottingService } from './slotting.service';
import { environment } from '../../environments/environment';

@Component({
  templateUrl: './slotting.component.html',
  styleUrls: ['./slotting.component.scss'],
  selector: 'app-slotting'
})
export class SlottingComponent implements OnInit {
  @Input() public match: any;
  public totalSlotCount = 0;
  public canAdministrate = false;
  public groupColorSwitch = false;

  constructor(public route: ActivatedRoute, public slottingService: SlottingService) {
  }

  ngOnInit(): void {
    this.slottingService.getPermissions().then(result => {
      if (result.result) {
        this.canAdministrate = true;
      } else if (environment.ignoreMissingPermissions) {
        this.canAdministrate = true;
      }
    });
    // console.log('match', this.match);
    this.resolveTotalSlotsR(this.match);

    const groupColorSwitchValue = localStorage.getItem(environment.storageKeys.showGroupColor) || 'false';
    this.groupColorSwitch = groupColorSwitchValue === 'true';
    this.slottingService.showGroupsChanged.subscribe(value => this.groupColorSwitch = value);
  }
 
  resolveTotalSlotsR(obj: Object): void {
      let subs = ['company', 'platoon', 'squad', 'fireteam'];

      subs.forEach(x => {
              if (Array.isArray(obj[x])) obj[x].forEach(s => this.resolveTotalSlotsR(s));
      })
      
      if (obj['slot'] !== null) this.totalSlotCount += obj['slot'].length;
  }

  deleteMatch(): void {
    this.slottingService.bootboxConfirm('Slotliste ' + this.match.uuid + ' wirklich löschen?').then(result => {
      if (result) {
        console.log('delete');
        this.slottingService.deleteMatch(this.match.uuid).then(deleteResult => {
          if (deleteResult) {
            const index = this.slottingService.matches.indexOf(this.match);
            if (index > -1) {
              this.slottingService.matches.splice(index, 1);
            }
          } else {
            this.slottingService.bootbox('Das ging schief :(');
          }
        });
      }
    });
  }
}
