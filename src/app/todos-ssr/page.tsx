import { TTodo } from "@/types/types";
import Link from "next/link";
import React from "react";

const TodosSsrPage = async () => {
  const response = await fetch("http://localhost:4000/todos", {
    cache: "no-cache",
  });
  const data = await response.json();

  console.log(data);

  return (
    <main className="flex flex-col">
      <h1 className="mb-5">SSR Page</h1>
      {data.map((todo: TTodo) => (
        <div key={todo.id} className="border mb-5">
          <div>{todo.title}</div>
          <div>{todo.contents}</div>
          <div className="border w-full">
            {todo.isDone ? "Done" : "Working"}
          </div>
        </div>
      ))}
      <Link href={"/report"}>할일정보통계보러가기</Link>
    </main>
  );
};

export default TodosSsrPage;
