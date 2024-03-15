import { TTodo } from "@/types/types";
import React from "react";

export const revalidate = 10;

const ReportPage = async () => {
  const res = await fetch("http://localhost:4000/todos");
  const data = await res.json();

  const doneCount = data.filter((todo: TTodo) => todo.isDone).length;
  const workingCount = data.length - doneCount;

  return (
    <main className="flex flex-col">
      <h1 className="mb-5">Report Page</h1>
      <p>{`현재 ${data.length}개의 todolist가 등록되었습니다.`}</p>
      <p>{`현재 ${doneCount}개의 완료리스트, ${workingCount}개의 할일 리스트가 존재합니다.`}</p>
    </main>
  );
};

export default ReportPage;
