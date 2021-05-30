import React from 'react';
import "./Product.css"
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../../redux/action-creators";

const Product = ({product}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const onDelete = () => {
        const answer = window.confirm("Are you sure you want to delete this product?")
        if(answer){
            dispatch(deleteProduct(product.id))
        }else{
            return
        }
    }
    return (
        <div className={"product"}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <h2>Counter: {product.count}</h2>
            <div className={"product-buttons"}>
                <button onClick={() => history.push(`/product/${product.id}`)}>Details</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Product;