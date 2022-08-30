import React, {useState} from 'react'
import { useEffect } from 'react';

function testing() {
    const [count, setCount] = useState(0);
    useEffect(() => { 
        setInterval(() => {
            setCount(count + 1);
        }, 1000);
    },[])
  return (
      <div>Counting:{count }</div>
  )
}

export default testing