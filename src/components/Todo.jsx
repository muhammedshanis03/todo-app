import React from 'react';
import './css/Todo.css';
function Todo({data, slno}) {
  return (
    <div className={`todos ${data.done?'strike' : null}`} strike>{slno} . {data.text}</div>
  );
}

export default Todo;
