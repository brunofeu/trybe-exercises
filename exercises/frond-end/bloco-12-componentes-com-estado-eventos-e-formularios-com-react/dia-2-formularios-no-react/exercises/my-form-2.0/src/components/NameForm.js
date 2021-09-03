import React, { Component } from 'react';

class NameForms extends Component {
  render() {

    const { value, handleEvent } = this.props;

    return (
      <label>
        Nome:
        <input
          name="name"
          type="text"
          required
          value={value.toUpperCase()}
          onChange={handleEvent}
          maxLength={40}
        />
      </label>

    )
  }
}

export default NameForms;