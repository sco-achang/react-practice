import React from 'react';

// export const Greet = () => <h1> Hello Albert</h1>

// const Greet ({name, heroName}) => {
const Greet = props => {
  // BELOW is cleaner imo
  const { name, heroName } = props;
  return (
    <div>
      <h2> Hello {name} a.k.a {heroName}</h2>
    </div>
  )
}

export default Greet;
