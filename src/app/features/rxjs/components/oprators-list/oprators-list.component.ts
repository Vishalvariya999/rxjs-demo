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
  ];

  constructor() {}
}
