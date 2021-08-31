import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemonInfo } = this.props;
    return (
      <div className='pokemon-card'>
        <div>

        <h3>{pokemonInfo.name}</h3>
        <p>Type: {pokemonInfo.type}</p>
        <p>Weight: {pokemonInfo.averageWeight.value} {pokemonInfo.averageWeight.measurementUnit}</p>
        </div>
        <div>

        <img src={pokemonInfo.image} alt={pokemonInfo.name}></img>
        </div>
      </div>
    )
  }
}

export default Pokemon