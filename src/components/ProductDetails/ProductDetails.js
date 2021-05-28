import React, {useState} from 'react';
import "./ProductDetails.css"
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Comments from "../Comments/Comments";
import Edit from "../Edit/Edit";

const ProductDetails = () => {
    const [editActive, setEditActive] = useState(false)
    const {products} = useSelector(store => store.products)
    const params = useParams()
    const productDetails = products.filter(el => el.id == params.id)
    console.log(productDetails)
    return (
        <div>
            {productDetails.map(productDetails => <div key={productDetails.id}>
                <h1 className={"details"}>{productDetails.title} Details</h1>
                <div className={"product-details"}>
                    <div className={"product-details-top"}>
                        <img src={productDetails.image} alt={productDetails.title}/>
                        <p>{productDetails.description}</p>
                    </div>
                    <div className={"product-details-buttom"}>
                        <h2>Count: {productDetails.count}</h2>
                        <button onClick={() => setEditActive(true)}>Edit</button>
                    </div>
                </div>
                <Edit product={productDetails} active={editActive} setActive={setEditActive}/>
                <Comments productId={productDetails.id}/>
            </div>)}
        </div>
    );
};

export default ProductDetails;