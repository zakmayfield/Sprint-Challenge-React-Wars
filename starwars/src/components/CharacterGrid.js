import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CharacterCard from './CharacterCard'

const CharacterGrid = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        let people = res.data.results
        setCharacter(people);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {character.map((person, index) => {
        return <CharacterCard 
                  key={index} 
                  name={person.name} 
                  height={person.height} 
                  birthYear={person.birth_year}
                  hairColor={person.hair_color}
                />
      })}
    </div>
  );
};

export default CharacterGrid;