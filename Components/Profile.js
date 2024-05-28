import React from "react";
import './profile.css'
import Data from "./Data";
import Cards from './Cards'
let Profile=()=>{
    return(
        <div className="main">
          {Data.map(e=>{
            return(
                <div key={e.id}>
                    <Cards title={e.title} image={e.image} price={e.price} rating={e.rating}/>

                    </div>
            )
          })}

          
        </div>
    )
}
export default Profile