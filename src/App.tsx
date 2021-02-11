import React from 'react';
import Axios from 'axios';
import styles from 'src/App.css';
import { TodoList } from 'src/views/TodoList/TodoList';
import { TodoListProvider } from 'src/context/TodoListContext';

Axios.defaults.baseURL = 'http://localhost:4000/api/';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoListProvider>
        <TodoList />
      </TodoListProvider>
    </div>
  );
};
