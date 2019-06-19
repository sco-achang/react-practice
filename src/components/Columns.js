import React, { Fragment } from 'react'

function Columns() {
  const items = [{title: 'cool'}, {title: 'Asian'}];

  // <></> => <Fragment></Fragment> (No 'key' attribute!)

  return (
    <Fragment>
      {/* {
        items.map(item =>
          // Fragment only has 'key' attribute
          <Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
          </Fragment>
        )
      } */}
      <td>Name</td>
      <td>Albert</td>
    </Fragment>
  )
}

export default Columns
