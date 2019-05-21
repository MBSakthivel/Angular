import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  {
    path:"category",
    component:ProductComponent
  },
  {
    path:"consumeProduct/:id",
    component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
