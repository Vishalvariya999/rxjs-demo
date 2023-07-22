import { Component } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-concat-merge-oprator',
  templateUrl: './concat-merge-oprator.component.html',
  styleUrls: ['./concat-merge-oprator.component.scss'],
})
export class ConcatMergeOpratorComponent {
  constructor(private addVideosElementService: AddVideosElementService) {}

  ngOnInit(): void {
    this.addVideo();
    this.mergeOpe();
  }

  addVideo() {
    const chanel1 = interval(1000).pipe(
      map((data) => 'chanel_1 : Video ' + data),
      take(5)
    );
    const chanel2 = interval(1000).pipe(
      map((data) => 'chenal_2 : Video ' + data),
      take(5)
    );
    const chanel3 = interval(1000).pipe(
      map((data) => 'chenal_3 : Video ' + data),
      take(5)
    );

    const finalObs = concat(chanel1, chanel2, chanel3);
    finalObs.subscribe((response) => {
      this.addVideosElementService.printElement(response, 'container1');
      console.log('response :>> ', response);
    });
  }

  mergeOpe() {
    const chanel1 = interval(3000).pipe(
      map((data) => 'chanel_1 : Video ' + data),
      take(5)
    );
    const chanel2 = interval(6000).pipe(
      map((data) => 'chenal_2 : Video ' + data),
      take(5)
    );
    const chanel3 = interval(3500).pipe(
      map((data) => 'chenal_3 : Video ' + data),
      take(5)
    );

    const finalObs = merge(chanel1, chanel2, chanel3);
    finalObs.subscribe((response) => {
      this.addVideosElementService.printElement(response, 'container2');
      console.log('response :>> ', response);
    });
  }
}
