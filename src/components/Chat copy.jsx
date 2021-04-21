import React, { useEffect, useRef, useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Icon from '@material-ui/core/Icon';
import FormRatings from 'form-ratings';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { cities } from '../services/cities';
import api from '../services/api';

const ChatFormik = () => {
  const messageEl = useRef(null);
  const [ask, setAsk] = useState([]);
  const [flagMessage, setFlagMessage] = useState(false);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, []);

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
        <div className="askBot">
          <label htmlFor="fullName" className="bot" >{ ask[0].message }</label>
        </div>
        <div className="answer">
          <Field id="standard-basic" name="fullName" type="text" className="field"/>
          <Icon className="button">send</Icon>
        </div>
        <ErrorMessage name="fullName" className="errorMessage"/>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Formik
        initialValues={{
          fullName: '',
          city: '',
          birth: '',
          email: '',
          rating: 0
        }}
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
              <div className="chat-container" ref={messageEl}>
                {renderMessage1()}

                {formik.touched.fullName && !formik.errors.fullName ? (
                  <div className="card">
                    <div className="askBot">
                      <label htmlFor="city">{`Que satisfação ${formik.values.fullName}!`} { ask[1].message }</label>
                    </div>
                    <div className="answer">
                      <Field name="city" as="select" type="text" className="field">
                        <option name="city" value="none"></option>
                        {cities
                          .map(combo => combo.cidades
                          .map((city, index) => (
                          <option
                            name="city"
                            value={`${city}, ${combo.sigla}`}
                            key={index}
                            className="selectCities"
                          >
                            {`${city} - ${combo.sigla}`}
                          </option>
                        )))}
                      </Field>
                      <Icon type="button">send</Icon>
                    </div>
                    <ErrorMessage name="city" className="errorMessage"/>
                  </div>
                ) : null}

                {formik.touched.city && !formik.errors.city ? (
                  <div className="card">
                    <div className="askBot">
                      <label htmlFor="birth">{ ask[2].message }</label>
                    </div>
                    <div className="answer">
                      <DatePicker
                        name="birth"
                        dateFormat="dd/MM/yyyy"
                        selected={formik.values.birth}
                        className="field"
                        onChange={date => {
                          formik.setFieldValue('birth', date);
                          formik.touched.birth = true;
                        }}
                      />
                      <Icon type="button">send</Icon>
                    </div>
                    <ErrorMessage name="birth" className="errorMessage"/>
                  </div>
                ) : null}

                {formik.touched.birth && !formik.errors.birth ? (
                  <div className="card">
                    <div className="askBot">
                      <label htmlFor="email">{ ask[3].message }</label>
                    </div>
                    <div className="answer">
                      <Field name="email" type="email" className="field"/>
                      <Icon type="button">send</Icon>
                    </div>
                    <ErrorMessage name="email" className="errorMessage"/>
                  </div>
                ) : null}

                {formik.touched.email && !formik.errors.email ? (
                  <div className="card">
                    <div className="askBot">
                      <label htmlFor="rating">{ ask[4].message }</label>
                    </div>
                    <div className="answer starField">
                      <Field name="rating" as={FormRatings} />
                    </div>
                    <ErrorMessage name="rating" className="errorMessage"/>
                    <button type="submit" className="saveButton">
                      Salvar
                    </button>
                  </div>
                ) : null}
              </div>
            </form>
          )}
      </Formik>
    </div>
  );
};

export default ChatFormik;