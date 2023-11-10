import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSearchContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";
export default function SingleProduct() {
  const [loading, setloading] = useState(true);
  const { id } = useParams();
  console.log(id);

  let { fetchById, singleProduct } = useSearchContext();

  const wait = async () => {
    await fetchById(id);
  };
  useEffect(() => {
    wait();
    setloading(false);
  }, []);

  const ratingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
      } else if (rating > i) {
        stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} />);
      } else {
        stars.push(<FontAwesomeIcon icon={farStar} key={i} />);
      }
    }
    return stars;
  };

  const offerFormat = (discount) => {
    return `-${discount}%`;
  };

  let {
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
  } = singleProduct;

  const exchangeRate = 75.0;
  const priceInINR = (price * exchangeRate).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  console.log(singleProduct);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <div
        className="row"
        style={{
          padding: "10px",
          background: "#a3b18a",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <div
          className="col-md-6"
          style={{ background: "#a3b18a", minWidth: "50%" }}
        >
          <div className="product-thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="product-images">
            {images &&
              images.map((image, index) => (
                <div key={index} className="product-image">
                  <img src={image} alt={title} />
                </div>
              ))}
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-details">
            <span>{offerFormat(discountPercentage)}</span>
            <span>{ratingStars(rating)}</span>
            <h1>{title}</h1>
            <div>
              <span>{brand}</span>
              <span>{category}</span>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <div>
              <h2>{priceInINR}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
