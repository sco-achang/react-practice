import React from 'react'

// function FRInput() {
//   return (
//     <div>
//       <input type='text' />
//     </div>
//   )
// }

// forwardRef - TAKES IN a 'function / method'
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* Receives 'ref' from FRParentInput or any 'parent comp' */}
      <input type='text' ref={ref} />
    </div>
  )
}) 

export default FRInput
