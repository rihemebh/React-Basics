import React from 'react'
import Person from './Person'

function NameList() {
    const names =['jihene','riheme','mariem'];
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
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
    const personList = persons.map(person => <Person key={person.id} person={person} /> )
  
    return (
        <div>
         {nameList}      
        </div>
    )
}

export default NameList
