import { Component } from '@angular/core';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-sub-behaviour-sub-operator',
  templateUrl: './sub-behaviour-sub-operator.component.html',
  styleUrls: ['./sub-behaviour-sub-operator.component.scss'],
})
export class SubBehaviourSubOperatorComponent {
  public changeName!: string;
  constructor(private addVideosElementService: AddVideosElementService) {}

  ngOnInit(): void {
    this.addVideosElementService.badge.next(true);
    this.addVideosElementService.changeName.subscribe((res) => {
      this.changeName = res;
      console.log('res :>> ', res);
    });
    console.log('this.addVideosElementService.badge.next(true)');
  }

  ngOnDestroy(): void {
    this.addVideosElementService.badge.next(false);
    console.log('this.addVideosElementService.badge.next(false)');
  }
}
