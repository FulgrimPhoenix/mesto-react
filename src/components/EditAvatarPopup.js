import React, { createRef } from "react";
import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";
import Input from "./Input";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [url, setUrl] = React.useState("");
  const ref = createRef();

  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  React.useEffect(() => {
    setUrl("");
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
        value={url}
        getValue={handleUrlChange}
        id="field-url-avatar"
        placeholder="Ссылка на картинку"
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
