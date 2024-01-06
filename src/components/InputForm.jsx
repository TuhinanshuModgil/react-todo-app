import React,{ useState} from 'react'
import { useToDo } from '../context/ToDoContext'

function InputForm() {

  const { todos, addTodos} = useToDo()
  const [todoInput,setTodoInput] = useState("");
  function handleAddTodo(e){
    e.preventDefault()
    addTodos({
      id: Date.now(),
      content: todoInput,
    })

    setTodoInput("")
    // console.log(todos)


  }

  const handleFormChange = (e)=>{
    setTodoInput(e.target.value)
  }

  return (
    <div className='bg-gray-800 h-1/4 rounded-lg shadow-lg m-10 px-10'>
        <form  className='flex justify-center items-center py-16'>
        <input type="text" className='w-full md:w-1/2 lg:w-[400px] xl:w-[600px] text-gray-800 h-10 px-5 bg-white rounded-l-lg  shadow-md ' 
          placeholder='add a todo...' 
          value={todoInput}
          onChange={handleFormChange}
          
        />
        <button className='px-10 bg-blue-500 h-10 rounded-r-lg font-bold' type='submit'
          onClick={handleAddTodo}
        >Add</button>
        </form>
        
    </div>
  )
}

export default InputForm
