import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  //I am making API call to see what information gets sent back
  const [character, setCharacter] = useState([]);
    useState(() => {
      axios
        .get("https://swapi.dev/api/people/")
          .then(res  =>{
            console.log("Response from API ", res)
// got response back and setting the characters to it
            setCharacter(res.data.results);

          })
          .catch(err => {
            console.log(err)
          })
    }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
