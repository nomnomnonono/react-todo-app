import type {TodoListProps } from '../types/todo';

function TodoList({ todos, deleteTodo }: TodoListProps) {
    return (
        <div className="TodoList">
            {todos.map(todo => 
                <div className="flex items-center gap-2 my-4" key={todo.id}>
                    <p className="px-3 py-2">{todo.title}</p>
                    <button onClick={() => deleteTodo(todo.id)} className="px-2 py-2 bg-gray-400 text-white rounded">Delete</button>
                </div>
            )}
        </div>
    );
}

export default TodoList;
