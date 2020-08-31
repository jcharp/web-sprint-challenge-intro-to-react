// Write your Character component here
import React from 'react';

const Characters = ({name, gender, homeworld, img_url}) => {
    return (
      <div>
        <h3>Name: {name}</h3>
        <h3>Gender: {gender} </h3>
        <h3>Home: {homeworld}</h3>
        <img url={img_url} />
      </div>             
    
    )
}
export default Characters;