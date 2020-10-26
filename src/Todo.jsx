import React, { useState } from 'react';
import List from './List';
const Todo = () =>{

    const [input,setInput] = useState("");
    const [arrInput,setArrInput] = useState([]);

    const click = () => {
        
           setArrInput( (preArr) => {
               return [...preArr,input]
           } ) 
         
    }

    const change = (event) => {
       setInput(event.target.value)
    }

    function del (id)
    {
        setArrInput( (pre) =>{
            return (
                arrInput.filter((arr,index) => {
                    return parseInt(id.target.value!==index)
                })
                
                )
        } )
    }

    return(
    <>
    <div className="main_div">
        <h3>Todo List</h3>
        <input type="text" onChange={change} value={input}/>
        <button className="btn btn-sucess" onClick={click}>Add</button>
        <ol>
            {arrInput.map( (data,index) => {
                return (
                    <List 
                    key = {index}
                    data = {data}
                    id={index}
                    onSelect = {del}
                />)

            } )}
            
        </ol>
    </div>
        
    </>)

}
export default Todo;