import React, { useState, useEffect } from 'react';
import './style.css';
import { unsplashAPI } from '../../utils/unsplashAPI';
import HomeText from './HomeText';

const HomeBG = () => {
  const [background, setBackground] = useState([])
  
  useEffect( ()=> {
    const getBG = async () => {
      let url = await unsplashAPI();
      setBackground(url);
    };
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
    ? <HomeText textStyle={styles.backgroundURL} />
    : <HomeText textStyle={styles.noURL} />
    }
    </>
  )
}

export default HomeBG