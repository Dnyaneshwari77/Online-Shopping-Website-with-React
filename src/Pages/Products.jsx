import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../context";

export default function Products() {
  let { products, fetchSearchProducts, addToCart, cart } = useSearchContext();
  useEffect(() => {
    fetchSearchProducts("https://dummyjson.com/products");
  }, []);

  const isItemInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div
      class="d-flex justify-content-center"
      style={{ background: "#dad7cd" }}
    >
      <div className="row row-cols-1 row-cols-md-3 g-4 container productContainer">
        {products.map((product) => {
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
                  <Link
                    to={`/product/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={thumbnail}
                      className="card-img-top"
                      style={{ maxHeight: "200px" }}
                    />
                  </Link>
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
                    disabled={isItemInCart(id)}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
          
          );
        })}
      </div>
    </div>
  );
}
