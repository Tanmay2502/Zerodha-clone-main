import React from "react";

function RightSection({
  imageURL,
  productName,
  ProductDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 border-top">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <div className="">
            <a href="{learnMore}" style={{ textDecoration: "none" }}>
              learn More
            </a>
          </div>
        </div>
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
