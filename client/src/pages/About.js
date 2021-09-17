import React from "react";
import "./style.css"
import me from "../assets/img/me/me.png"

function About () {
  return (
    <div className="jumbotron jumbotron-fluid p-4 text-light d-flex align-items-center fillpage">
      <div className='col-4 d-flex flex-column align-items-center about-me'>
        <h1 className="display-4 m-5 about-name">Johnny Nguyen</h1>
        <img src={me} className='pfp' alt="johnny"/>
      </div>
      <div className='col-8 about-text'>
        <p>Based in Santa Clara, California, I am an aspiring programmer with practice in various languages including HTML, CSS, JavaScript, and Python</p>
        <br/>
        <p>This portfolio was built with React and includes a backend database that allows an authenticated administrator to add and remove projects and skills into the portfolio database.  Currently, only the administrator (me) can login to the website<sup><i>as long as my username and password has not been leaked!</i></sup>.  Passwords are hashed and salted via bcrypt.  Logged in users have sessions utilized by jsonwebtokens. Future features include allowing logged in users to personally send me messages via a message board.</p>
        <br/>
        <p>The Projects page is populated from what is stored in the <code>johnny-portfolio</code> database. The actual screenshots are imported from my Google Drive. For a look into the actual code and packages used, please visit 
          <a className='noLink' href="https://github.com/NguyenJohnnyT/portfolio-react"> the portfolio repo</a>
        .
        </p>
        <br/>
        <p>
          Lastly, an ever growing list of skills and tech I've covered inside and outside of UCBerkeley Bootcamp:
          <ul>
            <li><strong className="strongTitle">Languages: </strong> HTML, CSS, JavaScript, Python</li>
            <li><strong className="strongTitle">Technologies: </strong> Bootstrap, jQuery, Git, Insomnia, indexDB, MongoDB, MySQL, Node.js, Express.js, Handlebars, Express-sessions, JSON Web Tokens, React, ReactHooks, GraphQL, Heroku, Insomnia</li>
            <li><strong className="strongTitle">Concepts: </strong> JSON, Web, Server-side, & REST APIs, AJAX/Fetch, ES6,  Object-oriented Programming (OOP), Pseudocode, Data Structures, Algorithms, Front/Backend & Full Stack Development, Imperative & Declarative Programming</li>
            <li><strong className="strongTitle">Packages of interest:  </strong> HowlerJS, node-cron, node-fetch, bcrypt, Sequelize, Mongoose, Morgan</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default About;