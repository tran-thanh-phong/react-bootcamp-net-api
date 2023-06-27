import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      ProductDetails
      <p>ID: {productId}</p>
      <br/>
      <button
        onClick={() => {
            navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default ProductDetails;
