import React,{FC, useState} from 'react'


interface NewTodoFormProps {
value: string;
updateText: (str:string) => void;
handleAction: () => void;
}

const NewTodoForm:FC<NewTodoFormProps> = ({value, updateText, handleAction}) => {


  return (
    <div>
<input type="text" 
value={value} 
placeholder="newtodo" 
onChange={(e)=>updateText(e.target.value)}/>
<button type="button" onClick={handleAction}>add Todo</button>
    </div>
    
  )
}

export default NewTodoForm
