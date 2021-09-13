import React from 'react'

class Solution extends React.Component {
  render(){

    const { match: { params: {id}} } = this.props
    return (
      <div>
      Aqui é a solution {id}
    </div>
  )
}
}

export default Solution
