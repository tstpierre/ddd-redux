import { Action } from 'redux';
import { TodoActions, TodoAction } from './todo.actions';

export interface ITodo {
    id: number;
    complete: boolean;
    description: string;
}

export interface ITodoState {
    todos: Array<ITodo>;
}

export const INITIAL_STATE: ITodoState = {
    todos: [
        { id: 0, complete: false, description: 'Test 1' },
        { id: 1, complete: false, description: 'Test 2 - long horrible text' },
        { id: 3, complete: true, description: 'Test 3' }
    ]
};

let _nextId = 4;

export function createTodoReducer() {

    return function todoReducer(lastState: ITodoState = INITIAL_STATE, action: TodoAction): ITodoState {

        switch (action.type) {

            case TodoActions.ADD:
                return addTodo(lastState, action);

            case TodoActions.DELETE:
                return deleteTodo(lastState, action);
            
            case TodoActions.TOGGLE_COMPLETE:
                return toggleTodo(lastState, action);
        }

        return lastState;
    }
}

// Example of a refactored 'case reducer'
function addTodo(lastState: ITodoState, action: TodoAction) {

    return Object.assign({}, lastState, {
        todos: lastState.todos.concat({
            id: _nextId++,
            complete: false,
            description: action.payload.description
        })
    });
}

function deleteTodo(lastState: ITodoState, action: TodoAction) {

    return Object.assign({}, lastState, {
        ...lastState,
        todos: lastState.todos.filter(x => x.id !== action.payload.id)
    });
}

function toggleTodo(lastState: ITodoState, action: TodoAction) {

    return Object.assign({}, lastState, {
        todos: lastState.todos.map(todo => {

            if (todo.id !== action.payload.id) return todo;

            return Object.assign({}, todo, {
                complete: !todo.complete
            });
        })
    });
}