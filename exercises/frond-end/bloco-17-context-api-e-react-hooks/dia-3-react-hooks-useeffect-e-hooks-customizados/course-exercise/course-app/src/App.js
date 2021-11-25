import './App.css';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    const random = Math.ceil(Math.random()*100)
    console.log(random)
  })
  return (
    <div >
   <h1>Oi</h1>


    </div>
  );
}

export default App;
