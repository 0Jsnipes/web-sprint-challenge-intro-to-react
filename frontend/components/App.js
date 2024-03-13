import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get(urlPeople)
      .then(res => {
        setCharacters(res.data); 
      })
      .catch(err => {
        console.log(err.message);
      });
      
    axios.get(urlPlanets)
      .then(res => {
        setPlanets(res.data); 
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.map(character => (
        <Character
          key={character.id}
          name={character.name}
          homeworld={planets.find(planet => planet.id === character.homeworld)?.name}
        />
      ))}
    </div>
  );
}
export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App