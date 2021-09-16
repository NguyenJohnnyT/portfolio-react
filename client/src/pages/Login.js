import React, { useState } from "react";
import "./style.css"
import { loginUser } from "../utils/API";
import { Link, useLocation } from "react-router-dom";
import Auth from "../utils/auth";

const Login = () => {
  let styles = {
    text_deco: {
      "textDecoration": "none"
    }
  }

  const logMeIn = async (e) => {
    e.preventDefault();
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;
    const response = await loginUser({username, password})
    if (response.ok) {
      const {token, userData } = await response.json();
      Auth.login(token, userData.id);
      document.location.replace('/admin');
    } else {
      alert('Invalid credentials!');
    };
  }

  return (
    <div id="loginpage" className='row justify-content-center p-3 fillPage'>
      <form id='form'>
        <div className="mb-3">
          <label htmlFor="labelUsername" className="form-label">Username</label>
          <input type="username" className="form-control" id="inputUsername" aria-describedby="emailHelp" />
          <div id="usernameHelp" className="form-text">Administrative access for now.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="labelPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <button type="submit" onClick={logMeIn} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login