import React, { useState } from 'react'
import { useToDo } from '../context/ToDoContext'

function Todo({todo}) {
    const {deleteTodos, updateTodos,todos} = useToDo();
    const [editable,setEditable] = useState(false);
    const [todoChecked,setTodoChecked] = useState(false);
    const [content, setContent] = useState(todo.content);
    // console.log(todo)
    const handleEdit = (e)=>{
      setContent(e.target.value)

    }
    const handleEditSave = (e)=>{
      if(editable)
      {updateTodos(todo.id, {
        id: todo.id,
        content,
      })

      setEditable(false)
    }
      else{
        setEditable(prev => !prev)
      }

    }

    const handleRemove = ()=>{
      deleteTodos(todo.id)
    }

  return (
    <div className='flex rounded-lg bg-white pl-2 shadow-lg m-5'>
          <input type="checkbox" checked={todoChecked} onChange={()=>(setTodoChecked(prev => !prev))} />
          <input type="text" className='w-[600px] h-10 rounded-l-md text-gray-800 px-5 bg-white ' 
          value={content}
          readOnly={!editable}
          onChange={handleEdit}
          />
          <button className='px-5 bg-black h-10 font-bold' onClick={handleEditSave}>{editable?"save":"edit"}</button>
          <button className='px-5 bg-blue-500 h-10 rounded-r-lg font-bold' onClick={handleRemove}>Remove</button>

        </div>
  )
}

export default Todo
