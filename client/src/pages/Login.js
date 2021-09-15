import React, { useState } from "react";
import "./style.css"

const Login = () => {
  let styles = {
    header: {
      "marginRight": "0",
      background: "#ECEFF1",
      height: '93vh'
    },
    text_deco: {
      "textDecoration": "none"
    }
  }

  return (
    <div style={styles.header} id="loginpage" className='row justify-content-center p-3'>
      <form id='form'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Username</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="usernameHelp" className="form-text">Administrative access for now.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login