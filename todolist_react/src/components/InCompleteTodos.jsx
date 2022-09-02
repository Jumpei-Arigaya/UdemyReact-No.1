import React from 'react';

export const InCompleteTodos = ({todos, uuidv4, onClickComplete, onClickDelete}) => {
    return (
        <div className='imcomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={uuidv4()} className='list-row'>
                <li>{todo}</li>
                <button onClick={() =>  onClickComplete(index) }>完了</button>
                <button onClick={() =>  onClickDelete(index) }>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

    );

}