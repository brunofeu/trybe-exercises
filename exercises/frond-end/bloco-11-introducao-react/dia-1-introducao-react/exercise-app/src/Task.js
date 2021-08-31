import React from "react";

class Task extends React.Component {
  render() {
    const Task = (value) => <li>{value}</li>;
    const compromisses = ["Aprender React", 'Treinar React', 'Estudar React', 'React é Maravilhoso!']
    return (
      <>
      {Task("Aprender React")}
      {Task ('Treinar React')}
      {Task ('Estudar React')}
      {Task ('React é Maravilhoso!')}
      {<br></br>}
      {compromisses.map((task) => Task(task))}
      </>
    )
  }
}

export default Task;
