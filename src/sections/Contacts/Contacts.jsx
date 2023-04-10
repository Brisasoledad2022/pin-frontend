import React from "react";
import { Field, Form, Formik } from "formik";
import image3 from "../../assets/fondo2.webp";
import { sendMessage } from "../../helpers/apiServices";

export default function Contact() {
  const handleSubmit = (values) => {
    try {
      sendMessage({
        nombre: values.Name,
        correo: values.Email,
        telefono: values.Phone,
        mensaje: values.Message,
      })
    } catch (error) {
      alert(error);
    }
  };

  const fields = [
    {
      name: "Name",
      type: "text",
    },
    {
      name: "Email",
      type: "text",
    },
    {
      name: "Phone",
      type: "text",
    },
    {
      name: "Message",
      type: "text",
    },
  ];

  return (
    <div className="d-flex w-100 vh-100 position-relative" id="Contact">
      <div className="d-flex flex-column justify-content-center align-items-start col-8 bg-white pt-5 position-relative pb-5">
        <div className="d-flex flex-column align-items-start font-poppins mb-5 w-50 position-relative start-15">
          <h1 className="m-0 fw-bold text-black">Get in touch</h1>
          <h1 className="m-0 fw-bold text-orange neon">
            We're waiting
            <br /> your reservation!!!
          </h1>
        </div>

        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            Name: "",
            Email: "",
            Phone: "",
            Message: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.Name) {
              errors.Name = "Name required!";
            }

            if (!values.Email) {
              errors.Email = "Email required!";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(values.Email)
            ) {
              errors.Email = "Please enter a valid email";
            }

            if (!values.Message) {
              errors.Message = "Message required!";
            }
            
            if (!values.Phone) {
               errors.Phone = "Phone required!";
             }

            return errors;
          }}
        >
          {({ touched, errors, isValid }) => (
            <Form className="w-50 position-relative start-15">
              <div className="d-flex flex-column w-100">
                {fields.map(({ name, type }) => (
                  <div className="my-3 w-100" key={name}>
                    <Field
                      placeholder={name}
                      className="input-form bg-white py-2 w-100"
                      name={name}
                      type={type}
                      as={name === "Message" ? "textarea" : null}
                    />
                    {touched[name] && errors[name] && (
                      <p className="my-1 text-red-400">{errors[name]}</p>
                    )}
                  </div>
                ))}
                <button
                  className={`${
                    isValid
                      ? "bg-orange text-light cursor-pointer"
                      : "bg-gray-200 text-gray-100 cursor-not-allowed"
                  } border-0 col-3 rounded-pill py-3 px-4 mt-4`}
                  type="submit"
                  disabled={!isValid}
                >
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="col-4 bg-orange"></div>
      <img
        src={image3}
        alt="Bar image"
        className="vw-30 position-absolute top-50 end-0 translate-middle"
      />
    </div>
  );
}
