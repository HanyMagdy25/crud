import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/adduser" element={<AddUser/>} />
        </Routes>
      
    </div>
  );
}

export default App;
