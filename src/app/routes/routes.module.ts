import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
