import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { InputTodo } from './components/InputTodo';
import { InCompleteTodos } from './components/InCompleteTodos'
import { CompleteTodos } from './components/CompleteTodos';


function App() {

  const [todoText, setTodoText] = useState();

  // eslint-disable-next-line
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // eslint-disable-next-line
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (!todoText) return;
    const newText = [...incompleteTodos, todoText];
    setIncompleteTodos(newText);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <InCompleteTodos todos={incompleteTodos} uuidv4={uuidv4} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}

export default App;
