import {
    SET_PRODUCT,
    DELETE_PRODUCT
} from "../action-types";

const localStorageState = localStorage.getItem("products")
const initialState = localStorageState ? JSON.parse(localStorageState) : {
    products: [],
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCT: {
            return {
                products: [...state.products, action.payload]
            }
        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                products: state.products.filter(el => action.payload !== el.id)
            }
        }
        default: {
            return state
        }
    }
}

export default reducer
