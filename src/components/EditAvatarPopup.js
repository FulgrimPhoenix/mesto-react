import React, { createRef } from "react";
import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const ref = createRef();

  React.useEffect(() => {
    ref.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(ref.current.value);
  }

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      name="avatar"
      title="Обновить аватар"
      submit={handleSubmit}
      submitButtonText={"Сохранить"}
    >
      <Input
        key={"field-url-avatar"}
        ref={ref}
        id="field-url-avatar"
        placeholder="Ссылка на картинку"
        isRef={true}
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
