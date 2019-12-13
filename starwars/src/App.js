import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard'
import PaginationNav from './components/Pagination'
import * as StyledComps from './components/styled'

import './App.css';

const App = () => {
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(getCharacterPage(1));

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        let people = res.data.results
        setCharacter(people);
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);


  function getCharacterPage(pageNumber){
    return pageNumber;
  };


  



  return (
    <div className="App">

      <h1 className="Header">React Wars</h1>

      <StyledComps.CardsContainer className="card-container">
        {character.map((person, index) => {
          return <CharacterCard 
                    key={index} 
                    name={person.name} 
                    height={person.height} 
                    birthYear={person.birth_year}
                    hairColor={person.hair_color}
                  />
        })}
      </StyledComps.CardsContainer>

      <PaginationNav 
        getCharacterPage={ getCharacterPage }
        // previousPage={ previousPage }
        // firstPage={ firstPage }
        setPage={ setPage }
      />
    </div>
  );
}

export default App;
