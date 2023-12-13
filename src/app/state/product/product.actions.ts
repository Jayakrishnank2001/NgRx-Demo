import { createAction,props } from "@ngrx/store";
import { Product } from "../../models/product.model";


export const addProduct=createAction('[Product Component] Product',props<{product:Product}>())
export const removeProduct=createAction('[Product Component] Remove Product',props<{id:string}>())
