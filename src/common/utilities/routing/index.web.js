import React, {Component} from 'react';
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'
import isElectron from 'is-electron';
import HomeScreen from "../../screens/HomeScreen";
import OtherScreen from '../../screens/OtherScreen';
import AnotherScreen from '../../screens/AnotherScreen';

/*
 * Remove Platform specific exports :/
 */
const Router = isElectron() ? HashRouter : BrowserRouter


class Navigation extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route path='/other' component={OtherScreen}/>
            <Route path='/another' component={AnotherScreen}/>
          </Switch>
        </Router>
    );
  }
}

export default {Navigation, Link, Route, Redirect, Router, Switch, withRouter}
export         {Navigation, Link, Route, Redirect, Router, Switch, withRouter}
