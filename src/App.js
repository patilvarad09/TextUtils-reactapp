// import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type: type
      })  
      setTimeout(() => {
        setalert(null);
      },3000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <><Router>
      <Navbar title="TextUtils" about="AboutTextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar title="Blog" about="AboutBlog"/>
      <Navbar/> */}
      
        
      
      <div className="container my-3">
      
      <Alert alert={alert}/>
      
        <Routes>
          <Route exact path="/About" element={<About/>}/>
            
         
          <Route exact path="/" element={<TextForm mode={mode} heading="Enter the text to analyse below"/>} />
          
         
          </Routes>
       
      </div>
      </Router> 
    </>
  );
}

export default App;
