import React from "react";
import ProductList from "../containers/ProductList/ProductList";
import FilterList from "../containers/FilterList/FilterList";

const Home = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <div className="container">
        <div className="row">
          <FilterList />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
