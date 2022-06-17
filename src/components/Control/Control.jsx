import React, { useState } from 'react';
import { ControlButton } from '../ControlButtom/ControlButton';
import { GiveNameCase } from '../GiveNameCase/GiveNameCase';



export const Control = ()=> {
    const [toDo, setToDo] = useState([]);
    const [showInput, setShowInput] = useState(false)

    const handleShowAddInput = ()=>{
        setShowInput(!showInput)
    }
    const handleAddClick = (nameDo) => {
    setToDo([...toDo, {name:nameDo, status: false}])
    setShowInput(!showInput)
    }

    
let listOutput= toDo.map((item, id)=>{
    const handleChange=()=>{
        toDo[id].status= !toDo[id].status
        setToDo(toDo)
    }
    return (
        <div key={id} className='case'>
            <input type='checkbox' value={item.status} className='status' onClick={handleChange}></input>
            <span className={item.status?'case-name-off':'case-name-on'}>{item.name}</span>
        </div>
    )
});
    //console.log(messeg)
    return (
        <div>
            <p>Список дел:</p>
            {toDo.length?listOutput:<p>У вас пока нет дел, продолжайте в том-же духе!</p>}
            <ControlButton name="Добавить" onButtonClick={handleShowAddInput}/>
            
            {showInput?<GiveNameCase onClickAction={handleAddClick}/>:false}
        </div>
        
    )
}
