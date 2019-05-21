import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazycomponentComponent } from './lazycomponent/lazycomponent.component';

const routes: Routes = [
  {
  path:'',
  component:LazycomponentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule { }
