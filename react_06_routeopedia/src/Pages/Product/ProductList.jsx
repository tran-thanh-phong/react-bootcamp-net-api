import React from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  return (
    <div>
      ProductList
      <br />
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
    </div>
  );
}

export default ProductList;
