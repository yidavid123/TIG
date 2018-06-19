import React, { Component } from 'react';
import '../css/Sign_up.css';
import AuthService from '../api/AuthService';
import Button from '@material-ui/core/Button';

class Sign_up extends Component {

  constructor(){
    super()
    this.Auth = new AuthService()
    this.state={
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      phone_number:'',
      password: ''
    }
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit(e){
    e.preventDefault()
    this.Auth.create(this.state.first_name,
                     this.state.last_name,
                     this.state.email,
                     this.state.address,
                     this.state.phone_number,
                     this.state.password)
    .then(res =>{
      this.props.history.replace('/Feed')
    })
    .catch(err =>{ alert(err) })
  }

  canBeSubmitted() {
    let form = this.state
    return (
      form.first_name.length > 0 &&
      form.last_name.length > 0 &&
      form.email.length > 0 &&
      form.address.length > 0 &&
      form.phone_number.length > 0 &&
      form.password.length > 6
    )
  }


  render() {
    const isEnabled=this.canBeSubmitted()
    return (
      <div className="center">
        <div className="card">

          <form
            onSubmit={this.handleFormSubmit.bind(this)}
          >
          <input
            className="form-item"
            placeholder="Enter First Name"
            name="first_name"
            type="text"
            onChange={this.handleChange.bind(this)}
            required
          />

          <input
            className="form-item"
            placeholder="Enter Last Name"
            name="last_name"
            type="text"
            onChange={this.handleChange.bind(this)}
            required
          />

          <input
              className="form-item"
              placeholder="Enter Email"
              name="email"
              type="email"
              onChange={this.handleChange.bind(this)}
              required
          />

          <input
              className="form-item"
              placeholder="Enter Phone Number"
              name="phone_number"
              type="text"
              onChange={this.handleChange.bind(this)}
              required
          />

          <input
              className="form-item"
              placeholder="Enter Address"
              name="address"
              type="address"
              onChange={this.handleChange.bind(this)}
          />

          <input
              className="form-item"
              placeholder="Enter Password"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              required
          />

          <Button
              className="form-submit"
              value="Submit"
              type="submit"
          />

          </form>
          <a href="/Login"> Login</a><br />
        </div>
      </div>
    );
  }
}

export default Sign_up;
