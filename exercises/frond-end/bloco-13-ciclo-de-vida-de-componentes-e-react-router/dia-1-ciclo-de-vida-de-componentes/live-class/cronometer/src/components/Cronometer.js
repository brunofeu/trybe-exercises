import React, { Component } from 'react';



class Cronometer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1}))
    }, ONE_SECOND);
  }

  render() {
    const { seconds } = this.state;

    

    return (
      <h2>
        {seconds}
      </h2>
    );
  }
}

export default Cronometer;