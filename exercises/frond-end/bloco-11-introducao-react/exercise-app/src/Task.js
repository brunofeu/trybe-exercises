import React from "react";

class Task extends React.Component {
  render() {
    const Task = (value) => <li>{value}</li>;
    return (
      <>
      {Task("Aprender React")}
      {Task ('Treinar React')}
      {Task ('Estudar React')}
      {Task ('React é Maravilhoso!')}
      </>
    )
  }
}

export default Task;
