import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({onCardClick, card, handleLike, handleDelete}) {
  const context = useContext(CurrentUserContext);
  const isOwn = card.owner._id === context._id;

  return (
    <div className="photo-grid__cell">
      {isOwn && (
        <button
          type="button"
          aria-label="кнопка удаления"
          className="photo-grid__delete-button"
          onClick={() =>
            handleDelete(card._id)
          }
        />
      )}
      <img
        className="photo-grid__photo"
        onClick={() =>
          onCardClick({ name: card.name, link: card.link })
        }
        src={card.link}
        alt={card.name}
      />
      <div className="photo-grid__annotation">
        <h2 className="photo-grid__title">{card.name}</h2>
        <div className="photo-grid__like-container">
          <button
            type="button"
            aria-label="кнопка лайка"
            onClick={() => handleLike(card)}
            className={`photo-grid__like-button-image ${
              card.likes.some((i) => i._id === context._id)
                ? "photo-grid__like-button-image_active"
                : ""
            }`}
          />
          <span className="photo-grid__like-counter">
            {card.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
