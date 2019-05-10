import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      {/* <Main /> */}
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
