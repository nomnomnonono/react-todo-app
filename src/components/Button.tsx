import type { ButtonProps } from '../types/button';

function Button({ addTodo }: ButtonProps) {
    return <button onClick={addTodo} className="px-3 py-2 ml-2 bg-blue-500 text-white rounded">Add</button>
}

export default Button;
