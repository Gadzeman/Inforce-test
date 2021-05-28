import {createStore} from "redux";
import {reducers} from "./reducers/combined-reducers";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const persister = (store) => (next) => (action) => {
    next(action)
    const {products, comments} = store.getState()
    localStorage.setItem("products", JSON.stringify(products))
    localStorage.setItem("comments", JSON.stringify(comments))
}
export const store = createStore(
    reducers,
    applyMiddleware(thunk, persister)
)

