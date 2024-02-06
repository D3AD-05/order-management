import React, { useState } from "react";
import "./FormInput.css";
function FormInput(props) {
  const { label, name, onChange, id, errorMessage, ...inputProps } = props;
//   const [focused, setFocused] = useState(false);
//   const handleFocus = (e) => {
//     setFocused(true);
//   };

  return (
    <div className="input-field">
      <i className={""}></i>
      <input
        name={props.name}
        value={props.value}
        {...inputProps}
        onChange={onChange}
        // onBlur={handleFocus}
        // onFocus={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        // focused={focused.toString()}
      />
      <span className="erorMsg">{errorMessage}</span>
    </div>
  );
}

export default FormInput;