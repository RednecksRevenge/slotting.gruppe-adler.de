import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { SlottingService } from './slotting.service';
import { SlottingComponent } from './slotting.component';
import { SharedService } from './shared/shared.service';
import { NodeModule } from './node.module';

@NgModule({
  declarations: [
    SlottingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NodeModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SlottingComponent/*,
        resolve: {
          data: SharedResolver
        }*/
      }
    ])
  ],
  providers: [
    SlottingService
  ]
})
export class SlottingModule {

}