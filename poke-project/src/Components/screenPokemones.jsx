/* eslint-disable react/prop-types */

import './screenPokemones.css';
const ScreenPokemones = ({ pokemones, position }) => {
  console.log({ pokemones });
  return (
    <div className="screen-container">
      {pokemones?.map((pokemon, idx) => (
        <div key={pokemon.id} 
        className="pokemon-item" 
        style={{backgroundColor: idx === position ? 'red' : 'transparent' }}>
          <img src={pokemon.sprites.front_default} alt="pokemon image" />
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default ScreenPokemones;