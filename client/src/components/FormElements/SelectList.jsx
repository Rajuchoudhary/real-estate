import React from "react";

const SelectList = ({ classes, label, name, onChange, value, options }) => {
  const selectOptions = options.map(option => {
    return (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <div className={`form-group ${classes}`}>
      <label htmlFor={name}>{label}</label>
      <select
        className="form-control"
        onChange={onChange}
        value={value}
        name={name}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default SelectList;
