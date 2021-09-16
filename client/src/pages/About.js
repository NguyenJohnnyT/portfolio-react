import React from "react";
import "./style.css"
function About () {
  return (
    <div className="jumbotron jumbotron-fluid p-4 text-light d-flex align-items-center fillpage">
      <h1 className="display-4 m-5">Johnny Nguyen</h1>
      <div className='col-8'>
        <p>Based in Santa Clara, California, I am an aspiring programmer with practice in various languages including HTML, CSS, JavaScript, and Python</p>
        <br/>
        <p>This portfolio was built with React and includes a backend database that allows an authenticated administrator to add and remove projects and skills into the portfolio database.  Currently, only the administrator (me) can login to the website<sup><i>as long as my username and password has not been leaked!</i></sup>.  Passwords are hashed and salted via bcrypt.  Logged in users have sessions utilized by jsonwebtokens. Future features include allowing logged in users to personally send me messages via a message board.</p>
        <br/>
        <p>The Projects page is populated from what is stored in the <code>johnny-portfolio</code> database. The actual screenshots are imported from my Google Drive. For a look into the actual code and packages used, please visit 
          <a className='noLink' href="https://github.com/NguyenJohnnyT/portfolio-react"> the portfolio repo</a>
        .
        </p>
      </div>
    </div>
  )
}

export default About;