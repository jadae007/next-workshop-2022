import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";

type Props = {};

export default function register({}: Props) {
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(value) => alert(JSON.stringify(value))}
      >
        {({ handleChange, values,handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="username"
              onChange={handleChange}
              placeholder="username"
              value={values.username}
            />
            <br />
            <input
              type="text"
              id="password"
              onChange={handleChange}
              placeholder="password"
              value={values.password}
            />
            <br />
            <button type="submit">Register</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
