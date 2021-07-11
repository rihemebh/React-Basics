import React , {useState, useEffect} from 'react'

export default function AutoCounter() {
const [Count, setCount] = useState(0)

const tick = ()=> {
    setCount((prev)=> prev+1);
}

useEffect(()=>{
    const interval = setInterval(tick, 1000)
    //cleanup
    return ()=>  clearInterval(interval)
},
// If I put empty array [] we are teeling react to do not look at count changes / or we can use empty array with prev in the setCount
[])
    return (
        <div>
            {Count}
        </div>
    )
}
