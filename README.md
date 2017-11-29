# ddd-redux
Denver Dev Day - Maintainable JavaScript apps with REDUX

## Follow up to a question regarding when to make API calls

Reducers should remain syncronous.  So you certainly should not be making an API call there.  Instead, you can take this approach:
- From your component, instead of dispatching an Action - you could call an injected Angular (in this example code base) to make the API call
- Centralized in that service, you can use standard promise handling.  in your `.then` you can dispatch the Action that this specific API call has completed and communicate any payload as needed; likewise dispatch any Action to denote any error occuring
- This then runs through the pure reducers and can spit out the new state and let rxjs update the observing components

```
//angular service ommitted, must inject ngRedux to the service so it has the store and dispatch capability

loadCats(): void {  // you could add a loading: boolean to the state container
                    // to do some UI spinner/loading UX

    let self = this;

    psuedoCodeHttpClient.get('cat-api')
        .then((cats: Array)) => {
            // Here we can tie back the "angular way to make api calls" result
            // into the plain JS reducer and allow the state to change properly
            // and trigger observable updates

            self.ngRedux.dispatch(self.actions.catsFinishedLoading(cats));
        }
        .catch(() => { /* error action dispatch  */ }
    );
}
```