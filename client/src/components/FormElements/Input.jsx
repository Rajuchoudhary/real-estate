import React from "react";

const Input = ({
  label,
  placeholder,
  name,
  onChange,
  value,
  type = "text"
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
