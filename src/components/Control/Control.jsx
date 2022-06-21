import React, { useState } from 'react';
import { ControlButton } from '../ControlButtom/ControlButton';
import { GiveNameCase } from '../GiveNameCase/GiveNameCase';



export const Control = ()=> {
    const [toDo, setToDo] = useState([]);
    const [showInput, setShowInput] = useState(false)

    /**
     * функция показывает поле ввода для нового обьекта массива 
     */
    const handleShowAddInput = ()=>{
        setShowInput(!showInput)
    }
    /**функция добовляет в массив новый объект и скрывает поле ввода
     * 
     * @param {*} nameDo имя нового объекта
     */
    const handleAddClick = (nameDo) => {
    setToDo([...toDo, {name:nameDo, status: false}])
    setShowInput(!showInput)
    }

    /**функция меняет статут нужного обьекта в массиве
     * 
     * @param {*} id номер нужного обьекта
     */
    const handleChange=(id)=>{
        setToDo( toDo.map((item, i) =>{
            if (i === id){
                item.status = !item.status
                return item
            } else {
                return item
            }
        }))
    }
    /**
     * Функция удаляет из массива обьект 
     * @param {*} id  номер удаляемого объекта
     */
    const handleDelitCase =(id)=>{
        setToDo(toDo.filter((item)=> item !== toDo[id]))
    }
    /**listOutput-Функция которая выводит список дел из массива обьектов ToDo
     * @item Обьект
     * @id Номер обьекта
     */
let listOutput= toDo.map((item, id)=>{
    return (
        <div key={id} className='case'>
            <div className='case-box'>
            <input type="checkbox" checked={item.status} className='status' onChange={()=>handleChange(id)}/>
            {item.status&&<span className='case-name-on' >{item.name}</span>}
            {!item.status&&<span className='case-name-off' >{item.name}</span>}
            </div>
            <button className='button-del' onClick={()=>handleDelitCase(id)}>&#10006;</button>
        </div>
    )
});
    //console.log(messeg)
    return (
        <div className='case-list'>
            <p>Список дел:</p>
            {toDo.length?listOutput:<p>У вас пока нет дел, продолжайте в том-же духе!</p>}
            <ControlButton name="Добавить" onButtonClick={handleShowAddInput}/>
            
            {showInput?<GiveNameCase onClickAction={handleAddClick}/>:false}
        </div>
        
    )
}
