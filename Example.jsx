import React from 'react'
import { useState , useEffect} from 'react'

const Example = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked : ${count} times`
    }, [count])
  return (
      <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            
    
      </div>
  )
}

export default Example