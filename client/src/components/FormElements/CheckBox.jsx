import React from "react";

const CheckBox = ({ id, label, name, checked, onChange }) => {
  return (
    <div className="custom-control custom-checkbox  col-md-4 offset-1">
      <input
        type="checkbox"
        className="custom-control-input"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="custom-control-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
