import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxFormModule } from '@angular-redux/form';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { TodoActions } from './todo.actions';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from './services/todo.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgReduxFormModule,

        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule
    ],
    declarations: [TodoContainerComponent, TodoListComponent, TodoFormComponent],
    providers: [TodoActions, TodoService]
})
export class TodoModule { }