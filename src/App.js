import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/shop";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/cart" component={ShoppingCart} />
          </Switch>
          <Footer />
        </>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
