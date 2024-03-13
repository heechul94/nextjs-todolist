"use client";

import { useAddFormController } from "@/hooks/useAddFormController";

const AddForm = () => {
  const { onChangeFormValue, onSubmitForm } = useAddFormController();
  return (
    <form onSubmit={onSubmitForm}>
      <label>
        제목: <input type="text" name="title" onChange={onChangeFormValue} />
      </label>
      <label>
        내용: <input type="text" name="contents" onChange={onChangeFormValue} />
      </label>
      <button type="submit">등록</button>
    </form>
  );
};

export default AddForm;
