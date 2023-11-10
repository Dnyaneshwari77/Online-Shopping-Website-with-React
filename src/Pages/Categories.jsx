import React, { useEffect } from "react";
import { useSearchContext } from "../context";
import { Link } from "react-router-dom";
export default function Categories() {
  let {
    categories,
    fetchByCategories,
    products,
    addToCart,
    category,
    setCategory,
    cart,
  } = useSearchContext();

  // console.log(products);
  const isItemInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  useEffect(() => {
    fetchByCategories(`https://dummyjson.com/products/category/${category}`);
  }, [category]);

  return (
    <div className="container categoriesContainer ">
      <div className="left">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              type="button"
              value={category}
              className="btn "
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="center"></div>
      <div className="right">
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
           
                
              <div className="col" key={id} >
                <div
                  className="card  card1"
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
