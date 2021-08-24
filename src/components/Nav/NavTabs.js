import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <div class="jumbotron jumbotron-fluid p-4 text-light d-flex align-items-center">
        <h1 class="display-4">Johnny Nguyen</h1>
            <p>Based in Santa Clara, California, I am an aspiring programmer with practice in various languages including HTML, CSS, JavaScript, and Python</p>
        <div>
          <a class="btn btn-success btn-lg m-1" href="#linksToWork" role="button">Projects</a>
          <a class="btn btn-primary btn-lg m-1" data-bs-toggle="modal" data-bs-target="#contactMe" href="#contactMe" role="button">Contact</a>
          <a class="btn btn-warning btn-lg m-1" href="./assets/Resume/resume 07132021.pdf" role="button">Résumé</a>
        </div>
    </div>
  )
}

export default NavTabs;