import React from "react";

const SelectList = ({ label, name, onChange, value, options }) => {
  const selectOptions = options.map(option => {
    return (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    );
  });
  // {selectedValue === option.value}
  return (
    <div className="form-group">
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
