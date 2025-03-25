import React, { useState } from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'hacer curso react', completed: false },
  { text: 'llllalalall', completed: true },
  { text: 'pepepepepep', completed: false }
]

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  useState('')
  
  const [todos, setTodos] = React.useState(defaultTodos)

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText=todo.text.toLowerCase()
      const searchedText = searchValue.toLowerCase()
      return todoText.includes(searchedText)
    }
  )

  console.log('esta busnado todo de ' + searchValue)


  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />


    </ >
  );
}

export default App;
