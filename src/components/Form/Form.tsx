import React, { useState } from "react";
import "./styles.css";
import StateData from "../../data/states.json";
import DocumentData from "../../data/document.json";
// import { sendMessagedocument } from "../../services/contactService";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "Formik";

const Contact = () => {
  const [isVerified, setVerified] = useState(true);
  function onChange(response: any) {
    if (response) {
      setVerified(true);
    }
  }

  const formInitialValues = {
    name: "",
    phone: "",
    state: "",
    document: "",
    documentId: "",
    pincode: "",
    address: "",
    district: "",
  };
  return (
    <div className="form-container">
      <div className="">
        <h3 className="title"> GSP</h3>
        <p className="sub-title"> Feel Free to Connect</p>
      </div>

      <Formik
        initialValues={formInitialValues}
        // validate={(values) => {
        //   const errors: any = {};
        //   if (!values.name) {
        //     errors.name = "Name is Required";
        //   } else if (!/^[A-Za-z]*$/.test(values.name)) {
        //     errors.name =
        //       "First Name should not contain special characters or numbers.";
        //   }
        //   if (!values.state) {
        //     errors.state = "State is Required";
        //   }

        //   if (!values.district) {
        //     errors.district = "District is Required";
        //   } else if (!/^[A-Za-z]*$/.test(values.district)) {
        //     errors.district =
        //       "District not contain special characters or numbers.";
        //   }

        //   if (!values.document) {
        //     errors.document = "Document is Required";
        //   }
        //   if (!values.documentId) {
        //     errors.documentId = "DocumentId is Required";
        //   } else if (!/^[A-Za-z0-9]*$/.test(values.documentId)) {
        //     errors.documentId =
        //       "Document should contain only numbers and alpabets.";
        //   }

        //   if (!values.phone) {
        //     errors.phone = "phone is Required";
        //   } else if (!/^[1-9][0-9]{9}$/i.test(values.phone)) {
        //     errors.phone = "Invalid phone Number";
        //   }

        //   if (!values.pincode) {
        //     errors.pincode = "pincode  is Required";
        //   } else if (!/^[0-9]{6}$/i.test(values.pincode)) {
        //     errors.pincode = "Invalid Pincode";
        //   }

        //   if (!values.address) {
        //     errors.address = "Address   is Required";
        //   }

        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          console.log(values);
          // resetForm();
        }}
      >
        {({
          values,
          isSubmitting,
          isValid,
          errors,
          touched,
          setFieldValue,
        }) => (
          <div className="form-container-inner blur">
            <Form className=" form-training w-[300px] sm:w-[600px] lg:w-[800px]">
              <div className="input-container">
                <Field
                  className="field"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="span" className="error" />
              </div>
              <div className="input-container">
                <Field
                  className="field"
                  type="text"
                  name="district"
                  placeholder="District"
                  d
                />
                <ErrorMessage
                  name="district"
                  component="span"
                  className="error"
                />
              </div>
              <div className="input-container">
                {/* <label htmlFor="phone">Phone</label> */}
                <Field as="select" className="field" name="document">
                  <option value="">Select Document ...</option>
                  {DocumentData.map(({ title }: any) => (
                    <option value={title}>{title}</option>
                  ))}
                </Field>
                <ErrorMessage name="document" component="div" className="error" />
              </div>

              <div className="input-container">
                <Field
                  className="field"
                  type="text"
                  name="documentId"
                  placeholder="Document ID"
                />

                <ErrorMessage
                  name="documentId"
                  component="div"
                  className="error"
                />
              </div>

              <div className="input-container">
                <Field
                  className="field"
                  type="text"
                  rows="4"
                  name="phone"
                  placeholder="phone"
                />

                <ErrorMessage name="phone" component="div" className="error" />
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
                  as="textarea"
                  name="address"
                  className="textarea"
                  rows={6}
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error"
                />
              </div>

              {/* 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI is for testing only , create one for your own site  */}

              <div className=" flex justify-center flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="submit"
                  className="px-6
                  py-2.5
                  bg-purple-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-purple-700 hover:shadow-lg
                  focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-purple-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                  ml-1"
                  disabled={isSubmitting}
                  style={{
                    color: "white",
                  }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <div className="flex flex-row gap-1"> SEND</div>
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
