import React from "react";
import { dataOfServices } from "./API.jsx";

export default function Service() {
  return (
    <>
    <div className="container">
      <div className="row pt-5">
      {dataOfServices.map((curElem, i) => {
        return(
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div className="card pb-4 mb-4 col-12">
          <img src={curElem.imgURL} className="card-img-top" height={'200px'} alt="field related img" />
          <div className="card-body">
            <h5 className="card-title">{curElem.title} <span>{curElem.title2}</span></h5>
            <p className="card-text">
              {curElem.desc}
            </p>
            <button className="h-btn hvr-pulse">load more</button>
          </div>
          </div>
        </div>)
      })}
      </div>
    </div>
    </>
  );
}
