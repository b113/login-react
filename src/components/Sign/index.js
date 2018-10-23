import React, { Component } from 'react';
import styles from './sign.module.css';

class Sign extends Component {
  render() {
    return (
      <div className={styles.signIn}>
        <form action="#" name="signInForm" className={styles.signInForm} method="post">
          <label htmlFor="username" className={styles.signInForm__usernameLabel}>Username</label>
          <input type="text" name="username" className={styles.signInForm__usernameInput} />
          <label htmlFor="password" className={styles.signInForm__passwordLabel}>Password</label>
          <input type="password" name="password" className={styles.signInForm__passwordInput} />
          <input type="checkbox" name="keepsigned" id="keepsigned" className={styles.signInForm__keepsignedInput} />
          <label htmlFor="keepsigned" className={styles.signInForm__keepsignedLabel}>Keep me signed in</label>
          <input type="submit" value="Sign in" className={styles.signInForm__submitBtn} />
        </form>
        <a href="#" className={styles.signIn__recoverLinkPass}>Forgot password</a>
      </div>
    );
  }
}

export default Sign;
