import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../models/Todo';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault(); /* Stops a screen refresh */

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) =>
        todo.id !== id
      )
    );
  };

  return (
    <form
      className='todos_single'
      onSubmit={(e) =>
        handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={ inputRef }
          value={ editTodo }
          onChange={(e) => setEditTodo(e.target.value)}
          className='todos_single--text'
        />
      ) : todo.isDone ? (
        <s className='todos_single--text'>{ todo.todo } </s>
      ) : (
        <span className='todos_single--text'>{ todo.todo } </span>
      )}
      <div>
        <span className='icon' onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit)
          }
        }}> 
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo;