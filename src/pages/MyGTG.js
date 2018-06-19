import React, { Component } from 'react';
import '../css/Feed.css';
import WithAuth from '../api/WithAuth';
import { Jumbotron } from 'react-bootstrap'
import { get_user } from '../api/UserAPI'

class MyGTG extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: ''
    }
  }

  componentWillMount() {
    get_user(this.props.userId)
    .then(APIuser => {
      this.setState({
        user:APIuser.user
      })
    }
    )
  }
  render() {
    return (
      <div id="feed-page">
      <div className='jumbo'>
        <Jumbotron>
        </Jumbotron>
      </div>
        <div className='feed-title'>
        <h1>Welcome Back {this.state.user.first_name}</h1>
        </div>


      </div>
    );
  }

}
export default WithAuth(MyGTG);
