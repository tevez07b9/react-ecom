import React from "react";
import { connect } from "react-redux";
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";

const ProductDetail = ({ product }) => {
  console.log(product);
  return (
    <div className="container" style={{ marginTop: "50px", padding: "6rem 0" }}>
      <div className="card">
        <div className="row">
          <ProductDetailComponent product={product} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const product = state.products.find(
    (product) => product.id === +props.match.params.id
  );
  return { product };
};

export default connect(mapStateToProps, null)(ProductDetail);
