import './App.css';

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <form className="new-item-form flex flex-col items-center justify-center">
          <div className="form-row flex flex-col items-center justify-center gap-4">
            <label htmlFor="item p-4">New Item</label>
            <input className="m-4" type="text" id="item" />
          </div>
          <button className="btn w-md bg-slate-500">Add</button>
        </form>
        <h1 className="header">Todo-list</h1>
        <ul className="list">
          <li className="my-4">
            <label htmlFor="item1">
              <input type="checkbox" id="item1" />
              Item 1
            </label>
            <button className="bg-red-500 ">Delete</button>
          </li>
          <li className="my-4">
            <label htmlFor="item2">
              <input type="checkbox" id="item2" />
              Item 2
            </label>
            <button className="bg-red-500 ">Delete</button>
          </li>
        </ul>
      </div>
    </>
  );
}
