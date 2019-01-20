import React from "react";

const TextArea = ({
  error,
  classes,
  name,
  label,
  placeholder,
  onChange,
  value
}) => {
  let msg = "";
  if (error) {
    msg = error ? "is-invalid" : "";
  }
  return (
    <div className={`form-group ${classes}`}>
      <label htmlFor={name}>{label}</label>
      <textarea
        className={`form-control ${msg}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default TextArea;
