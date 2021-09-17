import React, { useState, useEffect } from 'react';
import './style.css';
import { unsplashAPI } from '../../utils/unsplashAPI';

const HomeBG = () => {
  const [background, setBackground] = useState([])
  
  useEffect( ()=> {
    const getBG = async () => {
      let url = await unsplashAPI();
      setBackground(url);
    };
    // const bgArr = getBG();
    // console.log(bgArr);
    // let randomIdx = Math.floor(Math.random()*bgArr.length)
    getBG();
  }, [])
  
  const styles = {
    backgroundURL: {
      backgroundImage: `url("${background}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"
    },
    noURL: {
      backgroundImage: `url("https://mdbootstrap.com/img/new/standard/city/041.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"
    }
  }
  return(
    <>
    {background 
    ? (
      <div 
      id="bg-img" 
      className="bg-image shadow-2-strong" 
      style={styles.backgroundURL}>
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
    : (
      <div 
      id="bg-img" 
      className="bg-image shadow-2-strong" 
      style={styles.noURL} >
        <div className="mask shadows">
          <div className="container d-flex align-items-center justify-content-center text-center position-absolute top-50 start-50 translate-middle h-50">
            <div id='hero-box' className="bg-dark  p-5 text-white">
              <h1 className="mb-3">Johnny Nguyen</h1>
              <h3 className="mb-3">Developer, Bay Area Native</h3>
            </div>
          </div>
        </div>
      </div> 
    )}
    </>
  )
}

export default HomeBG