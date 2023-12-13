import { createReducer,on } from "@ngrx/store";
import * as CouterActions from './counter.actions'

export const initialState=0

export const CounterReducer=createReducer(
    initialState,
    on(CouterActions.increment,(state)=>state+1),
    on(CouterActions.decrement,(state)=>state-1),
    on(CouterActions.reset,(state)=>0),
)