import React from "react";

const Input = React.forwardRef(function Inputt(props, ref) {
  return (
    <>
      <input
        ref={ref}
        type="text"
        id={props.id}
        value={props.value || ""}
        onChange={props.getValue}
        className={`form__input form__input_${props.id} popup__input`}
        placeholder={props.placeholder}
        required
        minLength="2"
      />
      <span className={`form__input-error ${props.id}-error`}></span>
    </>
  );
})

export default Input;
