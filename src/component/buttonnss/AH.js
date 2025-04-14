/*AH.js*/
import React from "react";
import './AH.css';

const AH = ({ buttonText }) => {
    return ( 
        <div className="wrapper">
            <button className="hp"> 
                {buttonText}
            </button>
        </div>
     );
}
 
export default AH;


