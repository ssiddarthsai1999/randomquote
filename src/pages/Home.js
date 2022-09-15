import {useState} from 'react'
import "./Home.css"
import Nav from "../components/nav/Nav"

import axios from "axios"
function Home() {

const [quotes,setQuotes]=useState([])

var a=Math.floor(Math.random() * quotes.length) + 1;
var b=a+1
var sliced= quotes.slice(a,b)

function getQuote(){

axios.get("https://type.fit/api/quotes")
    .then(function(res){
      setQuotes(res.data)
      console.log(res.data)
    }).catch(function(err){
      console.log(err)
    })
    
  }
return (

    <div className='section1'>
<Nav/>
    <div className="container">
    
    <div className="box1">
<h1>Random Quote Generator</h1>
<h2>Get your inspiration for the day !</h2>
<button onClick={getQuote}>Get Quote</button>

  {sliced.map((quote)=>(
<div>
<p key={quote.id}>{quote.text}</p>
<p>- {quote.author}</p>
</div>
))}

 </div>

 </div></div>

  )
}
export default Home