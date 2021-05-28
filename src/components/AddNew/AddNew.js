import React from 'react';
import "./AddNew.css"
import {setProduct} from "../../redux/action-creators";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {v4 as uuidv4} from "uuid"

const AddNew = ({active, setActive}) => {
    const dispatch = useDispatch()
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [count, setCount] = useState(0)
    const obj = {
        id: uuidv4(),
        image: image,
        title: title,
        description: description,
        count: count
    }
    const onCreate = () => {
        dispatch(setProduct(obj))
        setActive(false)
        setImage("")
        setTitle("")
        setDescription("")
        setCount(0)
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <input value={image} onChange={({target: {value}}) => setImage(value)} type="text" placeholder="Enter image (url)"/>
                <br/>
                <br/>
                <input value={title} onChange={({target: {value}}) => setTitle(value)} type="text" placeholder="Enter product name"/>
                <br/>
                <br/>
                <input value={description} onChange={({target: {value}}) => setDescription(value)} type="text" placeholder="Enter some description"/>
                <br/>
                <br/>
                <input value={count} onChange={({target: {value}}) => setCount(value)} type="number" placeholder="Enter product count"/>
                <br/>
                <br/>
                <div className={"modal-buttons"}>
                    <button onClick={onCreate}>Add</button>
                    <button onClick={() => setActive(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddNew;