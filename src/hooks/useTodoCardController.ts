import { TTodo } from "@/types/types";
import { useDeleteTodo, usePatchTodo } from "./useData";

export const useTodoController = () => {
  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = usePatchTodo();

  const onClickDelete = (id: string) => {
    const confirmResult = confirm("삭제 하시겠습니까?");
    if (confirmResult) {
      deleteTodo(id);
    }
  };

  const onClickIsDone = (todo: TTodo) => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    updateTodo(updatedTodo);
  };

  return { onClickDelete, onClickIsDone };
};
