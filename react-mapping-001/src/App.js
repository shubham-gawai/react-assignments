import React from 'react'
import Number from './component/Number'

const App = () => {


  return (
    <div className='main' >
      <h1 style={{textAlign:"center",fontSize:"40px" ,margin:"20px 0px 0px 0px"}}>30 Days Of React</h1> 
      <p style={{textAlign:"center",fontSize:"30px"
    ,margin:"0px 0px 10px 0px"}}>Number Generater</p>
     <Number/>
    </div>
  )
}

export default App
