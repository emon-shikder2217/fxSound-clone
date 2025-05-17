import React from 'react';
import Hero from './components/Hero/Hero';
import './App.css';
import Page1 from './components/Page1/Page1';
// import Page2 from './components/Page2/Page2';


const App = () => {
  return (
    <div>
      <Hero />
      <Page1 />
      {/* <Page2 /> */}
    </div>
  )
}

export default App;
