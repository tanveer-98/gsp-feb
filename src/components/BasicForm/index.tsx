import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "Formik";
import StateData from "../../data/states.json";
import DocumentData from "../../data/document.json";

import "./styles.css";

interface IErrors {
  name: string;
}

const MyTextArea = (props: any) => {
  return (
    <textarea
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      rows={props.rows}
      cols={props.cols}
      style={props.style}
    />
  );
};

interface IInitialValues {
  name: string;
  phone: string;
  state: string;
  document: string;
  documentId: string;
  pincode: string;
  address: string;
  district: string;
}
const Basic = () => {
  const [data, setData] = useState();

  return (
    <Formik
      initialValues={{
        name: "", //
        phone: "", //
        state: "", //
        document: "",
        documentId: "", //
        pincode: "",
        address: "",
        district: "",
      }}
      validate={(values) => {
        const errors: IErrors = { name: "" };
        if (!values.name) {
          errors.name = "Required";
        } else if (!/^[A-Za-z ]{5,40}$/i.test(values.name)) {
          errors.name = "Invalid Name";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("clicked");
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
          <div className="input-container">
            {/* <label htmlFor="name">Name</label> */}
            <Field type="text" name="name" placeholder="Enter Name" />

            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="input-container">
            {/* <label htmlFor="phone">Phone</label> */}
            <Field type="text" name="phone" placeholder="Enter Phone Number" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <div className="input-container">
            {/* <label htmlFor="phone">Phone</label> */}
            <Field as="select" className="field" name="document">
              <option value="none">Select Document ...</option>
              {DocumentData.map(({ title }: any) => (
                <option value={title}>{title}</option>
              ))}
            </Field>
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <div className="input-container">
            {/* <label htmlFor="phone">Phone</label> */}
            <Field
              type="text"
              name="documentId"
              placeholder="Enter Document ID"
            />
            <ErrorMessage name="documentId" component="div" className="error" />
          </div>
          <div className="input-container">
            {/* <label htmlFor="phone">Phone</label> */}
            <Field as="select" className="field" name="state">
              <option value="none">Select State ...</option>
              {StateData.map((state) => (
                <option value={state.key}>{state.key}</option>
              ))}
            </Field>
            <ErrorMessage name="state" component="div" className="error" />
          </div>
          <div className="input-container">
            {/* <label htmlFor="phone">Phone</label> */}
            <Field
              type="text"
              name="district"
              placeholder="Enter District Name"
            />
            <ErrorMessage name="district" component="div" className="error" />
          </div>

          <div className="input-container">
            {/* <label htmlFor="phone">Phone</label> */}
            <Field type="text" name="pincode" placeholder="Enter Pincode" />
            <ErrorMessage name="pincode" component="div" className="error" />
          </div>
          <div className="input-container">
            {/* <label htmlFor="phone">Phone</label> */}
            <Field as="textarea" name="address" className="textarea" />
            <ErrorMessage name="address" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Basic;
