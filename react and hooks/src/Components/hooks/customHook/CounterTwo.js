import React , {useState} from 'react'
import useCounter from './Counter';
 
export default function CounterTwo() {
    const [counter, inc , dec , reset ] = useCounter(2,2);

    return (
        <div>
            <h1>Count = {counter}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
