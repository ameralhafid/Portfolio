import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const serviceID = "service_rxv95bx";
  const templateID = "template_nnnqw6p";
  const userID = "user_ICffHtKJ6iAAUIMyhb9Nm";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        contact_number: data.contact_number,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  for="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="user_name"
                  {
                    ...register('test', {
                      required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                for="number"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="number"
                  {
                    ...register('test', {
                      required: "Please add your phone number",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  for="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {
                    ...register('test', {
                      required: "Please provide you email",
                      pattern: {
                        value: 50,
                        message: "invalid Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  for="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {
                    ...register('test', {
                      required: "OOPS, you forget to add the subject.",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                 for="description"
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                  {
                    ...register('test', {
                      required: "Please describe shortly your project needs...",
                    })
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              
              <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
