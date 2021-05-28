import React from 'react';
import "./Header.css"
import {useHistory} from "react-router";

const Header = ({setActive}) => {
    const history = useHistory()
    return (
        <div className={"header"}>
            <h1 onClick={() => history.push("/")}>Inforce Test</h1>
            <h3 onClick={() => setActive(true)}>Add new product</h3>
        </div>
    );
};

export default Header;