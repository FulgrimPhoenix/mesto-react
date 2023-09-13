function Card(props){
  return(
      <li className="photo-grid__cell">
        <button type="button" aria-label="кнопка удаления" className="photo-grid__delete-button"></button>
        <img className="photo-grid__photo" onClick={props.onCardClick} src={`${props.link}`} alt={`${props.title}`} />
        <div className="photo-grid__annotation">
          <h2 className="photo-grid__title">{`${props.title}`}</h2>
          <div className="photo-grid__like-container">
            <button type="button" aria-label="кнопка лайка" className="photo-grid__like-button-image"></button>
            <span className="photo-grid__like-counter">{`${props.likes.length}`}</span>
          </div>
        </div>
      </li>
  )
}

export default Card