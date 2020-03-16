import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  const removeHandler = (evt: React.MouseEvent, id: number) => {
    evt.preventDefault();

    onRemove(id);
  };

  if (!todos.length) {
    return <p className="center">Пока дел нет</p>;
  }
  return (
    <ul>
      {todos &&
        todos.map(todo => {
          const classes = ['todo'];
          if (todo.completed) {
            classes.push('completed');
          }

          return (
            <li className={classes.join(' ')} key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={onToggle.bind(null, todo.id)}
                />
                <span>{todo.title}</span>
                <i className="material-icons red-text" onClick={evt => removeHandler(evt, todo.id)}>
                  delete
                </i>
              </label>
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
