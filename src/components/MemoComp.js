import React, { memo } from 'react'

// memo (works for 'Functional' components) - only for React v16.6+
function MemoComp({name}) {
  console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

// similar to HOCs - component 'capable' of no re-renders when
// there is no change to the passed-in 'props'  
export default memo(MemoComp)
