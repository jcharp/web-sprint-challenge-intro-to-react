// Write your Character component here
import React from 'react';
import styled from 'styled-components';

//writing out styled components part
const WrapperDiv = styled.div`
font-family: cursive;
text-align center;
border: 2px solid black;
`;


const Characters = ({name, gender, homeworld, img_url}) => {
    return (
//wrapping the div in WrapperDiv
    <WrapperDiv className="App">
        <div>
        <h3>Name: {name}</h3>
        <h3>Gender: {gender} </h3>
        <h3>Home: {homeworld}</h3>
        <img url={img_url} />
      </div>  

    </WrapperDiv>

                 
    
    )
}
export default Characters;