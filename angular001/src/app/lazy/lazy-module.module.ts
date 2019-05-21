import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';

import { LazycomponentComponent } from './lazycomponent/lazycomponent.component';

@NgModule({
  declarations: [LazycomponentComponent],
  imports: [
    CommonModule,
    LazyModuleRoutingModule
  ]
})
export class LazyModuleModule { }
