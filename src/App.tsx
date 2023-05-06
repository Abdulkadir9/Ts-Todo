import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Message from "./components/Message";
import { ITodos } from "./types/Type";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [updateState, setUpdateState] = useState<boolean>(false);
  const [idSt, setIdSt] = useState<number>(0);

  const addTodo = (up: boolean) => {
    if (up) {
      setTodos([...todos, { id: todos.length + 1, message: todo }]);
    } else {
      setTodos((todox) =>
        todox.filter((td) => {
          if (td.id === idSt) {
            td.message = todo;
          }

          return todos;
        })
      );
    }
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    setTodos((todo) => todo.filter((td) => td.id !== id));
    if (id === idSt) {
      setUpdateState(false);
      setTodo("");
    }
  };

  const updateTodo = (id: number) => {
    setUpdateState(true);
    setTodos((todo) =>
      todo.filter((td) => {
        if (td.id === id) {
          setIdSt(id);
          setTodo(td.message);
        }

        return todos;
      })
    );
  };

  return (
    <div className="App w-full">
      <Input
        updateState={updateState}
        setUpdateState={setUpdateState}
        addTodo={addTodo}
        todo={todo}
        setTodo={setTodo}
      />
      <div className="my-4 w-full h-px bg-gray-600"></div>
      <Message updateTodo={updateTodo} deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
}

export default App;
