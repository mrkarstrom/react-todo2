import { useState } from 'react';
import './App.css';

export default function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((c) => {
      return [
        ...c,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem('');
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="new-item-form flex flex-col items-center justify-center"
        >
          <div className="form-row flex flex-col items-center justify-center gap-4">
            <label htmlFor="item p-4">New Item</label>
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="m-4"
              type="text"
              id="item"
            />
          </div>
          <button className="btn w-md bg-slate-500">Add</button>
        </form>
        <h1 className="header">Todo-list</h1>
        <ul className="list">
          {todos.length === 0 && 'No Todos'}
          {todos.map((todo) => {
            return (
              <li className="my-4" key={todo.id}>
                <label htmlFor="item">
                  <input
                    id="item"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  {todo.title}
                </label>
                <button
                  className="bg-red-500 "
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
