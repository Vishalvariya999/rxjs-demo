import { Component } from '@angular/core';
import { AddVideosElementService } from '../../services/add-videos-element.service';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss'],
})
export class IntervalTimerComponent {
  public videoSubscription!: Subscription;
  public addVideo: any;

  constructor(private addVideosElementService: AddVideosElementService) {}

  ngOnInit(): void {
    // let broadCastVideo = interval(1000)
    let broadCastVideo = timer(2000, 1000);

    this.videoSubscription = broadCastVideo.subscribe((res: any) => {
      console.log('res :>> ', res);
      this.addVideo = 'Video ' + res;
      this.addVideosElementService.printElement(this.addVideo, 'eleContainer');

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
