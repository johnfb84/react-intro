import React, { useState } from 'react';
import { AppUI } from './AppUI';

import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('JF_TODOS_V1')
// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'hacer curso react', completed: false },
//   { text: 'llllalalall', completed: true },
//   { text: 'pepepepepep', completed: false }
// ]
// localStorage.setItem('JF_TODOS_V1', JSON.stringify(defaultTodos))

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  useState('')
  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('JF_TODOS_V1', [])

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchedText = searchValue.toLowerCase()
      return todoText.includes(searchedText)
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )

}

export default App;
