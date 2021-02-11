import React from 'react';
import { Todo } from '../model/Todo';
import styles from './TodoItem.css';

type Props = {
  todo: Todo;
  onclick?: () => void;
};

export const TodoItem: React.FC<Props> = ({ todo, onclick }) => {
  return (
    <div className={styles.todoItem} onClick={onclick}>
      <div className={styles.todoItemTitle}>{todo.title}</div>
      <div className={styles.todoDescriptionInput}>{todo.description}</div>
    </div>
  );
};
