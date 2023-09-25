function Input(props){
  return(
    <>
      <input ref={props.reff} type="text" id={`${props.id}`} defaultValue={props.defValue} onChange={props.getValue} className={`form__input form__input_${props.id} popup__input`} placeholder={`${props.placeholder}`} required minLength="2" />
      <span className={`form__input-error ${props.id}-error`}></span>
    </>
  )
}

export default Input;