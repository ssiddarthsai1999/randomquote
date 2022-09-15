import {useState} from 'react'
import "./Jokes.css"
import Nav from "../components/nav/Nav"

import axios from "axios"
function Jokes() {

const [jokes,setjokes]=useState([])



function getQuote(){

axios.get("http://api.icndb.com/jokes/random")
    .then(function(res){
   
        console.log(res.data.joke)
        setjokes(res.data.value.joke)
    }).catch(function(err){
      console.log(err)
    })
    
  }
return (

    <div className='section1'>
<Nav/>
    <div className="container">
    
    <div className="box2">
<h1>Random Chuck Norris Jokes</h1>
<h2>Chuck threatened me to upload this</h2>
<button onClick={getQuote}>Get Joke</button>


<p >{jokes}</p>







 </div>

 </div></div>

  )
}
export default Jokes