import React from "react";

const LoginPageUI = props => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-4 col-md-6 col-sm-8 offset-md-4 offset-sm-2 border p-3 pb-4">
          <form onSubmit={props.onFormSubmit}>
            <div className="title text-center display-4">Login</div>
            {props.children}
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPageUI;
