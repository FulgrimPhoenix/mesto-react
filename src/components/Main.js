import api from "../utils/Api.js";
import React, { useEffect } from "react";
import Card from "./Card.js";

function Main(props) {

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState('https://sun1-98.userapi.com/impg/_l9QHTBgqyvRQMw0uGhWLcVveTeehay-rFjv7A/CDPVX9Z6V9A.jpg?size=774x942&quality=95&sign=561e182cf896e19f45dbe19222736b71&type=album')
  const [cards, setCard] = React.useState([]);

  React.useEffect(()=>{
    api.getMyUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  React.useEffect(()=>{
    api.getCardsInfo()
    .then((res) => {
      setCard(res);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__cage">
          <div className="profile__avatar-cage">
            <img className="profile__avatar" src={`${userAvatar}`} alt="аватарка" onClick={props.onEditAvatar} />
          </div>
            <div className="profile__cell">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__info">{userDescription}</p>
            </div>
          <button type="button" className="profile__button-image" onClick={(props.onEditProfile) } aria-label="кнопка редактирования профиля"></button>
        </div>
          <button type="button" className="profile__add-button-image" onClick={props.onAddPlace} aria-label="кнопка добавления фотографии"></button>
      </section>
      <section className="photo-section">
        <ul className="photo-grid">
          {cards.map((el) => {
            return(
              <Card key={`${el._id}`} onCardClick={props.onCardClick} title={el.name} link={el.link} likes={el.likes}/>
            )
          })}
        </ul>
      </section>
    </main>
  )
}



export default Main;