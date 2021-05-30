import React from 'react';
import "./Edit.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetProducts} from "../../../../../redux/action-creators";

const Edit = ({product, active, setActive}) => {
    const dispatch = useDispatch()
    const {products} = useSelector(store => store.products)
    const [image, setImage] = useState(product.image)
    const [title, setTitle] = useState(product.title)
    const [description, setDescription] = useState(product.description)
    const [count, setCount] = useState(product.count)
    const onEdit = () => {
        product.image = image
        product.title = title
        product.description = description
        product.count = count
        dispatch(resetProducts(products))
        setActive(false)
    }
    return (
        <div className={active ? "edit active" : "edit"} onClick={() => setActive(false)}>
            <div className="edit__content" onClick={e => e.stopPropagation()}>
                <input
                    onChange={({target: {value}}) => setImage(value)}
                    value={image}
                    type="text" placeholder="Enter new image (url)"/>
                <br/>
                <br/>
                <input
                    onChange={({target: {value}}) => setTitle(value)}
                    value={title}
                    type="text" placeholder="Enter new title"/>
                <br/>
                <br/>
                <input
                    onChange={({target: {value}}) => setDescription(value)}
                    value={description}
                    type="text" placeholder="Enter new description"/>
                <br/>
                <br/>
                <input
                    onChange={({target: {value}}) => setCount(value)}
                    value={count}
                    type="number" placeholder="Enter new counter"/>
                <br/>
                <br/>
                <button onClick={onEdit}>Edit</button>
                <button onClick={() => setActive(false)}>Cancel</button>
            </div>
        </div>
    );
};

export default Edit;