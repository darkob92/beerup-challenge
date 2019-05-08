import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
