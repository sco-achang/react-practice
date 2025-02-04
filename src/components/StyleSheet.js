import React from 'react'
import './myStyles.css';

function StyleSheet(props) {
  const { primary } = props; 
  let className = primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`{${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default StyleSheet;
