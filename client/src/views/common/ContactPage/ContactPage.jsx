import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <h2 className="m-auto">Contact us</h2>

        <p className="mr-auto ml-auto mt-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within matter of hours to
          help you.
        </p>

        <div className="col-md-8 col-xl-9">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label htmlFor="name" className="">
                    Your name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label htmlFor="email" className="">
                    Your email
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label htmlFor="subject" className="">
                    Subject
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  />
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="center-on-small-only">
            <Link to="" className="btn btn-block text-white btn-primary">
              Send
            </Link>
          </div>
          <div className="status" />
        </div>

        <div className="col-md-4 col-xl-3">
          <ul className="contact-icons list-unstyled">
            <li>
              <i className="fa fa-map-marker fa-2x" />
              <p>San Francisco, CA 94126, USA</p>
            </li>

            <li>
              <i className="fa fa-phone fa-2x" />
              <p>+ 01 234 567 89</p>
            </li>

            <li>
              <i className="fa fa-envelope fa-2x" />
              <p>contact@mdbootstrap.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
