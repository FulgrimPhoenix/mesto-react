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
import EditProfilePopup from './components/EditProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';

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
    // Проверяем, есть ли уже лайк на этой карточке
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
  //закрываем все модальные окна
  function closeAllPopups (){
    onCardClick({ src: '', title: '' });
    setImagePopupState(!isImagePopupOpen);
    setImagePopupState(false)
    setProfilePopupState(false);
    setAddCardPopupState(false);
    setAvatarPopupState(false);
  }

  //устанавливаем новый контекст и отправляем данные на сервер
  function handleUpdateUser(name, about) {
    api.editProfileInfo(name, about)
      .then((res) => {
        setUserData(res)
      })
  }
  //
  function handleUpdateAvatar(link){
    api.updateAvatar(link)
    .then((res) => {
      setUserData(res);
    })
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header></Header> 
        <Main onCardDelete={handleCardDelete} onCardLike={handleLike} onCardClick={handleClick} onEditProfile={handleProfilePopupState} onAddPlace={handleAddCardPopupState} onEditAvatar={handleAvatarPopupState} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <PopupWithForm key={`addCard`} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name='add-card'title='Новое место' test={
          <Form key={`addCardPopup`} name={`addCardPopup`} inputList={[
            <Input key={'field-title'} id='field-title' placeholder='Название'/>,
            <Input key={'field-url'} id='field-url' placeholder='Ссылка на картинку'/>
          ]} 
          submitButtonText='Создать'/>}
        />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <PopupWithForm key={`deleteCard`} name='delete-card' title='Вы уверены?' test={
          <Form key={`deleteCardPopup`} name={`deleteCardPopup`} submitButtonText='Да'/>}
        />
        <ImagePopup key={`ImagePopup`} card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
