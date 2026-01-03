import React from 'react'

export default async function TodoItem() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
 const todos = await data.json();
  return (
    <div>
        {todos.map((todo)=>(
      <div key={todo.id} style={{ display: "flex", gap: "10px", padding: "10px", margin: "10px" }}>
        <input type="checkbox" readOnly checked={todo.completed} />
        <h2>{todo.title}</h2>
      </div>
    ))}
    </div>
  )
}
