import React from "react";
import ProductList from "../containers/ProductList/ProductList";

const Home = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <div className="container">
        <div className="row">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
