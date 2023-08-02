import React from "react";

function ProductDetail() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Image Column */}
          <div className="col-5">
            <img
              src="https://www.borofone.com/wp-content/uploads/2022/04/borofone-bo12-power-bt-headset-headphones.jpg"
              alt="headphone"
              style={{ width: "100%" }}
            />
          </div>

          {/* Content column */}
          <div className="col">
            <h1>Sony Headphones</h1>
            <h5>Rs.3500</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, distinctio sit? Temporibus dolor aspernatur asperiores
              sit natus quisquam ab deleniti quae tenetur, quos illo animi
              maxime possimus mollitia fugit voluptates, molestias adipisci
              fuga! Quas perspiciatis autem in amet ratione incidunt expedita
              repudiandae sequi, rem, perferendis a suscipit optio, nisi
              debitis!
            </p>

            <a href="#" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
