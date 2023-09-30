import PopupWithForm from "./PopupWithForm";
import Form from "./Form";
import Input from "./Input";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(name, link);
  }

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      name="add-card"
      title="Новое место"
      children={
        <Form
          key={`addCardPopup`}
          submit={handleSubmit}
          name={`addCardPopup`}
          children={[
            <Input
              key={"field-title"}
              id="field-title"
              value={name}
              getValue={handleNameChange}
              placeholder="Название"
            />,
            <Input
              key={"field-url"}
              id="field-url"
              value={link}
              getValue={handleLinkChange}
              placeholder="Ссылка на картинку"
            />,
          ]}
          submitButtonText="Создать"
        />
      }
    />
  );
}

export default AddPlacePopup;
