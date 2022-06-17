import React from "react";

export const ControlButton = ({onButtonClick, name})=>{
    return (
        <button onClick={onButtonClick} className="control-button">{name}</button>
    )
}