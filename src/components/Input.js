import React from "react";

const Input = React.forwardRef(function Inputt(
  { id, value, getValue, placeholder, isRef },
  ref
) {

  return isRef ? (
    <>
      <input
        ref={ref}
        type="text"
        id={id}
        className={`form__input form__input_${id} popup__input`}
        placeholder={placeholder}
        required
        minLength="2"
      />
      <span className={`form__input-error ${id}-error`}></span>
    </>
  ) : (
    <>
      <input
        type="text"
        id={id}
        value={value || ''}
        onChange={getValue}
        className={`form__input form__input_${id} popup__input`}
        placeholder={placeholder}
        required
        minLength="2"
      />
      <span className={`form__input-error ${id}-error`}></span>
    </>
  );
});

export default Input;
