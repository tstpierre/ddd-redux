import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { TodoActions } from '../todo.actions';
import { ITodoState, ITodo } from '../todo.reducer';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    @select(['todo', 'todos'])
    readonly todos$: Observable<Array<ITodo>>;

    constructor(private ngRedux: NgRedux<ITodoState>, private actions: TodoActions) { }

    deleteTodo(id: number) {
        this.ngRedux.dispatch(this.actions.delete(id));
    }

    toggleTodo(id: number) {
        this.ngRedux.dispatch(this.actions.toggle(id));
    }

    getTrackKey(_, todo: ITodo) {
        return todo.id;
    }
}