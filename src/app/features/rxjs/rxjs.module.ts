import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { OpratorsComponent } from './components/oprators/oprators.component';
import { OpratorsListComponent } from './components/oprators-list/oprators-list.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { OffFromComponent } from './components/off-from/off-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { CustomObjComponent } from './components/custom-obj/custom-obj.component';


@NgModule({
  declarations: [
    OpratorsComponent,
    OpratorsListComponent,
    FromEventComponent,
    IntervalTimerComponent,
    OffFromComponent,
    ToArrayComponent,
    CustomObjComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
