import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './App.css';

const todos = [
  {
    id: 1,
    text: 'Hello1',
  },
  {
    id: 2,
    text: 'Hello2',
  },
  {
    id: 3,
    text: 'Hello3',
  }
]

const App = () => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일 
      </div>
      <section className="form-wrapper">
        <Form />
      </section>
      <section className="todos-wrapper">
        <TodoList todos={todos} />
      </section>
    </main>
  );
};

export default App;
