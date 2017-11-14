import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { createCounterReducer, INITIAL_STATE as COUNTER_INIT, ICounterState } from '../counter/counter.reducer';

export interface IAppState {
    counter: ICounterState
}

export const INITIAL_STATE: IAppState = {
    counter: COUNTER_INIT
};

export const rootReducer = combineReducers<IAppState>({
    router: routerReducer,
    counter: createCounterReducer()
});