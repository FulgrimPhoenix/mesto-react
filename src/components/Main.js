import api from "../utils/Api.js";
import React, { useEffect } from "react";
import Card from "./Card.js";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {

  const [cards, setCard] = React.useState([]);
  const context = useContext(CurrentUserContext);


  React.useEffect(()=>{
    api.getCardsInfo()
    .then((res) => {
      setCard(res);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  
  function deleteCard(id, owner){
    props.onCardDelete(id);

    owner === context._id ?
    setCard(cards.filter((item) => {return (item._id !== id)}))
    : console.log('карточка не моя');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__cage">
          <div className="profile__avatar-cage">
            <img className="profile__avatar" src={`${context.avatar}`} alt="аватарка" onClick={props.onEditAvatar} />
          </div>
            <div className="profile__cell">
              <h1 className="profile__name">{context.name}</h1>
              <p className="profile__info">{context.about}</p>
            </div>
          <button type="button" className="profile__button-image" onClick={(props.onEditProfile) } aria-label="кнопка редактирования профиля"></button>
        </div>
          <button type="button" className="profile__add-button-image" onClick={props.onAddPlace} aria-label="кнопка добавления фотографии"></button>
      </section>
      <section className="photo-section">
        <ul className="photo-grid">
          {cards.map((el) => {
            return(
              <Card key={`${el._id}`} onCardClick={props.onCardClick} card={el} handleLike={props.onCardLike} handleDelete={deleteCard} />
            )
          })}
        </ul>
      </section>
    </main>
  )
}



export default Main;