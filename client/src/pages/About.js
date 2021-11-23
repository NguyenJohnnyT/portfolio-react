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
        <p>Based in Santa Clara, California, I am a full-stack engineer with practice in various languages including HTML, CSS, JavaScript, and Python.  I graduated from the UC Berkeley Extension web development bootcamp hosted by Trilogy Education in September 2021. I am now working part time there as a teaching assistant for the Winter/Spring cohort in 2022. I love to teach, build, and collaborate on small and big projects so I hope to find like-minded individuals, colleagues, and students there. Still, alongside this fulfilling teaching position, I currently am looking for a <code className='about-code'>full time position in software development</code> as the main career goal. I am available for conversation through LinkedIn, my email <code className='about-code'>johnnytrucnguyen@gmail.com</code>, and by phone <code className='about-code'>408-641-5559</code>.</p>
        <br/>
        <p>This portfolio was built with React and utilizes a MySQL database that allows an authenticated administrator to add and remove projects and skills into the portfolio database. Currently, only the administrator (me) can login to the website<sup><i>as long as my username and password has not been leaked!</i></sup>. Future features include allowing logged in users or guests to personally send me messages via a message board. Logged in users have sessions utilized by jsonwebtokens and have secured hashed and salted passwords. </p>
        <br/>
        <p>The Projects page is populated from what is stored in the <code className='about-code'>johnny-portfolio</code> database with screenshots provided through Imgur. For a look into the actual code and packages used, please visit 
          <a className='noLink' href="https://github.com/NguyenJohnnyT/portfolio-react"> the portfolio repo</a>
        .
        </p>
        <br/>
        <p>
          Lastly, an ever growing list of skills and tech I've covered inside and outside of UC Berkeley Bootcamp:
          <ul>
            <li><strong className="strongTitle">Proficient Languages: </strong> HTML, CSS, JavaScript, Python, SQL</li>
            <li><strong className="strongTitle">Technologies and applications: </strong> Bootstrap, jQuery, Git, Insomnia, indexDB, MongoDB, MySQL, Node.js, Express.js, Handlebars, Express-sessions, JSON Web Tokens, React, ReactHooks, GraphQL, Heroku, Insomnia</li>
            <li><strong className="strongTitle">Learned Concepts: </strong> JSON, Web, Server-side, & REST APIs, AJAX/Fetch, ES6,  Object-oriented Programming (OOP), Pseudocode, Data Structures, Algorithms, Front/Backend & Full Stack Development, Imperative & Declarative Programming, deployment into the cloud (AWS, SAP)</li>
            <li><strong className="strongTitle">Packages that I have worked with:  </strong> HowlerJS, node-cron, node-fetch, bcrypt, Sequelize, Mongoose, Morgan, react-phys-color, discord-py, discord-py-slash-command, dotenv</li>
          </ul>
        </p>
        <p><sup>This page was last updated 11/23/2021</sup></p>
      </div>
    </div>
  )
}

export default About;