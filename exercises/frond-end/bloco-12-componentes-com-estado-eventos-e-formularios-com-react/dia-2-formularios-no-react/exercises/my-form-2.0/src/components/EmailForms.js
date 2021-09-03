import React, { Component } from 'react';

class EmailForms extends Component {
  render() {
    const { value, handleEvent } = this.props;
    return (
      <label>
        Email:
        <input
          name="email"
          type="email"
          required
          value={value}
          onChange={handleEvent}
        />
      </label>
    )
  }
}

export default EmailForms;