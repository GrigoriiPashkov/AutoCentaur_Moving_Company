import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "../../styles/contactus.css";

const Contactus = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          errorMsg = "First Name is required";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = "Email is invalid";
        }
        break;
      case "lastName":
        if (!value.trim()) {
          errorMsg = "Last Name is required";
        }
        break;
      case "mobilePhone":
        if (!value.trim()) {
          errorMsg = "Mobile Phone is required";
        }
        break;
      case "movingDate":
        if (!value.trim()) {
          errorMsg = "Moving Date is required";
        }
        break;
      case "movingFrom":
        if (!value.trim()) {
          errorMsg = "Moving From is required";
        }
        break;
      case "movingTo":
        if (!value.trim()) {
          errorMsg = "Moving To is required";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (Object.values(errors).every((msg) => msg === "")) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current.reset();
            setMessage("Your request has been sent successfully!");
            setErrors({});
            setTimeout(() => setMessage(""), 5000);
          },
          (error) => {
            console.log(error.text);
            setMessage("Failed to send the request.");

            setTimeout(() => setMessage(""), 5000);
          }
        );
    } else {
      setMessage("Please correct the errors before submitting.");

      setTimeout(() => setMessage(""), 5000);
    }
  };
  return (
    <section id="contacts" className="section">
      <div className="content-title">
        <h2 className="content-heading">
          Reach Out to Start Your Smooth Move!
        </h2>
      </div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="name-fields">
          <div className="input-wrapper">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              autoComplete="given-name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              autoComplete="family-name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
        </div>

        <div className="contact-fields">
          <div className="input-wrapper">
            <input
              type="tel"
              name="mobilePhone"
              placeholder="Mobile Phone"
              required
              autoComplete="tel"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobilePhone && (
              <div className="error">{errors.mobilePhone}</div>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="input-wrapper">
            <input
              type="date"
              name="movingDate"
              placeholder="Moving Date (MM/DD/YYYY)"
              required
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.movingDate && (
              <div className="error">{errors.movingDate}</div>
            )}
          </div>
        </div>

        <div className="address-fields">
          <div className="input-wrapper">
            <input
              type="text"
              name="movingFrom"
              placeholder="Moving From"
              required
              autoComplete="address-line1"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.movingFrom && (
              <div className="error">{errors.movingFrom}</div>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              name="movingTo"
              placeholder="Moving To"
              required
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.movingTo && <div className="error">{errors.movingTo}</div>}
          </div>
        </div>

        <textarea
          name="details"
          placeholder="List of Items"
          required
          autoComplete="off"
        ></textarea>
        <button type="submit" value="Send" className="submit-button">
          Submit
        </button>
      </form>
      {message && (
        <div className={`form-message ${message ? "form-message-active" : ""}`}>
          {message}
        </div>
      )}
    </section>
  );
};
export default Contactus;
