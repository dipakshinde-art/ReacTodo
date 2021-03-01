import React, { useState } from "react";
import "./App.css";
import ListTodo from "./component/ListTodo";
import TodoForm from "./component/TodoForm";

function App() {
  const [doto, setTodo] = useState("");
  const [dotos, setTodos] = useState([]);

  const [editId, setEditId] = useState(0);

  const handlerOnSubmit = (event) => {
    event.preventDefault();

    if (editId) {
      const editTodo = dotos.find((i) => i.id === editId);
      const updatedTodos = dotos.map((t) =>
        t.id === editTodo.id //check id dmatch
          ? (t = { id: t.id, doto })
          : { id: t.id, doto: t.doto }
      );
      setTodos(updatedTodos); //set edit value
      setEditId(0);
      setTodo("");
      return;
    }

    if (doto !== "") {
      setTodos([{ id: `${doto}-${Date.now()}`, doto }, ...dotos]);
      setTodo("");
    }
  }; //create new

  const HandleDelete = (id) => {
    const delTodo = dotos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  }; //delet list

  const HandleEdit = (id) => {
    const editTodo = dotos.find((i) => i.id === id);
    setTodo([editTodo.doto]);
    setEditId(id);
  }; //edit list

  return (
    <div className="App">
      <div className="Container">
       
       <h1>Todo</h1>
        <TodoForm
          handlerOnSubmit={handlerOnSubmit}
          doto={doto}
          editId={editId}
          setTodo={setTodo}
        />

        <ListTodo
          HandleEdit={HandleEdit}
          HandleDelete={HandleDelete}
          dotos={dotos}
        />
      </div>
    </div>
  );
}

export default App;
