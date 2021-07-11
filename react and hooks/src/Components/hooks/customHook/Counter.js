import{useState} from 'react'
 
export default function useCounter(initialCount = 0, value=1) {
    const [counter, setCounter] = useState(initialCount);
    const inc = ()=>{
        setCounter(prevState => prevState + value)
    }
    const dec = ()=>{
       setCounter(prevState => prevState - value)
   }
   const reset = ()=>{  
       setCounter(0)
   }

   return [counter , inc , dec , reset]

}
