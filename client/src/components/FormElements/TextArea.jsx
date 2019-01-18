import React from "react";

const TextArea = ({ classes, name, label, placeholder, onChange, value }) => {
  return (
    <div className={`form-group ${classes}`}>
      <label htmlFor={name}>{label}</label>
      <textarea
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default TextArea;
