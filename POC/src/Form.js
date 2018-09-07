import React from 'react';

export default class Form extends React.Component {
  state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
  var firstNameget = this.state.firstName;
  var lastNameget = this.state.lastName;
  var emailget = this.state.email;
  var usernameget = this.state.username;
  var passwordget = this.state.password;

  fetch('http://localhost:3002/test/datasend?firstName='+firstNameget+'&lastName='+lastNameget+'&email='+emailget+'&username='+usernameget+'&password='+passwordget)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(this.state));
  });

  alert("Data Sent On Ethereum BlockChain");


    // fetch("http://localhost:3002/test/datasend").then(function(response) {
    //     return response.json();
    // }).then(function(muutuja){
    //     document.getElementById('väljund').innerHTML = JSON.stringify(muutuja);
    // });




    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };



      render() {
            return (
              <div class="formData">
              <h4>Send Data into Ethereum BlockChain  </h4>
              <form> 
                   
                    <label>First Name</label>
                    <input
                      class="form-control"
                      name="firstName"
                      placeholder="First name"
                      value={this.state.firstName}
                      onChange={e => this.change(e)}
                    />
                    <br />
                    <label>Last Name</label>
                    <input
                      class="form-control"
                      name="lastName"
                      placeholder="Last name"
                      value={this.state.lastName}
                      onChange={e => this.change(e)}
                    />
                    <br />
                    <label>Username</label>
                    <input
                      class="form-control"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={e => this.change(e)}
                    />
                    <br />
                    <label>Email</label>
                    <input
                      class="form-control"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={e => this.change(e)}
                    />
                    <br />
                    <label>Password</label>
                    <input

                      class="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={e => this.change(e)}
                    />
                    <br />
                    <button type="submit" onClick = { e=> this.onSubmit()} class="form-control" onClick={e => this.onSubmit(e)}>Submit</button>
                  </form>

              </div>
            );

      }

}
