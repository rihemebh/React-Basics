import React from 'react'
import Person from './Person'

function NameList() {
    /*const names =['jihene','riheme','mariem'];
    const nameList = names.map(name => <h2>{name}</h2>)*/
    const persons= [
        {
            'id':1,
            'name':"riheme",
            'age':21
        },
        {
            'id':2,
            'name':"jihene",
            'age':24
        }
    ];
    const personList = persons.map(person => <Person person={person} /> )
  
    return (
        <div>
         {personList}      
        </div>
    )
}

export default NameList
