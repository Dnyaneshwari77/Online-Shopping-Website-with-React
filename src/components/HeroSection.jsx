import React from "react";
import img from "../assets/home.jpg";

export default function HeroSection() {
  return (
    <>
      <div className="container-fluid herosection">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={img} alt="Best jewelry" className="img-thumbnail" />
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
              <h1>Greatest jewelry here</h1>
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
