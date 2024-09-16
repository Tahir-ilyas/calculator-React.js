import React, { useState } from 'react'



const Calculator = () => {
    const [input,setInput]=useState("")

    // for answer
    const handleAnswer = () => {
      try{
        setInput(eval(input))
      }catch (error){
        setInput("Error")
      }
    };
    const handleReset = ()=>{
      setInput("")
    };
    const handleOldValue = ()=>{
      setInput(input.slice(0,input.length -1))
    }
  return (
    <>
    
        <div className='calculator'>
        <input className='value' type="text" value={input} />
        <button onClick={handleReset} className='numclear'>C</button>
        <button onClick={handleOldValue} className='numclear'>Back</button>
        <button className='*' onClick={(e) => setInput(input.concat(e.target.className))}>*</button>
        <button className='/'onClick={(e) => setInput(input.concat(e.target.className))}>/</button>
        <button className='7'onClick={(e) => setInput(input.concat(e.target.className))}>7</button>
        <button className='8'onClick={(e) => setInput(input.concat(e.target.className))}>8</button>
        <button className='9'onClick={(e) => setInput(input.concat(e.target.className))}>9</button>
        <button className='-'onClick={(e) => setInput(input.concat(e.target.className))}>-</button>
        <button className='4'onClick={(e) => setInput(input.concat(e.target.className))}>4</button>
        <button className='5'onClick={(e) => setInput(input.concat(e.target.className))}>5</button>
        <button className='6'onClick={(e) => setInput(input.concat(e.target.className))}>6</button>
        <button className='plus' name='+' onClick={(e) => setInput(input.concat(e.target.name))}>+</button>
        <button className='3'onClick={(e) => setInput(input.concat(e.target.className))}>3</button>
        <button className='2'onClick={(e) => setInput(input.concat(e.target.className))}>2</button>
        <button className='1'onClick={(e) => setInput(input.concat(e.target.className))}>1</button>
        <button className='0'onClick={(e) => setInput(input.concat(e.target.className))}>0</button>
        <button className='00'onClick={(e) => setInput(input.concat(e.target.className))}>00</button>
        <button className='equal'onClick={handleAnswer}>=</button>
        </div>

    </>
      )
}

export default Calculator