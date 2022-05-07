//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import React from 'react';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
//import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


//let  name="Priti";
function App() {

  const [mode, setMode ]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },2500);
  }

  const toggleMode = () =>{
   if(mode==='dark')
   {
   setMode('light');
   document.body.style.backgroundColor = 'white';
   showAlert("Light mode has been enabled", "success");
   document.title="Textutils - Light Mode";

   }
   else
   {
   setMode('dark');
   document.body.style.backgroundColor = '#042743';
   showAlert("Dark mode has been enabled", "success");
   document.title="Textutils - Dark Mode";

   }
  }

  return (
   <>
{/*<Router>*/}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
 
{/*<Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route eaxct path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
</Routes>*/}
</div>
{/*</Router>*/}
   </> 
 );
}

export default App;
