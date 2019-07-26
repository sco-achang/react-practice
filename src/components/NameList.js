import React from 'react'
import Person from './Person';

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Albert',
      age: 29,
      skill: 'Vue',
    },
    {
      id: 2,
      name: 'Michael',
      age: 29,
      skill: 'React',
    },
    {
      id: 1,
      name: 'Craig',
      age: 29,
      skill: 'Java',
    }
  ];
  
  // Get a list of People and pass in {props} for each 'Person' Child Component
  // key helps React keep track of what changed or not
  // DONT use 'index': for re-ordering or filtering, non-static list
  const personList = persons.map(person => (person => <Person key={person.name} person={person} />));
  return <div>{personList}</div>
}

export default NameList
