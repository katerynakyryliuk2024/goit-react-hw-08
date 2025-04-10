import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoCapitalize="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password"></Field>
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
