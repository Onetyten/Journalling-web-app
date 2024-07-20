import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos,handleDeleteTodos} = props
  return (
    <ul className='main'>
      {todos.map((todo,todoIndex)=>{
        return(
          <TodoCard key={todoIndex} {...props} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )


      })}






    </ul>




  )

}
