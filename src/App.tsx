import { useState, useRef } from "react";

import "./App.css";

type TodoItem = {
  id: string;
  text: string;
  checked: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [task, setTask] = useState<string>("");
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!task) return;

    setTodos([
      ...todos,
      { id: new Date().getTime().toString(), text: task, checked: false },
    ]);

    setTask("");
    inputRef.current?.focus();
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

      <form className="taskInput" onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleTask} ref={inputRef} />
        <button type="submit">Add</button>
      </form>

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
