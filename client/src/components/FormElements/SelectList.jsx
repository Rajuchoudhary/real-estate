import React from "react";

const SelectList = ({
  error,
  classes,
  label,
  name,
  onChange,
  value,
  options
}) => {
  const selectOptions = options.map(option => {
    return (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    );
  });
  let msg = "";
  if (error) {
    msg = error ? "is-invalid" : "";
  }

  return (
    <div className={`form-group ${classes}`}>
      <label htmlFor={name}>{label}</label>
      <select
        className={`form-control ${msg}`}
        onChange={onChange}
        value={value}
        name={name}
      >
        {selectOptions}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default SelectList;
