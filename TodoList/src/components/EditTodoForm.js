import React,{useState} from 'react'


 const EditTodoForm =({editTodo,task})=>{
    const [value,setValue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault();
        editTodo(value,task.id)//pass value to props
        setValue("")
    }
    return(
        <form className='EditTodoForm' onSubmit={handleSubmit}>

            <input type='text' className='todo-input ' value={value} placeholder='Update Task' onChange={(e)=> setValue(e.target.value)}></input>
            <button type='submit' className='todo-btn'>update task</button>
        </form>
    )
}
export default EditTodoForm;
