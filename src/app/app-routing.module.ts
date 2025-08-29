import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsPageComponent } from './items-page/items-page.component';

const routes: Routes = [
  {path: 'products', component: ItemsPageComponent},
  {path: '**', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
