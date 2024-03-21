import { useContext, useState } from "react";
import TodosContext from "../context/TodosContext";

export default function TodoForm() {
  const { todos, setTodos, idForTodo, setIdForTodo } = useContext(TodosContext);
  const [todoInput, setTodoInput] = useState("");

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
        isEditing: false,
      },
    ]);
    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
    setTodoInput("");
  };

  return (
    <form action="#" onSubmit={addTodo}>
      <input
        type="text"
        value={todoInput}
        onChange={handleInput}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}
