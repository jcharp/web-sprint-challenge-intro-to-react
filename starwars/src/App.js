import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from "./components/Character";
import axios from "axios";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(response => {
      console.log("this is from the api", response);
      setCharacter(response.data.results);
    })
    .catch(error => console.log("error", error));
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {character.map(person => {
        return (
          <Characters
           key={person.mame}
           name={person.name}
           gender={person.gender}
           homeworld={person.homeworld}
           img_url={person.img_url}
          />
        );

      })
        

      }
     
    </div>
  );
}

export default App;
