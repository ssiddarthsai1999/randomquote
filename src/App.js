import React from 'react'
import Home from "./pages/Home";
import Jokes from './pages/Jokes';
import Lyrics from './pages/Lyrics';
import "./App.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



 function App() {


  return (
 <Router>
  <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/jokes' element={<Jokes/>}> </Route>
    <Route path='/lyrics' element={<Lyrics/>}> </Route>
  </Routes>
 </Router>





  )
}

export default App;