import React from 'react';
import "./Edit.css"
import {useState} from "react";
import {useSelector} from "react-redux";

const Edit = ({product, active, setActive}) => {
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [count, setCount] = useState(0)
    const onEdit = () => {
        product.image = image
        product.title = title
        product.description = description
        product.count = count
        setActive(false)
        setImage("")
        setTitle("")
        setDescription("")
        setCount(0)
    }
    return (
        <div className={active ? "edit active" : "edit"} onClick={() => setActive(false)}>
            <div className="edit__content" onClick={e => e.stopPropagation()}>
                <input
                    onChange={({target: {value}}) => setImage(value)}
                    value={image} type="text" placeholder="Enter new image (url)"/>
                <br/>
                <br/>
                <input
                    onChange={({target: {value}}) => setTitle(value)}
                    value={title} type="text" placeholder="Enter new title"/>
                <br/>
                <br/>
                <input
                    onChange={({target: {value}}) => setDescription(value)}
                    value={description} type="text" placeholder="Enter new description"/>
                <br/>
                <br/>
                <input
                    onChange={({target: {value}}) => setCount(value)}
                    value={count} type="number" placeholder="Enter new counter"/>
                <br/>
                <br/>
                <button onClick={onEdit}>Edit</button>
                <button onClick={() => setActive(false)}>Cancel</button>
            </div>
        </div>
    );
};

export default Edit;