import React, { useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string): void {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: uuidv4(), title, completed: false }];
    });
  }

  function toggleTodo(id: string, completed: boolean): void {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function handleDelete(id: string): void {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo-list</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </div>
  );
}
