import { Action } from 'redux';
import { CounterActions } from './counter.actions';

export interface ICounterState {
    count: number;
}

export const INITIAL_STATE: ICounterState = {
    count: 0
};

export function createCounterReducer() {

    return function counterReducer(lastState: ICounterState = INITIAL_STATE, action: Action): ICounterState {

        switch (action.type) {

            case CounterActions.INCREMENT:
                return {
                    count: lastState.count + 1
                };

            case CounterActions.DECREMENT:
                return Object.assign({}, lastState, {   // the technically correct way
                    count: lastState.count - 1
                });

                // return {
                //     count: lastState.count - 1
                // };
        }

        return lastState;
    }
}