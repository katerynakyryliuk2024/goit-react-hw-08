import css from "./RegistrationForm.module.css";
import { Formik, Form, Field } from "formik";
export default function RegistrationForm() {
    return (
      <Formik
    initialValues={{
      name: "",
      email: "",
      password: "",
      }}
      onSubmit={}
  >
      <Form className={css.form} autoComplete="off">
                <label className={css.label}>
                    Username
                    <Field type='text' name='name' />
                </label>
                <label className={css.label}>
                    Email
                    <Field type='email' name='email'/>
                </label>
      </Form>
  </Formik>
  )
  
}
