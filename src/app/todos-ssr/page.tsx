import { TTodo } from "@/types/types";
import Link from "next/link";
import React from "react";

const TodosSsrPage = async () => {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  const { data } = await response.json();

  console.log(data);

  return (
    <>
      <div>SSR PAGE</div>
      {data.map((todo: TTodo) => (
        <div key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.contents}</div>
          <div>{todo.isDone ? "Done" : "Working"}</div>
        </div>
      ))}
      <Link href={"/report"}>할일정보통계보러가기</Link>
    </>
  );
};

export default TodosSsrPage;
