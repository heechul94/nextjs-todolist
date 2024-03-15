"use client";

import { useAddFormController } from "@/hooks/useAddFormController";

const AddForm = () => {
  const { onChangeFormValue, onSubmitForm } = useAddFormController();
  return (
    <form onSubmit={onSubmitForm} className="mb-5">
      <label className="mr-2">
        제목: <input type="text" name="title" onChange={onChangeFormValue} />
      </label>
      <label className="mr-2">
        내용: <input type="text" name="contents" onChange={onChangeFormValue} />
      </label>
      <button type="submit" className="border px-1">
        등록
      </button>
    </form>
  );
};

export default AddForm;
