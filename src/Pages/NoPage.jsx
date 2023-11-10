import React from "react";
import notfound from "../assets/notfound.gif";

export default function NoPage() {
  return (
    <div className="container-fluid">
      <img
        src={notfound}
        alt="404 Not Found"
        className="img-fluid"
        style={{ minWidth: "100vw" ,maxHeight:"500px"}}
      />
    </div>
  );
}
