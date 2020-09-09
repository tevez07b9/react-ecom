import React from "react";
import "./ProductList.scss";
import Product from "../../components/Product/Product";
import { connect } from "react-redux";

const ProductList = ({ products }) => {
  // console.log(products);

  return (
    <div className="col-lg-9 mt-4">
      <div className="row">
        {products
          ? products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <Product product={product} />
              </div>
            ))
          : "Loading Products"}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, null)(ProductList);
