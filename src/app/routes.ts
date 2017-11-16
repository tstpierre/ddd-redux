import { Route } from '@angular/router';

import { HomeContainerComponent } from './home/home-container/home-container.component';
import { CounterContainerComponent } from './counter/counter-container/counter-container.component';
import { TodoContainerComponent } from './todo/todo-container/todo-container.component';

export const appRoutes: Array<Route> = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeContainerComponent },
    { path: 'counter', component: CounterContainerComponent },
    { path: 'todo', component: TodoContainerComponent }
];