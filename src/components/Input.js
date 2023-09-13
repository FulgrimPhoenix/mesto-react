function Input(props){
  return(
    <>
      <input type="text" id={`${props.id}`} className={`form__input form__input_${props.id} popup__input`} placeholder={`${props.placeholder}`} required minLength="2" maxLength="40" />
      <span className={`form__input-error ${props.id}-error`}></span>
    </>
  )
}

export default Input;