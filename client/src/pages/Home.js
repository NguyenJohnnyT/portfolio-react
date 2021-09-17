import React from "react";
import "./style.css"
import HomeBG from "../components/Home-BG/Home-BG";
import eevee from "../assets/img/misc/eeveeBig.png"
import twhlogo from "../assets/img/projects/TWHlogo.png"
import johnnypfp from "../assets/img/misc/johnnypfp.jfif"

function Home() {
  let styles = {
    text_deco: {
      "textDecoration": "none",
      "color": "gold"
    }
  }

  return (
    <HomeBG />
  );
}

export default Home;