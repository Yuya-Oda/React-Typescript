import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { TodoItem } from '../../components/TodoItem';
import { Todo } from '../../model/Todo';
import styles from './TodoList.css';

// const todos: Todo[] = [];

export const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodoList = async () => {
      const response = await Axios.get<Todo[]>('todos');
      setTodoList(response.data);
    };
    getTodoList();
  }, [setTodoList]);

  return (
    <React.Fragment>
      <div>
        <input className={styles.todoTitleInput} />
        <br />
        <textarea className={styles.todoDescriptionInput} />
      </div>
      <div>
        <button className={styles.todoAddButton}>Click Me!!</button>
      </div>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </React.Fragment>
  );
};
