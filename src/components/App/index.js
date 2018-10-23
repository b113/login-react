import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Join from '../Join';
import Sign from '../Sign';
import styles from './app.module.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <nav className={styles.nav}>
            <NavLink exact className={styles.nav__link} to="/" activeClassName={styles.nav__link_active}>Sign in</NavLink>
            <NavLink className={styles.nav__link} to="/join" activeClassName={styles.nav__link_active}>Join us</NavLink>
          </nav>
          <Route exact path="/" component={Sign} />
          <Route path="/join" component={Join} />
        </div>
      </Router>
    );
  }
}

export default App;
