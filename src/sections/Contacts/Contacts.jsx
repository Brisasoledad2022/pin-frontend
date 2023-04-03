import React, {useState, useEffect} from 'react';

import { Field, Form, Formik } from "formik";
import { sendMessage } from "../../helpers/apiServices";

const Contact = () => {
  const initialValues = {
    name : '',
    email : '',
    phone : '',
    message : ''
  }

  const keys = Object.keys(initialValues);
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(()=>{
    console.log(formValues);
    
  },[formValues])


  const handleSubmit = () => {
    sendMessage(formValues);
  };

  const validate = () => {
    const errors = {};
    if(!formValues.name) errors.name='Nombre requerido'
    if(!formValues.email) {
      errors.email='Email requerido'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(formValues.email)){
      errors.email = "Formato de Email incorrecto"
    }
    if (!formValues.message) errors.message = "Campo requerido"
    return errors;
  }

  return (
    <section id="Contact" className="container my-5">
      <h2>Contact</h2>
      <Formik
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ touched, errors, isValid}) => (
          <Form>
            {keys.map(key => (
              <div className="d-flex flex-column" key={key}>
                <label>{key[0].toUpperCase()+key.slice(1)}</label>
                <Field 
                  name={key} 
                  onChange={e => setFormValues({...formValues, [key]: e.target.value })}
                />
                {touched[key] && errors[key] && <p className="text-danger my-1">{errors[key]}</p>}
              </div>
            ))}
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
