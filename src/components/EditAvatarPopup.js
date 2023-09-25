import React from "react";
import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";
import Input from "./Input";

function EditAvatarPopup(props){
  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    props.onUpdateAvatar(ref.current.value);
    props.onClose()
  }
  return(
    <PopupWithForm key={`editAvatar`} onClose={props.onClose} isOpen={props.isOpen} name='avatar'title='Обновить аватар' test={
      <Form key={`editAvatarPopup`} submit={handleSubmit} name={`editAvatarPopup`} inputList={[
        <Input reff={ref} key={'field-url-avatar'} id='field-url-avatar' placeholder='Ссылка на картинку'/>,
      ]}
      submitButtonText='Сохранить'/>}
    />
  )
}

export default EditAvatarPopup