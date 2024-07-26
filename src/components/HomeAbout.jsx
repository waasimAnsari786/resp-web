import React from 'react'
import "../App.css";

export default function HomeAbout(props) {
  return (
    <>
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-5 pt-5">
              <h1 className='h-head'>{props.head} <span>thapa technical</span></h1>
              <p className='h-pera'>We are team of talented developers for creating websites</p>
              <button className='h-btn hvr-pulse'>{props.btnText}</button>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 pt-5">
              <img className='h-img w-100' height={'500px'} src={props.URL} alt="hero img" />
              </div>
          </div>
        </div>
    </>
  )
}
