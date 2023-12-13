import { createReducer,on } from '@ngrx/store'
import { Product } from '../../models/product.model'
import * as ProdctActions from '../product/product.actions'

export const initialState:ReadonlyArray<Product>=[]
export const productReducer=createReducer(
    initialState,
    on(ProdctActions.addProduct,(state,{product})=>(
        [...state,product]
    )),
    on(ProdctActions.removeProduct,(state,{id})=>(
        state.filter(product=>product.id!==id)
    ))
);