import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oprators',
  templateUrl: './oprators.component.html',
  styleUrls: ['./oprators.component.scss'],
})
export class OpratorsComponent {
  constructor(public router: Router) {}

  public onRouteChange() {
    this.router.navigate(['']);
  }
}
