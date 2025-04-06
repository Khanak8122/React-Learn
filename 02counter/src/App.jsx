import { useState } from 'react' //hook come from here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//hook use to change the state (basically change is propogated to UI)
 let [counter,setCounter]=useState(15)


  //let counter =15 //yaha const nhi rkhenge kyuki change krni h value
  const addValue=() => {
  if(counter<20){
    setCounter(counter+1)
  }
  //counter=counter+1
  //setCounter(counter)
  //or we can directly do setCounter(counter+1) setcounter can be put any name Khanakcounter etc
  }
  const removeValue= () => {
    if(counter>0)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur code with Khanak Gupta!!</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
