import React from 'react'
import { Link } from 'react-router-dom'

function Solutions({ solutions }) {
  return (
    <section>
      <ul>
        {solutions.map((solution) => (
          <li key={solution.id}>
            <Link className="link-solution" to={`solutions/${solution.id}`}>{solution.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Solutions
