import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import TextInput from './components/TextInput';
import Button from './components/Button';
import type { TodoItem } from './types/todo';
import TodoList from './components/Todo';
import './App.css'


function useTodoManager() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [nextId, setNextId] = useState(1);
  const [title, setTitle] = useState("");

  const addTodo = () => {
    if (!title.trim()) return;
    setTodos(prev => [...prev, { id: nextId, title: title, done: false }]);
    setNextId(prev => prev + 1);
    setTitle("");
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return {todos, title, setTitle, addTodo, deleteTodo};
}

function App() {
  const {todos, title, setTitle, addTodo, deleteTodo} = useTodoManager();

  return (
    <MainLayout>
      <div className="InputArea">
        <TextInput title={title} setTitle={setTitle} />
        <Button addTodo={addTodo} />
      </div>
      <div className="TodoArea">
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </MainLayout>
  );
}

export default App;
