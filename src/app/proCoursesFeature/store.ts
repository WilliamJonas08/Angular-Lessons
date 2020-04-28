// File used for State Management with RXJS

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

import { State } from './state-management-rxjs/models/state.interface'

// defining initial state
const state : State = {
    playlist : undefined
}

// OBSERVABLE STORE
export class Store {

    private subject = new BehaviorSubject<State>(state)
    // we are using BehaviourSubject instead of Subject because we can initialize a value here
    // BehaviourSubject will also give the last value to any new subscriber of our store
    // PROBLEME : en quoi un "Subject ne ferait pas ça non plus ?"

    private store = this.subject.asObservable().pipe(distinctUntilChanged())
    // distinctUntilChanged : won't notify subscribers about duplicated values if they are passed at the same time

    // store.value (way to access)
    get value(){
        return this.subject.value
    }

    // store.select('todos')
    select<T>(name:string):Observable<T>{
        return this.store.pipe(pluck(name))
        // pluck : returns an observable based on the object property
    }

    // store.set('todos',[{},{}])
    set(name:string, state:any){
        this.subject.next({
            ...this.value, [name]:state //will add the property name if id doesn't exists already
        })
    }
}