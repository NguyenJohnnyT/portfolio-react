import React from 'react';
import './style.css';

const HomeText = ({textStyle}) => {
  return (
    <div 
    id="bg-img" 
    className="bg-image shadow-2-strong" 
    style={textStyle}>
       <div className="mask shadows">
        <div className="container d-flex align-items-center justify-content-center text-center position-absolute top-50 start-50 translate-middle h-50">
          <div id='hero-box' className="bg-dark  p-5 text-white">
            <h1 className="mb-3">Johnny Nguyen</h1>
            <h4 className="mb-3">Developer, Bay Area native, Tabletop enthusiast</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeText