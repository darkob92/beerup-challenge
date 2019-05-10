import React, { Component } from 'react';
import './signup.scss';

class SignUp extends Component {
  render() {
    return(
      <section className="sign-up-section">
        <h3>Quick, join up before we drink all the beer!</h3>

        <div className="form-container">
          <form>
            <div className="input-container">
              <label>Personal Information</label>
              <input type="text" placeholder="Full name" />
            </div>
            <div className="input-container">
              <label>Contact Information</label>
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone number" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;