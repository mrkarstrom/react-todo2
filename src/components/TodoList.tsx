import React from 'react';
import { TodoItem } from './TodoItem';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, handleDelete }) => {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No Todos</li>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
