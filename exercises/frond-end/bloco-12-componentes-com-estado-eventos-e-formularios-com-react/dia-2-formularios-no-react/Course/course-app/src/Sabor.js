import React, { Component } from 'react';

class Sabor extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <select name="sabor" value={value} onChange={handleChange}>
        <option value="laranja">Laranja</option>
        <option value="limao">Limão</option>
        <option value="coco">Coco</option>
        <option value="manga">Manga</option>
      </select>
    )
  }
}

export default Sabor;