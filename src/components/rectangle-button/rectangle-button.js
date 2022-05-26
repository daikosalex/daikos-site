import React from "react";
import "./rectangle-button.css";

const RectangleButton = ({buttonTitle, onRedirect}) => {

    return (

    

        <div className="koumpi">
            <button onClick={onRedirect}> {buttonTitle} </button>
        </div>

    )
}

export default RectangleButton;
