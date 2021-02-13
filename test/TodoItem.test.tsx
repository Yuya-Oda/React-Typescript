import { TodoItem } from '../src/components/TodoItem';
import { Todo } from '../src/model/Todo';
import '@testing-library/jest-dom';
import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

afterEach(() => {
  return cleanup();
});

describe('TodoItem components', () => {
  it('matches snapshot', () => {
    const todo: Todo = { title: 'test title', description: 'test description' };
    const { asFragment } = render(<TodoItem todo={todo} />, {});
    expect(asFragment()).toMatchSnapshot(); //現在のCSSが適用されたビジュアルを保存しテストのたびに確認する
  });
  it(' render todo', () => {
    const todo: Todo = { title: 'test title', description: 'test description' };
    render(<TodoItem todo={todo} />);
    expect(screen.getByText('test title')).toBeInTheDocument(); //titleのチェック
    expect(screen.getByText('test description')).toBeInTheDocument(); //descriptionのチェック
  });
  it('click todo', () => {
    const mockFunction = jest.fn();
    const todo: Todo = {
      title: 'test title',
      description: 'test description',
    };
    render(<TodoItem todo={todo} onclick={mockFunction} />);
    const todoItem = screen.getByText('test title')
      .parentElement as HTMLElement;
    userEvent.click(todoItem);
    expect(mockFunction).toHaveBeenCalledTimes(1); //mockFunctionが1回よびだされているか
  });
});
