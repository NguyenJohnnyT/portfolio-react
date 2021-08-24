import React from "react";

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
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="message"
            placeholder="Your message"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;