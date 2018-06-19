import React, { Component } from 'react';
import {update_user,delete_user} from '../api/UserAPI';
import {get_user_gtg,get_user_gtgs,add_user_gtg,delete_user_gtg,update_user_gtg} from '../api/GTGAPI'


import WithAuth from '../api/WithAuth';

class APITest extends Component {

//  this.props.userId is the loginUserId.  It is available to all pages with WithAuth wrapped page
// YELP TESTING ..  using below logic will get list of 5 resturant from backend
  handleYelpSubmit(e){

    e.preventDefault()

      this.props.history.replace('/Result')

  }


  handleUserDelete(e){
    e.preventDefault()
    let userId = 2
    delete_user(userId)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handleUserUpdate(e){
    e.preventDefault()
    let user = {id:1,first_name:"TESTtee"}
    update_user(user)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }


  handlegtgGet(e){
    e.preventDefault()

    get_user_gtg(89)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handlegtgAdd(e){
    e.preventDefault()
    var gtg = {name:"TEST1",location:"Houston",price_range:1}
    add_user_gtg(this.props.userId,gtg)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handlegtgDelete(e){
    e.preventDefault()

    delete_user_gtg(4)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  handlegtgUpdate(e){
    e.preventDefault()
    	var gtg = {"id":"1","location":"Change5"}
    update_user_gtg(gtg)
    .then(res =>{
      this.props.history.replace('/Yelp')
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>API TEST</h1>

          <form onSubmit={this.handleUserUpdate.bind(this)}>
            <input
              className="form-submit"
              value="User UPDATE"
              type="submit"
            />
          </form>
          <form onSubmit={this.handleUserDelete.bind(this)}>
            <input
              className="form-submit"
              value="User Delete"
              type="submit"
            />
          </form>
          <br/>

          <form onSubmit={this.handlegtgGet.bind(this)}>
            <input
              className="form-submit"
              value="gtg GET"
              type="submit"
            />
          </form>
          <form onSubmit={this.handlegtgAdd.bind(this)}>
            <input
              className="form-submit"
              value="gtg Create"
              type="submit"
            />
          </form>
          <form onSubmit={this.handlegtgDelete.bind(this)}>
            <input
              className="form-submit"
              value="gtg Delete"
              type="submit"
            />
          </form>
          <form onSubmit={this.handlegtgUpdate.bind(this)}>
            <input
              className="form-submit"
              value="gtg Update"
              type="submit"
            />
          </form>
          <br/>

        </div>

      </div>
    );
  }
}

export default WithAuth(APITest);
