import React from "react";

class Input extends React.Component {
  restrictSpace = e => {
    if (e.currentTarget.value.startsWith(" ")) {
      e.currentTarget.value = "";
    }
  };

  render() {
    const {
      classes,
      label,
      placeholder,
      name,
      onChange,
      value,
      validate,
      type = "text"
    } = this.props;

    return (
      <div className={`form-group ${classes}`}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          onKeyUp={validate}
          onKeyDown={this.restrictSpace}
          onFocus={validate}
        />
      </div>
    );
  }
}

export default Input;
