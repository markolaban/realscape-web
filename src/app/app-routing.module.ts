import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ItemViewComponent } from './item-view/item-view.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'items/:id', component: ItemViewComponent },
  { path: 'callback',  component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
