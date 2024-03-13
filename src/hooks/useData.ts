"use client";

import { queryClient } from "@/app/provider";
import { TTodo } from "@/types/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/todos");
      const { data } = await response.json();
      return data;
    },
  });

  return { data, isLoading };
};

export const usePostTodo = () => {
  const { mutate: postTodo } = useMutation({
    mutationFn: async ({
      title,
      contents,
    }: {
      title: string;
      contents: string;
    }) => {
      await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, contents, isDone: false }),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  return { postTodo };
};

export const usePatchTodo = () => {
  const { mutate: updateTodo } = useMutation({
    mutationFn: async ({ id, title, contents, isDone }: TTodo) => {
      await fetch(`http://localhost:3000/api/todos/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, contents, isDone }),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  return { updateTodo };
};

export const useDeleteTodo = () => {
  const { mutate: deleteTodo } = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:3000/api/todos`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  return { deleteTodo };
};
