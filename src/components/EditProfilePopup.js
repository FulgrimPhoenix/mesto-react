import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Form from "./Form";
import Input from "./Input";

function EditProfilePopup(props){

  const context = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(context.name);
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(context.name);
    setDescription(context.about);
  }, [context]); 

  function handleNameChange(e){
    setName(e.target.value);
  }
  
  function handleDescriptionChange(e){
    setDescription(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    props.onUpdateUser(name, description);
    props.onClose()
  }

  return(
    <PopupWithForm key={`profile`}  onClose={props.onClose} isOpen={props.isOpen} name='profile' title='Редактировать профиль' test={
      <Form key={`editProfilePopup`} submit={handleSubmit} name={`editProfilePopup`} inputList={[
        <Input key={'field-name'} defValue={name} getValue={handleNameChange} id='field-name' placeholder='Введите имя'/>,
        <Input key={'field-speciality'} defValue={description} getValue={handleDescriptionChange} id='field-speciality' placeholder='Введите специальность'/>
      ]} submitButtonText='Сохранить'/>}/>
  )
}

export default EditProfilePopup;
