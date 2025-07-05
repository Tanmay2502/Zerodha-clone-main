import React from "react";

function LeftSection({
  imageURL,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-3 mt-5">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <div className="mt-3">
            <a href="{tryDemo}" style={{ textDecoration: "none" }}>
              Try Demo
            </a>
            <a
              href="{learnMore}"
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              learn More
            </a>
          </div>
          <div>
            <a href="{googlePlay}">
              <img src="images\googlePlayBadge.svg" />
            </a>
            <a href="{appStore}">
              <img src="images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
