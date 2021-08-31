import React from 'react';

class HelloWorld extends React.Component {
  render() {
      const element = <h1 className="hello-world">Hello, World!</h1>;

      const currentLearning = (subject) => {
        return <h2>Eu estou aprendendo {subject}</h2>
      }

      const arr = [0, 1, 2, 3, 4];

      return (
        <>
          {element}
          <p>Esse é o meu primeiro App React</p>
          {currentLearning('React')}
          {arr.map((element) => <p>{element}</p>)}
        </>
      );
  }
}

export default HelloWorld;