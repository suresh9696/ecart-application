import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

let Nav=()=>{
    return(
        <div className="Nav">
           < div className="logo">
                  <h1>Hello</h1>
           </div>
         <ul className="nav"> 
<li><Link to={"/"} > Home</Link> </li> 
<li><Link to={'/Profile'}>Products</Link></li>
<li><Link to={'/About'}> About US</Link></li>
<li><Link to={"/Cntact "}> Contact US</Link></li>
</ul>  

        </div>
    )
}
export default Nav