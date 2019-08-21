import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SigninPage from './pages/signinpage/signinpage.component';

import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() { 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route page='/signin' component={SigninPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
