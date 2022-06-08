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
        <h3>Current Position:</h3>
        <p>I am formerly a front-end engineer for <a className='noLink' href="https://www.kernel.com">Kernel</a> and currently a part time teaching assistant for <a className='noLink' href="https://bootcamp.berkeley.edu/coding/">UC Berkeley Extension Coding Boot Camp</a>.</p>  
        <br/>
        <h3>My Story:</h3>
        <p>I was born in the Bay Area where my journey took me through several career prospects--I graduated at San Jose State University with a chemistry degree before moving on to pharmacy school in Albany, NY. I graduated and became a licensed pharmacist in Nevada and Oregon. While I enjoyed interacting and helping patients through my internships, I felt a strong passion to build something in tech. Perhaps it was my roots in Silicon Valley calling me? In 2021, I dabbled in coding and eventually entered a program at UC Berkeley Extension Boot Camp for Web Development. I graduated and continue to build projects that inspire me. I love to teach others and entertain!</p>
        <p>My current hobbies include rock climbing, working out, playing piano, watching Twitch streams (mostly Dota2 and Starcraft), and leaving Hololive in the background while I work. I love listening to music and would love new suggestions!</p>
        <br/>
        <h3>Contact me:</h3>
        <p>I am available for conversation through <a className='noLink' href="https://www.linkedin.com/in/johnny-truc-nguyen">LinkedIn</a>
        , my email <code className='about-code'>johnnytrucnguyen@gmail.com</code> and by phone <code className='about-code'>408-641-5559</code>. This portfolio repo is hosted at <a className='noLink' href="https://github.com/NguyenJohnnyT/portfolio-react">GitHub</a>.</p> 
        <br/>
        <h3>My Skills and Technologies:</h3>
        <p>
          <ul>
            <li><strong className="strongTitle">Proficient Languages: </strong> HTML, SCSS, TypeScript, Python, SQL</li>
            <li><strong className="strongTitle">Technologies and applications: </strong> Figma, Bootstrap, jQuery, Git, Insomnia, indexDB, MongoDB, MySQL, Node.js, Express.js, Handlebars, Express-sessions, JSON Web Tokens, React, ReactHooks, GraphQL, Heroku, Insomnia</li>
            <li><strong className="strongTitle">Learned Concepts: </strong> JSON, Web, Server-side, & REST APIs, AJAX/Fetch, ES6,  Object-oriented Programming (OOP), Pseudocode, Data Structures, Algorithms, Front/Backend & Full Stack Development, Imperative & Declarative Programming, deployment into the cloud (AWS, SAP)</li>
            <li><strong className="strongTitle">Packages that I have worked with:  </strong> Ant Design Components, React-Query, HowlerJS, node-cron, node-fetch, bcrypt, Sequelize, Mongoose, Morgan, react-phys-color, discord-py, discord-py-slash-command, dotenv</li>
          </ul>
        </p>
        <p><sup>This page was last updated 6/08/2022</sup></p>
      </div>
    </div>
  )
}

export default About;