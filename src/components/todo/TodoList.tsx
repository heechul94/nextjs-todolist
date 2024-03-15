import { TTodo } from "@/types/types";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, isDone }: { todos: TTodo[]; isDone: boolean }) => {
  return (
    <div className="mb-5">
      <p>{isDone ? "Done!!" : "Working..."}</p>
      <ul>
        {todos
          ?.filter((todo: TTodo) => isDone === todo.isDone)
          .map((todo: TTodo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
