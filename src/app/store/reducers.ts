import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { createCounterReducer, INITIAL_STATE as COUNTER_INIT, ICounterState } from '../counter/counter.reducer';
import { createTodoReducer, INITIAL_STATE as TODO_INIT, ITodoState } from '../todo/todo.reducer';

export interface IAppState {
    counter: ICounterState,
    todo: ITodoState
}

export const INITIAL_STATE: IAppState = {
    counter: COUNTER_INIT,
    todo: TODO_INIT
};

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers<IAppState>({
        router: routerReducer,
        counter: createCounterReducer(),
        todo: createTodoReducer()
    })
);