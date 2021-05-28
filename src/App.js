import React from 'react';
import {useState} from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Modal from "./components/Modal/Modal";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <Router>
          <div>
              <Header active={modalActive} setActive={setModalActive} />
              <Modal active={modalActive} setActive={setModalActive} />
              <Switch>
                  <Route path={"/"} exact>
                      <Products />
                  </Route>
                  <Route path={"/product/:id"}>
                      <ProductDetails />
                  </Route>
              </Switch>
          </div>
        </Router>
  );
};

export default App;
