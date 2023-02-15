import React, {FC} from 'react'
import { useAppDispatch } from '../hook';
import { deleteTodo, toggleStatus } from '../store/todoSlice';

interface TodoItemProps{
    id: string, 
    title: string, 
    completed:boolean
}



const TodoItem:FC<TodoItemProps> = ({id, title, completed}) => {
    const dispatch = useAppDispatch()
  return (
    <div><input type="checkbox" 
    checked={completed}
    onChange={()=>dispatch(toggleStatus(id))}/>
    <span>{title}</span>
    <button type='button' onClick={()=>dispatch(deleteTodo(id))}>delete</button>
    </div>

  )
}


export default TodoItem;
