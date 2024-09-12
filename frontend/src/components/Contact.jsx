import React from "react";

export default function Contact() {
  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4">
      <h2 className="text-center p-2">Contact Me</h2>
      <p className="text-center p-2">
        If you have any questions or would like to get in touch, please fill out
        the form below. I'll get back to you as soon as possible.
      </p>
      <form className="w-75 d-flex flex-column gap-3 p-2">
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          required
        />
        <textarea
          className="form-control"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      <div className="bg-body-tertiary contact-info p-3 text-center">
        <h5>Contact Information</h5>
        <p>Email: info@yourdomain.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Steamboat Springs, CO</p>
      </div>
    </div>
  );
}
