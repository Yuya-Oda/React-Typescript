import React, { useEffect, useState, useContext } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { TodoListContext } from 'src/context/TodoListContext';
import { TodoItem } from 'src/components/TodoItem';
import { Todo } from 'src/model/Todo';
import styles from './TodoList.css';
import { useHistory } from 'react-router-dom';

export const TodoList: React.FC = () => {
  // const [tittle, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [todoList, setTodoList] = useState<Todo[]>([]);

  const { todoList, setTodoList } = useContext(TodoListContext);

  const [todo, setTodo] = useState<Todo>({
    title: '',
    description: '',
  });

  const history = useHistory();

  useEffect(() => {
    // const getTodoList = async () => {
    //   const response = await Axios.get<Todo[]>('todos');
    //   setTodoList(response.data);
    // };
    // getTodoList();
    (async () => {
      const response = await Axios.get<Todo[]>('todos');
      setTodoList(response.data);
    })();
  }, [setTodoList]);

  const changedTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = Object.assign({}, todo); //左(空)に対して右(todo)をマージする
    newTodo.title = e.target.value;
    setTodo(newTodo);
  };

  const changedDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTodo = Object.assign({}, todo); //左(空)に対して右(todo)をマージする
    newTodo.description = e.target.value;
    setTodo(newTodo);
  };

  const addClick = async () => {
    const response = await Axios.post<Todo, AxiosResponse<string>>(
      'todos',
      todo
    );
    const newTodo = Object.assign({}, todo);
    newTodo.id = parseInt(response.data);

    const newTodoList = todoList.slice();
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <React.Fragment>
      <div>
        <input className={styles.todoTitleInput} onChange={changedTitle} />
        <textarea
          className={styles.todoDescriptionInput}
          onChange={changedDescription}
        />
      </div>
      <div>
        <button className={styles.todoAddButton} onClick={addClick}>
          Click Me!!
        </button>
      </div>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onclick={() => {
              return history.push(`/edit/${todo.id}`);
            }}
          />
        );
      })}
    </React.Fragment>
  );
};
