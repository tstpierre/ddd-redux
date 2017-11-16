import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { NgForm } from '@angular/forms';

import { TodoActions } from '../todo.actions';
import { ITodoState, ITodo } from '../todo.reducer';

@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

    constructor(private ngRedux: NgRedux<ITodoState>, private actions: TodoActions) { }

    addTodo(formModel: NgForm) {

        this.ngRedux.dispatch(this.actions.add(formModel.value.description));
        formModel.reset();
    }
}