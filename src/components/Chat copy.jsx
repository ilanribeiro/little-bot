import React, { useEffect, useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import api from '../services/api';

const ChatFormik = () => {
  const [ask, setAsk] = useState([]);
  const [flagMessage, setFlagMessage] = useState(false);


  useEffect(() => {
    api.get('/messages')
      .then((response) => setAsk(response.data));

    setTimeout (() => {
      setFlagMessage(true);
     }, 2500);
  }, [])

  const renderMessage1 = () => {
    if(!ask || !flagMessage) {
      return (
        <p>digitando...</p>
      )
    }

    return (
      <div className="card">
        <label htmlFor="fullName">{ ask[0].message }</label>
        <Field name="fullName" type="text" className="field"/>
        <button type="button">enviar</button>
        <ErrorMessage name="fullName" className="errorMessage"/>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Formik
        initialValues={{fullName: '', email: ''}}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(15, 'Deve ter 15 caracteres ou menos')
            .required('Este campo é necessário'),
          email: Yup.string()
            .email('Email informado é inválido')
            .required('Este campo é necessário'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400)
        }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              {renderMessage1()}

              {formik.touched.fullName && !formik.errors.fullName ? (
                <div className="card">
                  <label htmlFor="city">{ ask[1].message }</label>
                  <Field name="city" type="text" className="field"/>
                  <button type="button">enviar</button>
                  <ErrorMessage name="city" className="errorMessage"/>
                </div>
              ) : null}

              {formik.touched.city && !formik.errors.city ? (
                <div className="card">
                  <label htmlFor="birth">Que satisfação. { ask[2].message }</label>
                  <Field name="birth" type="date" className="field"/>
                  <button type="button">enviar</button>
                  <ErrorMessage name="birth" className="errorMessage"/>
                </div>
              ) : null}

              {formik.touched.birth && !formik.errors.birth ? (
                <div className="card">
                  <label htmlFor="email">{ ask[3].message }</label>
                  <Field name="email" type="email" className="field"/>
                  <button type="button">enviar</button>
                  <ErrorMessage name="email" className="errorMessage"/>
                </div>
              ) : null}

              {formik.touched.email && !formik.errors.email ? (
                <div className="card">
                  <label htmlFor="rating">{ ask[4].message }</label>
                  <Field name="rating" type="number" min="0" step="1" max="5" className="field"/>
                  <ErrorMessage name="rating" className="errorMessage"/>
                  <button type="submit">enviar</button>
                </div>
              ) : null}
              
            </form>
          )}
      </Formik>
    </div>
  );
};

export default ChatFormik;