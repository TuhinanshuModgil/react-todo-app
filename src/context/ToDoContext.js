import {useContext, createContext, useState}from 'react'

 
 
const TodoContext = createContext()

 export const useToDo = ()=>{
    return useContext(TodoContext)

}
export const TodoProvider = TodoContext.Provider