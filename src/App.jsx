import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import Form from './components/Form.js';
import Input from './components/Input.js';
import ImagePopup from './components/ImagePopup.js';
import api from './utils/Api';
import { CurrentUserContext } from './contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddCardPopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupState] = React.useState(false);
  const [isImagePopupOpen, setImagePopupState] = React.useState(false)
  const [selectedCard, onCardClick] = React.useState({src: '', title: ''})

  const [currentUser, setUserData] = React.useState({});

  React.useEffect(() => {
    api.getMyUserInfo()
      .then((res) => setUserData(res))
      .catch((err) => {
        console.log(err);
      })
  },[]);

  function handleLike(card, currentContext, {changeLikeStatus}) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentContext._id);
    !isLiked ? 
    api.likeThisCard(card._id).then(() => changeLikeStatus())
    : api.unLikeThisCard(card._id).then(() => changeLikeStatus())
  }

  function handleCardDelete(id){
    api.deleteCard(id)
      .catch(err => console.log(err))
  }

  function handleClick(e) {
    setImagePopupState(!isImagePopupOpen);
    onCardClick({ src: e.target.src, title: e.target.alt });
  }

  function handleProfilePopupState(){
    setProfilePopupState(!isEditProfilePopupOpen);
  }
  function handleAddCardPopupState(){
    setAddCardPopupState(!isAddPlacePopupOpen);
  }
  function handleAvatarPopupState(){
    setAvatarPopupState(!isEditAvatarPopupOpen);
  }
  function closeAllPopups (){
    onCardClick({ src: '', title: '' });
    setImagePopupState(!isImagePopupOpen);
    setImagePopupState(false)
    setProfilePopupState(false);
    setAddCardPopupState(false);
    setAvatarPopupState(false);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header></Header> 
        <Main onCardDelete={handleCardDelete} handleLike={handleLike} onCardClick={handleClick} onEditProfile={handleProfilePopupState} onAddPlace={handleAddCardPopupState} onEditAvatar={handleAvatarPopupState} />
        <Footer />
        <PopupWithForm key={`profile`} onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name='profile' title='Редактировать профиль' test={
          <Form key={`editProfilePopup`} name={`editProfilePopup`} inputList={[
            <Input key={'field-name'} id='field-name' placeholder='Введите имя'/>,
            <Input key={'field-speciality'} id='field-speciality' placeholder='Введите специальность'/>
          ]} submitButtonText='Сохранить'/>}/>
        <PopupWithForm key={`addCard`} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name='add-card'title='Новое место' test={
          <Form key={`addCardPopup`} name={`addCardPopup`} inputList={[
            <Input key={'field-title'} id='field-title' placeholder='Название'/>,
            <Input key={'field-url'} id='field-url' placeholder='Ссылка на картинку'/>
          ]} 
          submitButtonText='Создать'/>}
        />
        <PopupWithForm key={`editAvatar`} onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name='avatar'title='Обновить аватар' test={
          <Form key={`editAvatarPopup`} name={`editAvatarPopup`} inputList={[
            <Input key={'field-url-avatar'} id='field-url-avatar' placeholder='Ссылка на картинку'/>,
          ]}
          submitButtonText='Сохранить'/>}
        />
        <PopupWithForm key={`deleteCard`} name='delete-card' title='Вы уверены?' test={
          <Form key={`deleteCardPopup`} name={`deleteCardPopup`} submitButtonText='Да'/>}
        />
        <ImagePopup key={`ImagePopup`} card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
