"use client";

import React from "react";
import AddForm from "@/components/todo/AddForm";
import TodoList from "@/components/todo/TodoList";
import { useGetTodos } from "@/hooks/useData";
import { useRouter } from "next/navigation";

const TodosCsrPage = () => {
  const { data: todos, isLoading } = useGetTodos();

  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <p>csr page</p>
      <AddForm />
      <TodoList todos={todos} isDone={false} />
      <TodoList todos={todos} isDone={true} />
      <button
        onClick={() => {
          router.push("/report");
        }}
      >
        할일정보통계보러가기
      </button>
    </>
  );
};

export default TodosCsrPage;
