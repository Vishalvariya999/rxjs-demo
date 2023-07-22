import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpratorsComponent } from './components/oprators/oprators.component';
import { OpratorsListComponent } from './components/oprators-list/oprators-list.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { OffFromComponent } from './components/off-from/off-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { CustomObjComponent } from './components/custom-obj/custom-obj.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { PluckOperatorComponent } from './components/pluck-operator/pluck-operator.component';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { TapDoOpratorComponent } from './components/tap-do-oprator/tap-do-oprator.component';
import { TakeOpratorComponent } from './components/take-oprator/take-oprator.component';
import { RetryOpratorComponent } from './components/retry-oprator/retry-oprator.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { ReplayOpratorComponent } from './components/replay-oprator/replay-oprator.component';
import { ConcatMergeOpratorComponent } from './components/concat-merge-oprator/concat-merge-oprator.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { SubBehaviourSubOperatorComponent } from './components/sub-behaviour-sub-operator/sub-behaviour-sub-operator.component';
import { MergeMapOperatorComponent } from './components/merge-map-operator/merge-map-operator.component';
import { ConcatMapOperatorComponent } from './components/concat-map-operator/concat-map-operator.component';
import { SwitchMapOperatorComponent } from './components/switch-map-operator/switch-map-operator.component';
import { ExhaustMapOperatorComponent } from './components/exhaust-map-operator/exhaust-map-operator.component';
import { SharereplayOperatorComponent } from './components/sharereplay-operator/sharereplay-operator.component';
import { CombineWithLatestOperatorComponent } from './components/combine-with-latest-operator/combine-with-latest-operator.component';

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
      { path: 'map', component: MapOperatorComponent },
      { path: 'pluck', component: PluckOperatorComponent },
      { path: 'filter', component: FilterOperatorComponent },
      { path: 'tap-do', component: TapDoOpratorComponent },
      { path: 'take', component: TakeOpratorComponent },
      { path: 'retry', component: RetryOpratorComponent },
      { path: 'debaunc-distinct', component: DebounceTimeComponent },
      { path: 'replay', component: ReplayOpratorComponent },
      { path: 'async', component: AsyncPipeComponent },
      { path: 'concat-merge', component: ConcatMergeOpratorComponent },
      { path: 'sub-beaviour', component: SubBehaviourSubOperatorComponent },
      { path: 'merge-map', component: MergeMapOperatorComponent },
      { path: 'concat-map', component: ConcatMapOperatorComponent },
      { path: 'switch-map', component: SwitchMapOperatorComponent },
      { path: 'exhaust-map', component: ExhaustMapOperatorComponent },
      { path: 'share-replay', component: SharereplayOperatorComponent },
      { path: 'combine-latest', component: CombineWithLatestOperatorComponent },
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
