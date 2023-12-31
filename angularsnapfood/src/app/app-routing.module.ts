import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { MainComponent } from './page/main/main.component';
import { DetailComponent } from './page/detail/detail.component';

export const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'main', component: MainComponent },
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
