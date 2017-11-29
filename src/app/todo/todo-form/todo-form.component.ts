import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { NgForm } from '@angular/forms';

import { TodoActions } from '../todo.actions';
import { ITodoState, ITodo } from '../todo.reducer';

import { TodoService } from '../services/todo.service';

@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

    constructor(private ngRedux: NgRedux<ITodoState>,
        private actions: TodoActions,
        private todoService: TodoService) { }

    addTodo(formModel: NgForm) {

        if(!formModel.valid) return;

        // this service could return a promise that on
        // resolve can reset form, or on catch can do
        // any error hanlding
        this.todoService.add(formModel.value.description);
        formModel.reset();
    }
}