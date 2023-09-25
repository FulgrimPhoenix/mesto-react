import PopupWithForm from "./PopupWithForm";
import Form from "./Form";
import Input from "./Input";
import React from "react";

function AddPlacePopup(props){

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleLinkChange(e){
    setLink(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    e.target.reset();
    props.onAddPlace(name, link);
    props.onClose();
  }

  return(
    <PopupWithForm key={`addCard`} onClose={props.onClose} isOpen={props.isOpen} name='add-card' title='Новое место' test={
      <Form key={`addCardPopup`} submit={handleSubmit} name={`addCardPopup`} inputList={[
        <Input key={'field-title'} id='field-title' getValue={handleNameChange} placeholder='Название'/>,
        <Input key={'field-url'} id='field-url' getValue={handleLinkChange} placeholder='Ссылка на картинку'/>
      ]} 
      submitButtonText='Создать'/>}
    />
  )
}

export default AddPlacePopup;