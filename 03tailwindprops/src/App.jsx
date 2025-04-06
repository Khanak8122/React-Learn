import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)
  let myObj={ //variable passed below as object
    username:"Khanak",
    age:22
  }
//array can be passed also as object
let newArr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="chaiaurcode" /*someObje={//myObj}*/ /*someObje={newArr}*/ btnText="Click Me" />
    <Card username="Khanak Gupta" />
    </>
  )
}

export default App
 