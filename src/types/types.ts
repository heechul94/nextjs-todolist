export type TTodo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type TNewTodo = Omit<TTodo, "id">;
