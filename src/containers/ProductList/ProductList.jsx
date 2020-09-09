import React from "react";
import "./ProductList.scss";
import Product from "../../components/Product/Product";
import { connect } from "react-redux";
import { brandFilter } from "../../pipes/brandFilter";
import { paginationPipe } from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";

class ProductList extends React.Component {
  state = {
    colValue: "col-lg-4",
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    gridValue: 3,
  };

  changeLayout = (n) => {
    this.setState({ gridValue: n });

    let realGridValue;

    if (n === 4) {
      realGridValue = 3;
    } else {
      realGridValue = 4;
    }

    this.setState({
      colValue: `col-lg-${realGridValue}`,
    });
  };

  onPrev = () => {
    const updatedState = { ...this.state };
    updatedState.currentPage = this.state.currentPage - 1;
    this.setState(updatedState);
  };

  onNext = () => {
    this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1,
    });
  };

  goPage = (n) => {
    this.setState({
      ...this.state,
      currentPage: n,
    });
  };

  render() {
    return (
      <div className="col-lg-9 mt-4">
        <div className="row mb-3">
          {this.props.products
            ? paginationPipe(this.props.products, this.state).map((product) => {
                let classes = `${this.state.colValue} col-md-6 mb-4`;
                return (
                  <div className={classes}>
                    <Product key={product.id} product={product} />
                  </div>
                );
              })
            : "Loading Products"}
        </div>
        <div className="d-flex justify-content-end">
          <Pagination
            totalItemsCount={this.props.products.length}
            currentPage={this.state.currentPage}
            perPage={this.state.perPage}
            pagesToShow={this.state.pagesToShow}
            onGoPage={this.goPage}
            onPrevPage={this.onPrev}
            onNextPage={this.onNext}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const brands = state.brand;
  const filterByBrandArr = brandFilter(state.products, brands);

  return { products: filterByBrandArr };
};

export default connect(mapStateToProps, null)(ProductList);
