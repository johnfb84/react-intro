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
  return (
    <>

      <TodoCounter completed={0} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
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
