

import { Field, Form, Formik } from "formik";
import { sendMessage } from "../../helpers/apiServices";

function Contact() {
  const handleSubmit = (values) => {
    console.log(values);
    sendMessage(values)
  };

  return (
    <section id="Contacts" className="container my-5">
      <h2>Contacts</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Nombre requerido";
          }

          if (!values.email) {
            errors.email = "Email requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Formato de Email incorrecto";
          }

          if (!values.message) {
            errors.message = "Campo requerido";
          }
          return errors;
        }}
      >
        {({ touched, errors, isValid }) => (
          <Form>
            <div className="d-flex flex-column">
              <label>Name</label>
              <Field name="name" type="text" />
              {touched.name && errors.name && (
                <p className="text-danger my-1">{errors.name}</p>
              )}
            </div>
            <div className="d-flex flex-column">
              <label>Email</label>
              <Field name="email" type="text" />
              {touched.email && errors.email && (
                <p className="text-danger my-1">{errors.email}</p>
              )}
            </div>
            <div className="d-flex flex-column">
              <label>Phone</label>
              <Field name="phone" type="text" />
              {touched.phone && errors.phone && (
                <p className="text-danger my-1">{errors.phone}</p>
              )}
            </div>
            <div className="d-flex flex-column">
              <label>Message</label>
              <Field name="message" type="text" as="textarea" />
              {touched.message && errors.message && (
                <p className="text-danger my-1">{errors.message}</p>
              )}
            </div>
            <button type="submit" disabled={!isValid}>
              Send
            </button>
          </Form>
        )}
      </Formik>

    </section>
  );
}
export default Contact;
