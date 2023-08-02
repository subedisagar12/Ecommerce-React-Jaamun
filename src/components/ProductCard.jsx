import React from "react";

function ProductCard() {
  return (
    <>
      <div className="card">
        <img
          src="https://www.borofone.com/wp-content/uploads/2022/04/borofone-bo12-power-bt-headset-headphones.jpg"
          className="card-img-top"
          alt="headphone"
        />
        <div className="card-body">
          <h5 className="card-title">Sony Headphone</h5>
          <p className="card-text">Rs. 3500</p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
