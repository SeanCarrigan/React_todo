import "../reset.css";
import "../App.css";
import { useEffect, useRef, useState } from "react";
import NoTodos from "./NoTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useLocalStorage from "../hooks/useLocalStorage";
import TodosContext from "../context/TodosContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const nameInputEl = useRef(null);
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [idForTodo, setIdForTodo] = useLocalStorage("idForTodo", 1);
  const [filter, setFilter] = useState("all");

  const todosFiltered = () => {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  };

  useEffect(() => {}, []);

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        idForTodo,
        setIdForTodo,
        filter,
        setFilter,
        todosFiltered,
      }}
    >
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name?</h2>

            <form action="#">
              <input
                type="text"
                ref={nameInputEl}
                className="todo-input"
                placeholder="What is your name?"
                value={name}
                onChange={handleNameInput}
              ></input>
            </form>
            {name && <p className="name-label">Hello, {name}</p>}
          </div>
          <h2>Todo App</h2>
          <TodoForm></TodoForm>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={todos.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
              {todos.length > 0 ? <TodoList></TodoList> : <NoTodos></NoTodos>}
            </CSSTransition>
          </SwitchTransition>

          {/* <CSSTransition
            in={todos.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <TodoList></TodoList>
          </CSSTransition>
          <CSSTransition
            in={todos.length === 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <NoTodos></NoTodos>
          </CSSTransition> */}
        </div>
     
    </TodosContext.Provider>
  );
}

export default App;
