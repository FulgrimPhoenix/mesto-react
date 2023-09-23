import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";
import Input from "./Input";

function EditAvatarPopup(props){
  const ref = useRef();

  React.useEffect(() => {console.log(ref.current)})
  return(
    <PopupWithForm key={`editAvatar`} onClose={props.onClose} isOpen={props.isOpen} name='avatar'title='Обновить аватар' test={
      <Form key={`editAvatarPopup`} name={`editAvatarPopup`} inputList={[
        <Input reff={ref} key={'field-url-avatar'} id='field-url-avatar' placeholder='Ссылка на картинку'/>,
      ]}
      submitButtonText='Сохранить'/>}
    />
  )
}

export default EditAvatarPopup