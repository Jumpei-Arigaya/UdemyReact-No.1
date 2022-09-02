import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";


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

  const onCliclComplete = (index) => {
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
      <div className='input-area'>
        <input type="text" placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className='imcomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={uuidv4()} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => {onCliclComplete(index)}}>完了</button>
                <button onClick= {() => {onClickDelete(index)}}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了済みのTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => {onClickBack(index)}}>戻す</button>
              </div>
            );
          })}
        </ul>

      </div>
    </>
  );
}

export default App;
