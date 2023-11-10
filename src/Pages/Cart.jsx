import React from "react";
import { useSearchContext } from "../context";

export default function Cart() {
  let { cart, removeFromCart } = useSearchContext();
  return (
    <div
      class="d-flex justify-content-center"
      style={{ background: "#dad7cd" }}
    >
      <div className="row row-cols-1 row-cols-md-3 g-4 container productContainer">
        {cart.map((product) => {
          const {
            id,
            title,
            description,
            brand,
            category,
            discountPercentage,
            images,
            price,
            rating,
            stock,
            thumbnail,
          } = product;

          return (
            <div className="col" key={id} style={{ padding: "30px" }}>
              <div
                className="card h-100 "
                style={{ minHeight: "400px", maxHeight: "400px" }}
              >
                <img
                  src={thumbnail}
                  className="card-img-top"
                  style={{ maxHeight: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                </div>
                <button
                  style={{
                    background: "#588157",
                    color: "white",
                    borderRadius: "0px",
                  }}
                  className="btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
