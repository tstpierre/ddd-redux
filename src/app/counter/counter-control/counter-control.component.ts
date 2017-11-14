import { Component } from '@angular/core';

import { NgRedux, dispatch } from '@angular-redux/store';
import { CounterActions } from '../counter.actions';
import { ICounterState } from '../counter.reducer';

@Component({
    selector: 'counter-control',
    templateUrl: './counter-control.component.html',
    styleUrls: ['./counter-control.component.css']
})
export class CounterControlComponent {

    count: number;

    constructor(private ngRedux: NgRedux<ICounterState>, private actions: CounterActions) { }

    increment() {
        this.ngRedux.dispatch(this.actions.increment());
    }

    decrement() {
        this.ngRedux.dispatch(this.actions.decrement());
    }
}