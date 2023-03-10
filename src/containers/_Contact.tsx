import emailjs from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import MaskedInput from 'react-text-mask';

import contactValidadeSchema from '../schema/ContactSchema';

export function Contact() {
  const initialContactValues = {
    name: '',
    email: '',
    telephone: '',
    message: '',
  };

  return (
    <section className="contact bg-gray-200">
      <div className="contact__container container">
        <h2 className="contact__title text-center clr-gray-300 font-family-200">
          Entre em contato
        </h2>
        <Formik
          initialValues={initialContactValues}
          onSubmit={(values, { resetForm }) => {
            let templateParams = {
              form_name: values.name,
              form_telephone: values.telephone,
              form_message: values.message,
              reply_to: 'Henrique Santos Santana',
            };

            emailjs
              .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
              )
              .then((response) => console.log(response))
              .catch((error) => console.log(error));

            resetForm({ isSubmitting: true });
          }}
          validationSchema={contactValidadeSchema}
        >
          {({ errors, touched, values }) => {
            return (
              <Form className="contact__form">
                <fieldset className="d-flex align-items-center justify-center flex-dir-col">
                  <label htmlFor="name">
                    <ErrorMessage
                      className="contact__message--error d-block text-end font-family-100"
                      component="span"
                      name="name"
                    />
                    <Field
                      type="text"
                      name="name"
                      placeholder="Nome"
                      className={errors.name && touched.name && 'contact__input--error'}
                    />
                  </label>
                  <label htmlFor="email">
                    <ErrorMessage
                      className="contact__message--error d-block text-end font-family-100"
                      component="span"
                      name="email"
                    />
                    <Field
                      className={errors.email && touched.email && 'contact__input--error'}
                      type="email"
                      name="email"
                      placeholder="E-mail"
                    />
                  </label>
                  <label htmlFor="telephone">
                    <ErrorMessage
                      className="contact__message--error d-block text-end font-family-100"
                      component="span"
                      name="telephone"
                    />

                    <Field name="telephone">
                      {({ field }: any) => {
                        return (
                          <MaskedInput
                            {...field}
                            mask={[
                              '(',
                              /[0-9]/,
                              /\d/,
                              ')',
                              ' ',
                              /[0-9]/,
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                              '-',
                              /[0-9]/,
                              /\d/,
                              /\d/,
                              /\d/,
                            ]}
                            type="tel"
                            placeholder="Telefone"
                            className={
                              errors.telephone &&
                              touched.telephone &&
                              'contact__input--error'
                            }
                          />
                        );
                      }}
                    </Field>
                  </label>
                  <label htmlFor="message">
                    <ErrorMessage
                      className="contact__message--error d-block text-end font-family-100"
                      component="span"
                      name="message"
                    />
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Mensagem..."
                      className={
                        errors.message && touched.message && 'contact__input--error'
                      }
                    />
                    <span className="contact__view--length font-family-100">
                      {values.message.length}/300
                    </span>
                  </label>
                </fieldset>

                <button
                  className="btn font-family-100 weight-700"
                  type="submit"
                  data-primary
                >
                  Enviar mensagem
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}
