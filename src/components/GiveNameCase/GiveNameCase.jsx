import React, { useState } from "react";

export const GiveNameCase =({onClickAction})=>{
 let [name, setName] = useState('')
    const handleCheng = (e)=>{
         setName(e.target.value)  
    }

    return (
        <div className="darkshell">
            <input value = {name} onChange={handleCheng} type='text' className="give-name-input"/>
            <button className="control-button" onClick={()=>onClickAction(name)}>Add</button>
        </div>
    )
}