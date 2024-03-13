import { TNewTodo } from "@/types/types";
import { useState } from "react";
import { usePostTodo } from "./useData";

export const useAddFormController = () => {
  const [formValue, setFormValue] = useState<TNewTodo>({
    title: "",
    contents: "",
    isDone: false,
  });
  const { postTodo } = usePostTodo();

  const onChangeFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postTodo(formValue);
    event.currentTarget.reset();
  };

  return { onChangeFormValue, onSubmitForm };
};
