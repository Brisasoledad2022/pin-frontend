import { Field, Form, Formik } from "formik";

function Contact() {
  return (
    <section id="Contacts" className="container my-5">
      <h2>Contacts</h2>
      <Formik
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
        {({ values, touched, errors }) => (
          <Form>
            <div className="d-flex flex-column">
              <label>Nombre</label>
              <Field name="name" type="text" />
              {touched.name && errors.name && (
                <p className="text-danger my-1">{errors.name}</p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
export default Contact;
