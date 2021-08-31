import React from 'react'
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonData } = this.props;
    
    return (
      <div className='pokedex-list'>
        {pokemonData.map((pokemon) => <Pokemon key={pokemon.id} pokemonInfo={pokemon}/>)}
      </div>
    )
}
}


export default Pokedex;