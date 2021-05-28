import {combineReducers} from "redux";
import products from "./products-reducer"
import comments from "./comments-reducer"

export const reducers = combineReducers({
    comments,
    products
})