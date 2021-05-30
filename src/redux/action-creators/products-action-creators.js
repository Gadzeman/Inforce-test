import {
    DELETE_PRODUCT,
    SET_PRODUCT,
    SORT_PRODUCTS
} from "../action-types";

const setProduct = (payload) => ({type: SET_PRODUCT, payload})
const deleteProduct = (payload) => ({type: DELETE_PRODUCT, payload})
const sortProducts = (payload) => ({type: SORT_PRODUCTS, payload})

export {
    setProduct,
    deleteProduct,
    sortProducts
}