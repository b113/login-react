import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Join from '../Join';
import Sign from '../Sign';
// import './app.css';
import styles from './app.module.css'

class App extends Component {
  render() {
    console.log(styles)
    return (
      <Router>
        <div className={styles.App}>
          <nav>
            <Link to="/">Sign in</Link>
            <Link to="/join">Join us</Link>
          </nav>
          <Route exact path="/" component={Sign} />
          <Route path="/join" component={Join} />
        </div>
      </Router>
    );
  }
}

export default App;
