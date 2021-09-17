import React, { useState, useEffect } from 'react';
import './style.css';
import { unsplashAPI } from '../../utils/unsplashAPI';
import HomeText from './HomeText';
import placeholder from '../../assets/img/placeholder/placeholderBG.png'

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
      backgroundImage: `url("${placeholder}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"
    }
  }
  return(
    <>
    {background.length > 1 
    ? <HomeText bgStyle={styles.backgroundURL} />
    : <HomeText bgStyle={styles.noURL}/>
    }
    </>
  )
}

export default HomeBG