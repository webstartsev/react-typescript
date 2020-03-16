import React from 'react';
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
};

export default App;
