import React from 'react';
import "./Sort.css"
import {useSelector, useDispatch} from "react-redux";
import {sortProducts} from "../../../redux/action-creators";

const Sort = () => {
    const {products} = useSelector(store => store.products)
    const dispatch = useDispatch()
    const sortCounter = () => {
        const sortedProducts = products.sort((a, b) => b.count - a.count)
        dispatch(sortProducts(sortedProducts))
    }
    const sortABC = () => {
        const sortedProducts = products.sort((a, b) => a.title.localeCompare(b.title))
        dispatch(sortProducts(sortedProducts))
    }
    return (
        <div>
            <div className={"sort"}>
                <button onClick={sortCounter}>Sort by COUNTER</button>
                <button onClick={sortABC}>Sort by ABC</button>
            </div>
        </div>
    );
};

export default Sort;