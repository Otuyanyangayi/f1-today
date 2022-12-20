import React from "react";
import Home from "./components/Home";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
     
     <div>
       
        <Auth />
        
      </div>
    
      <Routes>
      
      <Route exact path="/" element={<Home/>}></Route>
      
      
      </Routes>
      
        <Auth />
      

    </Router>
   
  );
}

export default App;
