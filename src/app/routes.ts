import { Route } from '@angular/router';

import { HomeContainerComponent } from './home/home-container/home-container.component';
import { CounterContainerComponent } from './counter/counter.container';

export const appRoutes: Array<Route> = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeContainerComponent },
    { path: 'counter', component: CounterContainerComponent }
];