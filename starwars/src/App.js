import React from 'react';
import './App.css';


import CharaGrid from "../src/components/CharaGrid";
// import StretchGrid from "../src/components/StretchGrid";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
    <>
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <img src="https://cdn.pixabay.com/photo/2017/06/03/18/21/star-wars-2369317_960_720.png"/>
    </div>
    
    <CharaGrid/>
    {/* <StretchGrid/> */}

    
    </>

  );
}

export default App;
