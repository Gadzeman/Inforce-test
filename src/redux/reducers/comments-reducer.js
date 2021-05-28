import {
    DELETE_COMMENT,
    SET_COMMENT
} from "../action-types";

const localStorageState = localStorage.getItem("comments")
const initialState = localStorageState ? JSON.parse(localStorageState) : {
    comments: [],
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_COMMENT: {
            return {
                comments: [...state.comments, action.payload]
            }
        }
        case DELETE_COMMENT: {
            return {
                ...state,
                comments: state.comments.filter(el => action.payload !== el.id)
            }
        }
        default: {
            return state
        }
    }
}


export default reducer