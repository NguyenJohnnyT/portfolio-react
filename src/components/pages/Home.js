import React from "react";

function Home() {
  let styles = {
    header: {
      "margin-right": "0"
    },
    text_deco: {
      "text-decoration": "none"
    }
  }

  return (
    <div class="row d-flex justify-content-center" style={styles.header}>

      <div class="accordion m-3" id="accordionExample">

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">About Me:</button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body row">
              <div class = "col-4 accord-img-content">
                <img src="./assets/images/johnnypfp.jfif" class='img-accord m-2' alt="pfp" />
              </div>
              <div class="col-8 accord-content pt-2"><strong>Hello!</strong> Welcome to my website!  A soon to be graduate of the UC Berkeley Extension Coding Boot Camp, I have aspirations to becoming a web developer with a heavy interest in the backend routes.  I love music, fitness, teaching and connecting with people of similar mind.  Feel free to check out any of the projects and freelance projects I have done over the past year.  
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item" >
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Skills:
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body row">
              <div class = "col-4 accord-img-content">
                <img src="./assets/images/Sample repo images/TWHlogo.png" class='img-accord m-2' alt="TWH" />
              </div>
                <div class="col-8 accord-content pt-2"><strong>Looking for a particular skillset?  These are the technologies I work with and have great interest in:</strong> 
                  <ul> 
                    <li>HTML5, CSS, Javascript, Python</li> 
                    <li>Bootstrap, Handlebars, jQuery, Insomnia, Sequelize, MySQL, HowlerJS, Heroku, bcrypt, sessions, express.js, node.js</li>  
                    <li>WebAPI, Server side API, RESTful API</li>
                    <li>Pseudocode, OOP, JSON, Git, ES6</li>
                    <li>Full Stack Development (but I really like the backend!)</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Projects and experience:
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body row">
              <div class = "col-4 accord-img-content">
                <img src="./assets/images/eeveeBig.png" class='img-accord m-2' alt="eevee" />
              </div>
                <div class="col-8 accord-content pt-2"><strong>For a further exploration of my projects, check out my <a href="https://github.com/NguyenJohnnyT" style={styles.text_deco}>gitHub!</a></strong>
                  <ul> 
                    <li>Full Stack Focused: Employee Management System, Three Word History, Tech Blog, Pokebattler</li> 
                    <li>Node and/or express: Team Profile generator, Note Taker, E-Commerce, README Generator</li>
                    <li>Beginner Projects: Password generator, Code quiz, Day planner, Weather dashboard</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;