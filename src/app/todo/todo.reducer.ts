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
    todos: []
};

let _nextId = 4;

export function createTodoReducer() {

    return function todoReducer(lastState: ITodoState = INITIAL_STATE, action: TodoAction): ITodoState {

        switch (action.type) {

            case TodoActions.LOADED:
                return loadedTodos(lastState, action);

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
function loadedTodos(lastState: ITodoState, action: TodoAction) {

    // Since we're tracking nextId locally cuz we have no database in the demo...
    _nextId = Math.max.apply(action.payload.todos.map((t) => { return t.id; }));

    return Object.assign({}, lastState, {
        todos: action.payload.todos
    });
}

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