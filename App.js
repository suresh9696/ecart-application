import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Pagenotfound from "./Components/Pagenotfound";
import Cntact from "./Components/Cntact";
import Nav from "./Nav";
let App=()=>{
 return(
  <div>
   <BrowserRouter>
     <Nav/>
   <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Cntact"element={<Cntact/>}/>
  <Route path="/Profile" element={<Profile/>}/>
  <Route path="*" element={<Pagenotfound/>}/>
   </Routes>
   </BrowserRouter>
  </div>
 )
}
export default App