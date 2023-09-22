import React, { useContext } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Card(props){

  const context = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === context._id;;
  const [isLiked, setLikeState] = React.useState(props.card.likes.some(i => i._id === context._id));
  const [likeCounter, setLikeNumber] = React.useState(props.card.likes.length);

  function handleLikeStatus(){
    isLiked?
      setLikeNumber(likeCounter - 1)
      : setLikeNumber(likeCounter + 1);

    setLikeState(!isLiked);
  }


  return(
      <li className="photo-grid__cell">
        {!isOwn && <button type="button" aria-label="кнопка удаления" className="photo-grid__delete-button" onClick={() => props.handleDelete(props.card._id, props.card.owner._id)} />}
        <img className="photo-grid__photo" onClick={props.onCardClick} src={`${props.card.link}`} alt={`${props.card.title}`} />
        <div className="photo-grid__annotation">
          <h2 className="photo-grid__title">{`${props.card.name}`}</h2>
          <div className="photo-grid__like-container">
            <button type="button" aria-label="кнопка лайка" onClick={() => props.handleLike(props.card, context, {
              changeLikeStatus: () => {handleLikeStatus()}
              }
            )} className={`photo-grid__like-button-image ${isLiked ? 'photo-grid__like-button-image_active' : ''}`} />
            <span className="photo-grid__like-counter">{likeCounter}</span>
          </div>
        </div>
      </li>
  )
}

export default Card