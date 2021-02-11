import React from 'react';
import styles from './App.css';
import { TodoList } from './views/TodoList/TodoList';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoList />
    </div>
  );
};
