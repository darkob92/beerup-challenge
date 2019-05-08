import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
