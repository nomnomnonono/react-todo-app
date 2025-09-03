import { useState, useRef } from 'react';
import MainLayout from './layouts/MainLayout';
import TextInput from './components/TextInput';
import Button from './components/Button';
import type { TodoItem } from './types/todo';
import TodoList from './components/Todo';
import './App.css'


function useTodoManager() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [nextId, setNextId] = useState(1);
  const inputElement = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (inputElement.current) {
      const title = inputElement.current.value;
      setTodos(prev => [...prev, { id: nextId, title: title }]);
      setNextId(prev => prev + 1);
      inputElement.current.value = "";
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return {todos, inputElement, addTodo, deleteTodo};
}

function App() {
  const {todos, inputElement, addTodo, deleteTodo} = useTodoManager();

  return (
    <MainLayout>
      <div className="InputArea">
        <TextInput inputElement={inputElement} />
        <Button addTodo={addTodo} />
      </div>
      <div className="TodoArea">
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </MainLayout>
  );
}

export default App;
