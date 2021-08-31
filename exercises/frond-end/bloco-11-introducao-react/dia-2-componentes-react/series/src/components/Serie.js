import React from 'react'
import PropTypes from 'prop-types'

class Serie extends React.Component {
  render() {
    const { serieInfo } = this.props;

    return (
      <section className="serie-card">
        <h1>{serieInfo.name}</h1>
        <img src={serieInfo.image} alt={serieInfo.name}></img>
        <p>Genero: {serieInfo.genre} </p>
      </section>
    )
  }
}

Serie.propTypes = {
  serieInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired
}

export default Serie;