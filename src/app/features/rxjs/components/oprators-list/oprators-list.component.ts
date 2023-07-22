import { Component } from '@angular/core';

@Component({
  selector: 'app-oprators-list',
  templateUrl: './oprators-list.component.html',
  styleUrls: ['./oprators-list.component.scss'],
})
export class OpratorsListComponent {
  public routerData: any = [
    {
      link: 'from-event',
      lable: 'From-Event Operator',
    },
    {
      link: 'interval-timer',
      lable: 'Interval&Timer Operator',
    },
    {
      link: 'off-from',
      lable: 'Off & From Operator',
    },
    {
      link: 'to-array',
      lable: 'ToArray Operator',
    },
    {
      link: 'custom-obj',
      lable: 'Custome Observable',
    },
    {
      link: 'map',
      lable: 'Map operator',
    },
    {
      link: 'pluck',
      lable: 'Pluck operator',
    },
    {
      link: 'filter',
      lable: 'Filter operator',
    },
    {
      link: 'tap-do',
      lable: 'Tap&do operator',
    },
    {
      link: 'take',
      lable: 'Take operator',
    },
    {
      link: 'retry',
      lable: 'Retry operator',
    },
    {
      link: 'debaunc-distinct',
      lable: 'DebounceTime and Distinct UntilChanged Operator',
    },
    {
      link: 'replay',
      lable: 'Replay operator',
    },
    {
      link: 'async',
      lable: 'Async pipe',
    },
    {
      link: 'concat-merge',
      lable: 'Concat&Merege operator',
    },
    {
      link: 'sub-beaviour',
      lable: 'Subject&Behaviorsubject operator',
    },
    {
      link: 'merge-map',
      lable: 'Merge-map operator',
    },
    {
      link: 'concat-map',
      lable: 'Concat-map operator',
    },
    {
      link: 'switch-map',
      lable: 'Switch-map operator',
    },
    {
      link: 'exhaust-map',
      lable: 'Exhaust-map operator',
    },
    {
      link: 'share-replay',
      lable: 'Share&replay operator',
    },
    {
      link: 'combine-latest',
      lable: 'Combine with latest operator',
    },
  ];

  constructor() {}
}
