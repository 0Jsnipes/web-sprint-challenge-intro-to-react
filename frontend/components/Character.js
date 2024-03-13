import React, { useState } from 'react';

function Character(props) {
  const { name, homeworld} = props;

  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div className="character-card" onClick ={toggleHomeworld}>
      <h3 className="character-name">{name}</h3>
      {showHomeworld && (
        
          <p>Planet:
            <span className="character-planet">{homeworld}</span></p>
        )}
    </div>
  );
}

export default Character;