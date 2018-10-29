import React, { Component } from 'react';
import styles from './join.module.css';

class Join extends Component {
  render() {
    return (
      <div className={styles.joinUs}>
        <form action="#" name="joinUsForm" className={styles.joinUsForm} method="post">

          <label htmlFor="username" className={styles.joinUsForm__usernameLabel}>Username</label>
          <input type="text" name="username" className={styles.joinUsForm__usernameInput} />

          <label htmlFor="password" className={styles.joinUsForm__passwordLabel}>Password</label>
          <input type="password" name="password" className={styles.joinUsForm__passwordInput} />

          <label htmlFor="password_confirm" className={styles.joinUsForm__passwordConfirmLabel}>Confirm password</label>
          <input type="password" name="password_confirm" className={styles.joinUsForm__passwordConfirmInput} />

          <input type="submit" value="Join us" className={styles.joinUsForm__submitBtn} />
        </form>
      </div>
    );
  }
}

export default Join;
