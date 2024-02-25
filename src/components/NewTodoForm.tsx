import React, { useState } from 'react';

interface Props {
  onSubmit: (title: string) => void;
}

export default function NewTodoForm({ onSubmit }: Props) {
  const [newItem, setNewItem] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newItem === '') return;

    onSubmit(newItem);
    setNewItem('');
  }

  return (
    <div>
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
    </div>
  );
}
