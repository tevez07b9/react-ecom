import React from "react";
import BrandFilter from "../../components/BrandFilter/BrandFilter";

const FilterList = () => {
  return (
    <div className="col-lg-3">
      <div className="row mt-4">
        <div className="col-lg-12">
          <BrandFilter />
        </div>
      </div>
    </div>
  );
};

export default FilterList;
