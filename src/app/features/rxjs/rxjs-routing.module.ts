import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpratorsComponent } from './components/oprators/oprators.component';
import { OpratorsListComponent } from './components/oprators-list/oprators-list.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { OffFromComponent } from './components/off-from/off-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { CustomObjComponent } from './components/custom-obj/custom-obj.component';

const routes: Routes = [
  {
    path: '',
    component: OpratorsComponent,
    children: [
      { path: '', component: OpratorsListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval-timer', component: IntervalTimerComponent },
      { path: 'off-from', component: OffFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custom-obj', component: CustomObjComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
