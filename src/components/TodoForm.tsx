import React from 'react';

const TodoForm: React.FC = () => {
  return (
    <div className="input-field mt2">
      <input type="text" id="title" placeholder="Введите название дела" />
      <label htmlFor="title">Введите название дела</label>
    </div>
  );
};

export default TodoForm;
