import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { TodoActions } from '../todo.actions';
import { ITodoState, ITodo } from '../todo.reducer';

import { TodoService } from '../services/todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    @select(['todo', 'todos'])
    readonly todos$: Observable<Array<ITodo>>;

    constructor(private ngRedux: NgRedux<ITodoState>,
        private actions: TodoActions,
        private todoService: TodoService) { }

    ngOnInit() {
        this.todoService.get();
    }

    deleteTodo(id: number) {
        this.todoService.delete(id);
    }

    toggleTodo(id: number) {
        this.todoService.toggle(id);
    }

    getTrackKey(_, todo: ITodo) {
        return todo.id;
    }
}