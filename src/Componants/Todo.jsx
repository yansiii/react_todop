import React, { useState } from 'react'
import { addTodo ,deleteTodo, editTodo} from '../Redux/action'
import {useDispatch , useSelector} from "react-redux"

const Todo = () => {

    const dispatch = useDispatch()
    const[todo,setTodo] = useState(" ")

    const tasks = useSelector((state)=>state.tasks)
    const addTodo1 =()=>{
        if(todo){
            dispatch(addTodo({id:Date.now(),name:todo}))
        }

        setTodo('')
    }
    const delTodo=(id)=>{
        dispatch(deleteTodo(id))
    }
    const edittodo=(id,name)=>{
        let x = prompt("enter new todo")
        if(x){
            dispatch(editTodo(id,x))
        }
    }

    if(tasks){
        console.log(tasks,"array")
    }
  return (
    <>
    <div style={{textAlign:"center"}}>
      <h1>Todo - List</h1>
    <input type='text' placeholder='Add Todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button onClick={addTodo1}>Submit</button>

    <div style={{display:"flex" , marginTop:"15px", marginLeft:"560px"}}>
        {
            tasks?.map((el)=>{
                return <>
                <li>{el.name}</li>
               <button style={{marginLeft:"8px"}} onClick={()=>edittodo(el.id, el.name)}>Edit</button>
                <button style={{marginLeft:"8px"}} onClick={()=>delTodo(el.id)}>Delete</button>
                </>
            })
        }
       </div>
    </div>
    </>
  ) 
}

export default Todo