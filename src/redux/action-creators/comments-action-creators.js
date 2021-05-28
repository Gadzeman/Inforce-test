import {
    DELETE_COMMENT,
    SET_COMMENT
} from "../action-types";

const setComment = (payload) => ({type: SET_COMMENT, payload})
const deleteComment = (payload) => ({type: DELETE_COMMENT, payload})

export {
    setComment,
    deleteComment
}