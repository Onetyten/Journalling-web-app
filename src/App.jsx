import React, { useState,useEffect } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'


function App() {
	const [todos,setTodos]  =useState([])
	const [todoValue,setTodoValue] = useState('')

	function saveData(newList) {
		localStorage.setItem('todos',JSON.stringify({todos:newList}))
	}

	function handleAddTodos(newTodo)
	{
		const newTodoList = [...todos,newTodo]
		saveData(newTodoList)
		setTodos(newTodoList)
	}

	function handleDeleteTodos(index){
		const newTodoList = todos.filter((todo,todoIndex)=>{
			return todoIndex !== index
				
			})
			saveData(newTodoList)
			setTodos(newTodoList)

	}

	function handleEditTodo(index){
		const valueToBeEdited = todos[index]
		setTodoValue(valueToBeEdited)
		handleDeleteTodos(index)
	}


	useEffect(()=>{
		if (!localStorage){
			return
		}

		let localTodos = localStorage.getItem('todos')
		if (!localTodos)
		{	return
		}

		localTodos = JSON.parse(localTodos).todos
		setTodos (localTodos)


	},[])
  return (
			<>
				
				<TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue}  handleAddTodos = {handleAddTodos}/>
				<TodoList  handleDeleteTodos ={handleDeleteTodos} todos ={todos} handleEditTodo ={handleEditTodo}  />
				
			</>

  )
}

export default App

