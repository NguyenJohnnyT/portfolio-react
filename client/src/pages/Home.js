import React from "react";
import "./style.css"
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
    <div className="row d-flex justify-content-center fillPage">

      <div className="accordion m-3" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">About Me:</button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body row">
              <div className = "col-4 accord-img-content">
                <img src={johnnypfp} className='img-accord m-2' alt="pfp" />
              </div>
              <div className="col-8 accord-content pt-2"><strong>Hello!</strong> Welcome to my website! As a graduate of the Summer 2021 UC Berkeley ExtensionCoding Boot Camp, I have aspirations to becoming a web developer with a heavy interest in the backend routes. I love music, fitness, teaching and connecting with people of similar mind. Feel free to check out any of the projects in the Projects tab.  
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Skills:
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body row">
              <div className = "col-4 accord-img-content">
                <img src={twhlogo} className='img-accord m-2' alt="TWH" />
              </div>
                <div className="col-8 accord-content pt-2"><strong>Looking for a particular skillset?  These are the technologies I work with and have great interest in:</strong> 
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

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Contact:
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body row">
              <div className = "col-4 accord-img-content">
                <img src={eevee} className='img-accord m-2' alt="eevee" />
              </div>
                <div className="col-8 accord-content pt-2"><strong>Feel free to contact me using the information provided below.</strong>
                  <ul> 
                    <li> 408-314-7814</li> 
                    <li>
                      <a 
                      style={styles.text_deco} 
                      href='mailto:johnnytrucnguyen@gmail.com'
                      > 
                      <code>mailto: </code>
                      </a><span>johnnytrucnguyen@gmail.com</span>
                    </li>
                    <li>
                      <a rel='noreferrer' 
                      style={styles.text_deco} 
                      href='https://www.linkedin.com/in/johnny-nguyen-17941532' target='_blank'
                      >LinkedIn</a>
                    </li>
                    <li>
                      <a 
                      href='https://github.com/NguyenJohnnyT' target='_blank' 
                      rel='noreferrer'
                      style={styles.text_deco}
                      >GitHub</a>
                    </li>
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