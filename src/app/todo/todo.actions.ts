import { Injectable } from '@angular/core';
import { Action } from 'redux';

import { ITodo } from './todo.reducer';

export interface TodoAction extends Action {
    payload: any
}

@Injectable()
export class TodoActions {
    static LOADED = "TODO_DATA_LOADED";

    static ADD = 'TODO_ADD';
    static DELETE = 'TODO_DELETE';
    static TOGGLE_COMPLETE = 'TODO_TOGGLE_COMPLETE';

    loaded = (todos: Array<ITodo>): TodoAction => {
        return {
            type: TodoActions.LOADED,
            payload: {
                todos
            }
        };
    }

    add = (description: string): TodoAction => {
        return {
            type: TodoActions.ADD,
            payload: {
                description
            }
        };
    }

    delete = (id: number): TodoAction => {
        return {
            type: TodoActions.DELETE,
            payload: {
                id
            }
        };
    }

    toggle = (id: number): TodoAction => {
        return {
            type: TodoActions.TOGGLE_COMPLETE,
            payload: {
                id
            }
        };
    }
}