import React from 'react';
import './Shine.css'; // Import your CSS file for styling

const Shine = ({ buttonText }) => {
    return ( 
        <button className="shiney"> 
            { buttonText }
        </button>
     );
}

export default Shine;
