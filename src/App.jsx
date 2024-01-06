import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TodoProvider } from './context/ToDoContext'
import InputForm from './components/InputForm'
import Todo from './components/Todo'


function App() {
  // todos will be an array of objects
  const [todos, setTodos] = useState([])

  // To add a new todos we will create an object from the input from the form that we have created
  const addTodos = (todo)=>{
      // setting todo in the browser
      setTodos((prev)=>([todo,...prev]))

      // setting todos in local storage
  }

  const updateTodos = (id, todo)=>{
    setTodos((prev)=> (
      prev.map(
        (todoFromCurrent)=>{
          if(todoFromCurrent.id === id){
            return todo
          }
          return todoFromCurrent
        }
      )
    ))

  }

  const deleteTodos = (id)=>{
    // deleting todos in browser 
    setTodos((prev)=>(prev.filter((todo)=>(todo.id!==id))))
    // deleting todos in local storage
  }

  
  
  return (
    <>
      <TodoProvider value={{todos, addTodos,deleteTodos, updateTodos}}>
      <div className='w-screen h-screen flex-col flex justify-center items-center  bg-blue-400'>  
        <InputForm/>
        {
          todos.map((todo)=>(
            <div key={todo.id}>
              {console.log(todo, "the one")}
              <Todo todo={todo}/>              
            </div>
          ))
        }
      </div>
      </TodoProvider>
   
    </>
  )
}

export default App
