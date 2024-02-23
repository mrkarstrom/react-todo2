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
          {todos.map((todo) => {
            return (
              <li className="my-4">
                <label htmlFor="item1">
                  <input type="checkbox" id="item1" checked={todo.completed} />
                  {todo.title}
                </label>
                <button className="bg-red-500 ">Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
