import React from 'react'
import { useState } from 'react'

import './App.css'



function App() {
  const [FILE, SET_FILE] = useState(0)

 

  

  return (
    <>
      <div className="App">
        <h1>File Upload</h1>
        <input type="file" onChange={(e) => SET_FILE(e.target.files[0])} />
        <button onClick={() => console.log(FILE)}>Upload</button>
      </div>
     
     
    
     
    </>
  )
}

export default App
