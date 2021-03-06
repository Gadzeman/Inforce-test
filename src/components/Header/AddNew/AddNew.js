import React from 'react';
import "./AddNew.css"
import {setProduct} from "../../../redux/action-creators";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {v4 as uuidv4} from "uuid"

const AddNew = ({active, setActive}) => {
    const dispatch = useDispatch()
    const [valid, setValid] = useState(false)
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
        if (image === "" || title === "" || description === "" || count === 0) {
            setValid(true)
            return
        }else{
            dispatch(setProduct(obj))
            setValid(false)
            setActive(false)
            setImage("")
            setTitle("")
            setDescription("")
            setCount(0)
        }
    }
    const onActive = () => {
        setActive(false)
        setValid(false)
    }
    const onExit = (e) => {
        e.stopPropagation()
    }
    const onCancel = () => {
        setActive(false)
        setValid(false)
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={onActive}>
            <div className="modal__content" onClick={onExit}>
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
                {valid && <div className={"modal-valid"}>Fill in each input</div>}
                <div className={"modal-buttons"}>
                    <button onClick={onCreate}>Add</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddNew;