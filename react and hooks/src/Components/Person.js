import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>My name is  {person.name}, I am {person.age} years old </h2>
        </div>
    )
}

export default Person
