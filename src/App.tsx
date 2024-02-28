import { useState } from "react";

import "./App.css";

type TodoItem = {
  id: string;
  text: string;
  checked: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleClick = () => {
    const input: HTMLInputElement | null = document.querySelector("input");
    if (!input) {
      return;
    }

    const inputText: string = input.value;
    setTodos([
      ...todos,
      { id: new Date().getTime().toString(), text: inputText, checked: false },
    ]);
    input.value = "";
  };

  const setChecked = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handlePurge = () => {
    const newTodos = todos.filter((todo) => !todo.checked);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo App</h1>

      <div className="taskInput">
        <input type="text" />
        <button onClick={handleClick}>Add</button>
      </div>

      <div className="todoList">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            id={todo.id}
            text={todo.text}
            checked={todo.checked}
            setChecked={setChecked}
          />
        ))}
      </div>

      <button className="purge" onClick={handlePurge}>
        Purge
      </button>
    </>
  );
};

type Props = {
  id: string;
  text: string;
  checked: boolean;
  setChecked: (id: string) => void;
};

const Todo = (props: Props) => {
  if (!props.text) {
    return null;
  }

  const handleCheck = () => {
    props.setChecked(props.id);
  };

  return (
    <div className="todoItem">
      <input type="checkbox" onChange={handleCheck} checked={props.checked} />
      <p
        style={{
          color: props.checked ? "gray" : "black",
          textDecoration: props.checked ? "line-through" : "none",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default Todos;
