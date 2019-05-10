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
            <div className="input-container">
              <label>RSVP</label>
              <div className="input-container__radio">
                <input type="radio" name="answer" value="yes" /><span>I'm coming!</span>
              </div>
              <div className="input-container__radio">
                <input type="radio" name="answer" value="maybe" /><span>Maybe?</span>
              </div>
              <div className="input-container__radio">
                <input type="radio" name="answer" value="no" /><span>Can't make it</span>
              </div>
              <textarea placeholder="Something you'd like to add?" rows="6" cols="50"></textarea>
            </div>
            <div className="input-container">
              <div className="input-container__radio">
                <input type="checkbox" name="answer" value="maybe" /><span>Let me know about future beerups!</span>
              </div>
              <div className="input-container__radio">
                <input type="checkbox" name="answer" value="maybe" /><span>Remind me one day before this beerup!S</span>
              </div>
            </div>
            <button className="submit" type="submit">Join up</button>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;