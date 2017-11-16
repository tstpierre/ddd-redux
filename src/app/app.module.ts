import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { NgReduxFormModule, provideReduxForms } from '@angular-redux/form';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CounterModule } from './counter/counter.module';
import { TodoModule } from './todo/todo.module';

import { rootReducer, INITIAL_STATE, IAppState } from './store/reducers';

import { appRoutes } from './routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        BrowserAnimationsModule,

        NgReduxModule,
        NgReduxRouterModule,
        NgReduxFormModule,

        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,

        HomeModule,
        CounterModule,
        TodoModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(ngRedux: NgRedux<IAppState>, ngReduxRouter: NgReduxRouter, devTools: DevToolsExtension) {

        const storeEnhancers = devTools.isEnabled() ?
            [devTools.enhancer()] :
            [];

        ngRedux.configureStore(
            rootReducer,
            INITIAL_STATE,
            [],
            storeEnhancers
        );

        ngReduxRouter.initialize();     // configure router
        provideReduxForms(ngRedux);     // configure forms
    }
}