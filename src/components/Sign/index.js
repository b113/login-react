import React, { Component } from 'react';
import styles from './sign.module.css';

class Sign extends Component {

  state = {
    errorEmail: false,
    btnDisabled: true,
  }

  emailValidation = e => {
    const re = /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/;
    const { value } = e.target;

    if (re.test(value)) {
      this.setState({ 
        errorEmail: false,
        btnDisabled: false,
       })
    } else {
      this.setState({ 
        errorEmail: true,
        btnDisabled: true,
       })
    }
  }

  render() {
    const { errorEmail, btnDisabled } = this.state;
    return (
      <div className={styles.signIn}>
        <form action="#" name="signInForm" className={styles.signInForm} method="post">
          <label htmlFor="username" className={styles.signInForm__usernameLabel}>E-mail</label>
          <input type="text" name="username" placeholder="Your e-mail" className={ errorEmail ? `${styles.signInForm__usernameInput_error} ${styles.signInForm__usernameInput}` : styles.signInForm__usernameInput} onChange={this.emailValidation} />

          <label htmlFor="password" className={styles.signInForm__passwordLabel}>Password</label>
          <input type="password" name="password" placeholder="Your password" className={styles.signInForm__passwordInput} />

          <input type="checkbox" name="keepsigned" id="keepsigned" className={styles.signInForm__keepsignedInput} />
          <label htmlFor="keepsigned" className={styles.signInForm__keepsignedLabel}>Keep me signed in</label>

          <input type="submit" disabled={btnDisabled} value="Sign in" className={ btnDisabled ? `${styles.signInForm__submitBtn_disabled} ${styles.signInForm__submitBtn}` : styles.signInForm__submitBtn} />
        </form>
        <a href="#" className={styles.signIn__recoverLinkPass}>Forgot password</a>
      </div>
    );
  }
}

export default Sign;
