import React from 'react';

function Todo({ todo, onRemove, onToggle }) {
  return (
    <div>
      <li onClick={() => onToggle(todo.input)}>{todo.input}</li>
      <button onClick={() => onRemove(todo.id)}>X</button>
    </div>
  );
}

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.input}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
