import React from 'react';
import Axios from 'axios';
import styles from './App.css';
import { TodoList } from './views/TodoList/TodoList';

Axios.defaults.baseURL = 'http://localhost:4000/api/';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoList />
    </div>
  );
};
