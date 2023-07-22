import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { exhaustMap, fromEvent, Observable } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-exhaust-map-operator',
  templateUrl: './exhaust-map-operator.component.html',
  styleUrls: ['./exhaust-map-operator.component.scss'],
})
export class ExhaustMapOperatorComponent {
  public num: number = 0;
  @ViewChild('btnSend') btnSend!: ElementRef;
  constructor(private addVideosElementService: AddVideosElementService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // fromEvent(this.btnSend.nativeElement, 'click').pipe(
    //   exhaustMap(() => this.sendReq()!)
    // ).subscribe((res) => {
    //   console.log('res :>> ', res);
    // })
    fromEvent(this.btnSend.nativeElement, 'click')
      .pipe(exhaustMap(() => this.sendReq()!))
      .subscribe((res) => {
        console.log('res :>> ', res);
      });
  }

  sendReq() {
    this.addVideosElementService.fetchRequest().subscribe((res) => {
      console.log('res :>> ', res);
    });
  }
}
