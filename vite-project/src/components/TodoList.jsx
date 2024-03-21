import { useContext, useState } from "react";

import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoClearCompleted from "./TodoClearCompleted";
import TodoFilters from "./TodoFilters";
import TodosContext from "../context/TodosContext";

function TodoList() {
  const { todos, setTodos, todosFiltered } = useContext(TodosContext);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const markAsEditing = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const cancelEdit = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (event, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completeAllTodos = () => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      isComplete: !todo.isComplete,
    }));
    setTodos(updatedTodos);
    setIsAllChecked(!isAllChecked);
  };

  return (
    <>
      <ul className="todo-list">
        {todosFiltered().map((todo) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                type="checkbox"
                onChange={() => completeTodo(todo.id)}
                checked={todo.isComplete ? true : false}
              ></input>
              {!todo.isEditing ? (
                <span
                  onDoubleClick={() => markAsEditing(todo.id)}
                  className={`todo-item-label ${
                    todo.isComplete ? "line-through" : ""
                  }`}
                >
                  {" "}
                  {todo.title}{" "}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={(event) => updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      updateTodo(event, todo.id);
                    } else if (event.key === "Escape") {
                      cancelEdit(todo.id);
                    }
                  }}
                  className="todo-item-input"
                  defaultValue={todo.title}
                  autoFocus
                ></input>
              )}
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="check-all-container">
        <div>
          <div className="button" onClick={() => completeAllTodos()}>
            {!isAllChecked ? `Check All` : `Uncheck All`}
          </div>
        </div>

        <TodoItemsRemaining></TodoItemsRemaining>
      </div>

      <div className="other-buttons-container">
        <TodoFilters></TodoFilters>
        <div>
          <TodoClearCompleted></TodoClearCompleted>
        </div>
      </div>
    </>
  );
}

export default TodoList;
