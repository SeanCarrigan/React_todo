import { useContext } from "react";
import TodosContext from "../context/TodosContext";

function TodoClearCompleted() {
  const { todos, setTodos } = useContext(TodosContext);

  const clearCompleted = () => {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  };

  return (
    <div>
      <button onClick={clearCompleted} className="button">
        Clear completed
      </button>
    </div>
  );
}

export default TodoClearCompleted;
