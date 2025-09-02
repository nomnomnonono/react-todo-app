export type TodoItem = {
    id: number
    title: string
};

export type TodoListProps = {
    todos: TodoItem[]
    deleteTodo: (id: number) => void
};
