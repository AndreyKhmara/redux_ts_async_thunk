import React,{FC} from 'react'
import {useAppSelector} from '../hook'
import TodoItem from './TodoItem'


const TodoList:FC = () => {
    const todos = useAppSelector(store => store.todos.list)
  return (
    <div>{todos.map((el)=>
        <TodoItem key={el.id} 
        {...el}/>
    )}</div>
  )
}


export default TodoList;