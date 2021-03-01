import React from "react";

function ListTodo({ HandleEdit, HandleDelete, dotos }) {
  return (
    <ul className="alllist">
      {dotos.map((t) => (
        <li className="singltodo">
          <span className="singletodotext" key={t.id}>
            {t.doto}
          </span>
          <button onClick={() => HandleEdit(t.id)}> edit</button>
          <button onClick={() => HandleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
