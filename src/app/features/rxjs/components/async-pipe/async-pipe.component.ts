import { Component } from '@angular/core';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
})
export class AsyncPipeComponent {
  public videoEmmit: any;
  constructor(private addVideosElementService: AddVideosElementService) {}

  ngOnInit(): void {
    this.subScribeVideo();
  }

  addVideos(addVideo: any) {
    this.addVideosElementService.asyncvideoEmmit.next(addVideo);
    console.log('addVideo :>> ', addVideo);
  }

  subScribeVideo() {
    this.addVideosElementService.asyncvideoEmmit.subscribe((response) => {
      this.videoEmmit = response;
      console.log('response :>> ', response);
    });
  }

  onClickCompleted() {
    this.addVideosElementService.asyncvideoEmmit.complete();
    console.log('click');
  }
}
