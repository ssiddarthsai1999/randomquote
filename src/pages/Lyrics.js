import {useState} from 'react'
import "./Jokes.css"
import Nav from "../components/nav/Nav"
import "./Lyrics.css"
import axios from "axios"
function Lyrics() {
const [lyrics,setlyrics]=useState([])
function getQuote(){

axios.get("https://api.kanye.rest/")
    .then(function(res){
   
        console.log(res.data)
        setlyrics(res.data.quote)
    }).catch(function(err){
      console.log(err)
    })
    
  }
return (
<div className='section1'>
<Nav/>
    <div className="container">
    <div className="box3">
<h1>Random Kanye Lyrics/Quotes</h1>
<h2>Can't get enough of Kanye right?</h2>
<button onClick={getQuote}>Get Kanye</button>
<p >{lyrics}</p>
</div>
</div></div>
 )
}
export default Lyrics