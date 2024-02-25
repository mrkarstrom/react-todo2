import React from 'react';

interface Props {
  completed: boolean;
  id: string;
  title: string;
  toggleTodo: (id: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
}

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  handleDelete,
}: Props) {
  return (
    <li className="my-4">
      <label htmlFor="item">
        <input
          id="item"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="bg-red-500" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
}
