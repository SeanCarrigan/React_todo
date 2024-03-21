import { useMemo, useContext } from "react";
import TodosContext from "../context/TodosContext";

function TodoItemsRemaining() {
  const { todos } = useContext(TodosContext);

  const remainingCalculation = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };

  const remaining = useMemo(remainingCalculation, [todos]);

  return (
    <span>
      {remaining > 1
        ? `${remaining} items remaining`
        : `${remaining} item remaining`}
    </span>
  );
}

export default TodoItemsRemaining;
