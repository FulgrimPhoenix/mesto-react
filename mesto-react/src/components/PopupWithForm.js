function PopupWithForm(props){
  return(
    <div className={`popup popup-${props.name} ${(props.isOpen) ? 'popup_opened' : ''}`} id={`popup-${props.name}`}>
        <div className="popup__container">
          <button type="button" className="popup__exit" onClick={props.onClose}></button>
          <h2 className="popup__title">{props.title}</h2>
          {props.test}
        </div>  
      </div>
  )
}

export default PopupWithForm;