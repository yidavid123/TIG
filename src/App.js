import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/Login'
import Sign_up from './pages/Sign_up'

import CustomHeader from './components/Navbar';
import CustomFooter from './components/Footer';
import APITest from './pages/APITest'
import MyGTG from './pages/MyGTG'


import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';


class App extends Component {

  render() {
  return (
    <div>

    <CustomHeader />
    <CustomFooter />

      <Router>
        <Switch>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/logout" render={(props) => <Login logout="YES"/>}/>
          <Route exact path="/sign_up" component={Sign_up}/>} />
          <Route exact path="/api_test" component={APITest}/>} />
          <Route exact path="/MyGTG" component={MyGTG}/>} />
          <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
          <Route exact path="/about" component={About}/>} />
          <Route exact path="/team" component={Team}/>} />
          <Route exact path="/contact" component={Contact}/>} />
        </Switch>
      </Router>

    </div>
  );
}
}

export default App;
