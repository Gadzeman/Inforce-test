import {
    DELETE_PRODUCT,
    SET_PRODUCT
} from "../action-types";

const setProduct = (payload) => ({type: SET_PRODUCT, payload})
const deleteProduct = (payload) => ({type: DELETE_PRODUCT, payload})

export {
    setProduct,
    deleteProduct
}