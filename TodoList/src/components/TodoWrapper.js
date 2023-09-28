import React,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm';
uuidv4();

//parent component
export const TodoWrapper =()=>{
    //store [] or initail todos
    const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const [todos, setTodos] = useState(initialTodos);

    // useEffect is added here to save tasks to localStorage whenever todos change
    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
    // const [todos,setTodos]=useState([])
    //value to enter in the list
    const addTodo=todo=>{
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
        console.log(todos)
    }

    // togglecomplete function
    const toggleComplete =id=> {
        setTodos(todos.map(todo =>todo.id===id?{...todo,completed: !todo.completed }:todo))
    }
    // for delete todo, if id not equal return it
    const deleteTodo =id=>{
        setTodos(todos.filter(todo=>todo.id !== id))
    }
    //for updating the task
    const editTodo=id=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
        
    }
    //editing the task
    const editTask=(task,id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
    }
    return(
        
        <div className='TodoWrapper'>
            <h1>What's the plan for today?</h1>

            <TodoForm addTodo={addTodo}/>

            {/* for all the task to display */}
            {todos.map((todo,index)=>(
                
                //if editing then edittodoform to popup else display normal form and in this setup the function
                todo.isEditing?(<EditTodoForm editTodo={editTask} task={todo}/>):(
               
                    // todo props
                <Todo  task ={todo} key={index} toggleComplete={toggleComplete}  
                deleteTodo={deleteTodo} editTodo={editTodo}/>
                )    
            ))
            
        }

            
        </div>
    )
}