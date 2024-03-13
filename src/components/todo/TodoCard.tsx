import { useTodoController } from "@/hooks/useTodoCardController";
import { TTodo } from "@/types/types";
import React from "react";

const TodoCard = ({ todo }: { todo: TTodo }) => {
  const { onClickDelete, onClickIsDone } = useTodoController();
  return (
    <li>
      <div>
        <div>
          <p>제목: {todo.title}</p>
          <p>내용: {todo.contents}</p>
        </div>
        <button onClick={() => onClickDelete(todo.id)}>삭제</button>
      </div>
      <button onClick={() => onClickIsDone(todo)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </li>
  );
};

export default TodoCard;
