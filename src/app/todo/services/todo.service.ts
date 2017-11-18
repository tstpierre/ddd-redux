import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { TodoActions } from '../todo.actions';
import { ITodoState, ITodo } from '../todo.reducer';

@Injectable()
export class TodoService {

    constructor(private ngRedux: NgRedux<ITodoState>, private actions: TodoActions) { }

    get() {

        let dataFromApi: Array<ITodo> = [
            { id: 0, complete: false, description: 'Test 1' },
            { id: 1, complete: false, description: 'Test 2 - long horrible text' },
            { id: 3, complete: true, description: 'Test 3' }
        ];

        // http.get('api url').then((response) => {
        //   dataFromApi = response.body; or however the api is returning the response

            this.ngRedux.dispatch(this.actions.loaded(dataFromApi));

        // })
        // .catch((reason) => {
        //    Use 'reason' or massage it to some other data/message to use as payload
        //    this.ngRedux.dispatch(this.actions.failedLoad(reason));
        // });
    }

    add(description: string) {
        this.ngRedux.dispatch(this.actions.add(description));
    }

    delete(id: number) {
        this.ngRedux.dispatch(this.actions.delete(id));
    }

    toggle(id: number) {
        this.ngRedux.dispatch(this.actions.toggle(id));
    }

}