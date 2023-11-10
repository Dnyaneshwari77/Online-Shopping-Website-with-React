import React from "react";
import { useSearchContext } from "../context";
import { useNavigate } from "react-router";
import HeroSection from "../components/HeroSection";
import img from "../assets/lighting.jpeg";
import cloth from "../assets/cloth.jpeg";

export default function Home() {
  let { categories, products, setCategory } = useSearchContext();
  let popularCat = categories.slice(0, 7);
  let someProducts = products.slice(0, 5);
  let navigate = useNavigate();

  const handleClick = (category) => {
    console.log("handleClick called with category:", category);
    setCategory(category);
    navigate("/categories");
  };
  return (
    <>
      <HeroSection />
      <div className="container-fluid categories ">
        <div className="container">
          <div className="row ">
            {popularCat.map((category, index) => {
              return (
                <div
                  className="col catContainer"
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(category)}
                >
                  {category}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container-fluid herosection">
        <div className="container">
          <div className="row">
            <div
              className="col"
              style={{
                alignContent: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2>Cool lighting</h2>
              <h2>Make your comfort zone more comfortable</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
                nam. Consequuntur sit perferendis veritatis praesentium.
                Molestiae aut ex nisi, impedit assumenda obcaecati rerum ipsum
                libero sapiente doloribus est porro cumque?
              </p>
            </div>
            <div className="col-5">
              <img src={img} alt="Best jewelry" className="img-thumbnail" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid categories ">
        <div className="container">
          <div className="row ">
            {someProducts.map((product) => {
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
                <div className="col" key={id}>
                  <div className="image-container">
                    <img src={thumbnail} className="img-thumbnail" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container-fluid herosection">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img
                src={cloth}
                alt="Best jewelry"
                className="img-thumbnail"
                style={{ height: "500px" }}
              />
            </div>
            <div
              className="col"
              style={{
                alignContent: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1>Best collection of cloths</h1>
              <h2>Beautiful and in your budget</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
                nam. Consequuntur sit perferendis veritatis praesentium.
                Molestiae aut ex nisi, impedit assumenda obcaecati rerum ipsum
                libero sapiente doloribus est porro cumque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
