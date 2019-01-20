import React from "react";

class Input extends React.Component {
  restrictSpace = e => {
    if (e.currentTarget.value.startsWith(" ")) {
      e.currentTarget.value = "";
    }
  };

  render() {
    const {
      error,
      classes,
      label,
      placeholder,
      name,
      onChange,
      value,
      validate,
      type = "text"
    } = this.props;
    let msg = "";
    if (error) {
      msg = error ? "is-invalid" : "";
    }
    return (
      <div className={`form-group ${classes}`}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className={`form-control ${msg}`}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          onKeyUp={validate}
          onKeyDown={this.restrictSpace}
          onFocus={validate}
        />
        <div className="invalid-feedback">{error}</div>
      </div>
    );
  }
}

export default Input;
