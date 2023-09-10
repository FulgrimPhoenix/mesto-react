function handleEditProfileClick(){
  document.querySelector('.popup-profile').classList.add('popup_opened');
}

function handleEditAvatarClick(){
  document.querySelector('.popup-avatar').classList.add('popup_opened');
}

function handleAddPlaceClick(){
  document.querySelector('.popup-add-card').classList.add('popup_opened');
}

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__cage">
          <div className="profile__avatar-cage">
            <img className="profile__avatar" src="<%=require('./images/profile/__avatar/__avatar.jpg')%>" alt="аватарка" onClick={handleEditAvatarClick} />
          </div>
            <div className="profile__cell">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__info">Исследователь океана</p>
            </div>
          <button type="button" className="profile__button-image" onClick={handleEditProfileClick} aria-label="кнопка редактирования профиля"></button>
        </div>
          <button type="button" className="profile__add-button-image" onClick={handleAddPlaceClick} aria-label="кнопка добавления фотографии"></button>
      </section>
      <section className="photo-section">
        <ul className="photo-grid">
           <template id="photo-grid__cell">
            <li className="photo-grid__cell">
              <button type="button" aria-label="кнопка удаления" className="photo-grid__delete-button"></button>
              <img className="photo-grid__photo" src="#" alt="#" />
               <div className="photo-grid__annotation">
                 <h2 className="photo-grid__title"></h2>
                <div className="photo-grid__like-container">
                   <button type="button" aria-label="кнопка лайка" className="photo-grid__like-button-image"></button>
                   <span className="photo-grid__like-counter">0</span>
                 </div>
               </div>
            </li>
          </template>
         </ul>
        </section>
      </main>
  )
}



export default Main;