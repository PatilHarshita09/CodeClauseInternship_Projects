import React,{useState} from 'react'


 const TodoForm =({addTodo})=>{
    const [value,setValue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault();
        addTodo(value)//pass value to props
        setValue("")
    }
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>

            <input type='text' className='todo-input ' value={value} placeholder='Enter your task to do' onChange={(e)=> setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>+</button>
        </form>
    )
}
export default TodoForm;
