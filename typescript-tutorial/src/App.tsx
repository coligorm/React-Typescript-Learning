import React, { useState } from 'react';
import './App.css';
import InputField from "./components/InputField"
import { Todo } from './models/Todo';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  console.log(todo);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={ todo } setTodo={ setTodo } />

    </div>
  );
}

export default App;
