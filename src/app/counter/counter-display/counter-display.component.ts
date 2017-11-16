import { Component } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { CounterActions } from '../counter.actions';
import { ICounterState } from '../counter.reducer';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'counter-display',
    templateUrl: './counter-display.component.html',
    styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent {

    @select(['counter', 'count'])
    readonly count$: Observable<number>;

    constructor(private ngRedux: NgRedux<ICounterState>, private actions: CounterActions) {

        //this.count$ = ngRedux.select<number>(['counter', 'count']); // @select wraps all this for us
    }
}