import React from 'react';
import "./Products.css"
import {useSelector} from "react-redux";
import Product from "../Product/Product";
import Sort from "../Sort/Sort";

const Products = () => {
    const {products} = useSelector(store => store.products)
    return (
        <div>
            <h1 className={"products-title"}>Products</h1>
            <Sort />
            <div className={"products"}>
                {products.map(el => <Product key={el.id} product={el}/>)}
            </div>
        </div>
    );
};

export default Products;