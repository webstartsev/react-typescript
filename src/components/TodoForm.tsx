import React, { useState } from 'react';

interface TodoFromProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFromProps> = props => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  const keyPressHandler = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        value={title}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
        placeholder="Введите название дела"
      />
      <label htmlFor="title">Введите название дела</label>
    </div>
  );
};

export default TodoForm;
