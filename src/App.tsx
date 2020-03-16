import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [newTodo, ...prev]);
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm onAdd={addTodoHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
