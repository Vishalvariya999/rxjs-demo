import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
