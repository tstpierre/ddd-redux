import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { CounterActions } from './counter.actions';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { CounterControlComponent } from './counter-control/counter-control.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';

@NgModule({
    declarations: [
        CounterContainerComponent,
        CounterControlComponent,
        CounterDisplayComponent
    ],
    imports: [
        CommonModule,

        MatButtonModule
    ],
    exports: [
        CounterContainerComponent
    ],
    providers: [CounterActions]
})
export class CounterModule {}