import React from "react";
import "./Card.css";
let Cards=({title,image,price,rating})=>{
    return(
        <div className="card" >
            
            <img src={image} className="imgg"></img>
           
            <h3>{title}</h3>
            <h2>Rs.{price}</h2>
            <button>BUY NOW</button>
            <h4>Rating:{rating}</h4>
        </div>
    )
}
 export default Cards;