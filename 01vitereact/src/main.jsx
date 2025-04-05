import React from 'react'
import { createRoot } from 'react-dom/client'
//import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
    return(
        <div>
        <h1>Custom App!</h1>
        </div>
    )
}
/*const reactElement= {  //yeh nhi chlega kyuki yeh mere man se banaya gya object hai
    type:'a' ,//can be div, paragraph tag etc
    props:{
        href :'https://google.com',
        //props is an object in which we can add any no. of properties
        target:'_blank'
    },
    children:'Click me to visit google'
}*/
const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser= "react aur khanak"
const reactElement= React.createElement(  //jaise custom render tha waise he humne react liya h upar se 
    'a',//type
    {href:'https://google.com',target:'_blank'},//props
    'click me to visit google', //children
    anotherUser //variables
)
createRoot(document.getElementById('root')).
render(

    //anotherElement //it is object 
    reactElement
    //<App/>
)
