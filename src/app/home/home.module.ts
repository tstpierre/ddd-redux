import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

import { HomeContainerComponent } from './home-container/home-container.component';

@NgModule({
  imports: [
    CommonModule,
    
    MatIconModule,
    MatGridListModule
  ],
  declarations: [HomeContainerComponent]
})
export class HomeModule { }
