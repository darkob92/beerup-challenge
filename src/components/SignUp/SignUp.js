import React, { Component } from 'react';
import './signup.scss';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }


  handleChange = (e) => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state;

    fetch('https://my-json-server.typicode.com/typicode/demo/profile', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => alert(`Success! Welcome ${response.name}`))
      .then(response => {
        setTimeout(() => {
          this.props.history.push('/')
        }, 2000)
      })
      .catch(error => console.error('Error:', error));
  }



  render() {
    return(
      <section className="sign-up-section">
        <h3>Quick, join up before we drink all the beer!</h3>

        <div className="form-container">
          <form method="post" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <label htmlFor="name">Personal Information</label>
              <input name="name" id="name" type="text" placeholder="Full name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="input-container">
              <label htmlFor="email">Contact Information</label>
              <input name="email" id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
              <label htmlFor="phone"></label>
              <input name="phone" id="phone" type="number" placeholder="Phone number" value={this.state.phone} onChange={this.handleChange} />
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
                <input type="checkbox" name="know" value="know" /><span>Let me know about future beerups!</span>
              </div>
              <div className="input-container__radio">
                <input type="checkbox" name="remind" value="remind" /><span>Remind me one day before this beerup!S</span>
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