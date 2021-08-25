import React from "react";
import "./style.css"
class Form extends React.Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}!  Johnny will try to contact you shortly.  Alternatively, send him a message on his LinkedIn page`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <div className='contactjs'>
        <h1 className='formheader'>
          please fill out this form
        </h1>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <br/>
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <br/>
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <br/>
          <textarea
            className="message"
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="message"
            placeholder="Your message"
          />
          <br/>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;