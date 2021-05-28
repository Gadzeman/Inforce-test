import React from 'react';
import "./Comments.css"
import {useState} from "react";
import {v4 as uuidv4} from "uuid"
import {useDispatch, useSelector} from "react-redux";
import {deleteComment, setComment} from "../../redux/action-creators";

const Comments = ({productId}) => {
    const dispatch = useDispatch()
    const [description, setDescription] = useState("")
    const {comments} = useSelector(store => store.comments)
    const obj = {
        id: uuidv4(),
        product_id: productId,
        description: description
    }
    const onComment = () => {
        dispatch(setComment(obj))
        setDescription("")
    }
    return (
        <div className={"comments"}>
            <h1>Comments</h1>
            <input value={description} onChange={({target: {value}}) => setDescription(value)} type="text" placeholder="Write your comment"/>
            <button onClick={onComment}>Send</button>
            {comments.map(el => <div className={"comments-item"} key={el.id}>
                {el.product_id === productId &&
                <div>
                    <h3>{el.description}</h3>
                    <button onClick={() => dispatch(deleteComment(el.id))}>remove</button>
                    <hr/>
                </div>
                }
            </div>)}
        </div>
    );
};

export default Comments;