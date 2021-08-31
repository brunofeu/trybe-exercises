import React from 'react'

class Serie extends React.Component {
  render() {
    const { serieInfo } = this.props;

    return (
      <section>
        <h1>name: {serieInfo.name}</h1>
        <img src={serieInfo.image} alt={serieInfo.name}></img>
        <p>Genero: {serieInfo.genre} </p>
      </section>
    )
  }
}

export default Serie;