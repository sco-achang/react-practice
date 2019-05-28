import React from 'react'

// Button - ChildComponent has passed 'child' parameter back to parent
const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
