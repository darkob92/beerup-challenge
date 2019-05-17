import React from 'react';
import './Sass/App.scss';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Favorites from './components/Favorites/Favorites';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Banner />
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={SignUp} />
        <Favorites />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
