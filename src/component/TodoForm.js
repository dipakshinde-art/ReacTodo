import React from "react";

function TodoForm({handlerOnSubmit,doto,editId,setTodo}) {
  return (
    <form className="form" onSubmit={handlerOnSubmit}>
      <input
        type="text"
        value={doto}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="submit">{editId ? "Edit" : "Go"}</button>
    </form>
  );
}

export default TodoForm;
