import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CounterModule } from './counter/counter.module';

import { rootReducer, INITIAL_STATE, IAppState } from './store/reducers';

import { appRoutes } from './routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        NgReduxModule,
        NgReduxRouterModule,

        MatToolbarModule,
        MatCardModule,
        MatButtonModule,

        HomeModule,
        CounterModule
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

        ngReduxRouter.initialize();
    }
}