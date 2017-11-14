import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';

import { HomeContainerComponent } from './home-container/home-container.component';

@NgModule({
  imports: [
    CommonModule,
    
    MatGridListModule
  ],
  declarations: [HomeContainerComponent]
})
export class HomeModule { }
