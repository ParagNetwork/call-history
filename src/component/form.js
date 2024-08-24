import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../src/index.css";
import Bg from '../../src/image/test.jpeg';
import Back from '../../src/image/back.jpeg';
const validationSchema = Yup.object({
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const FormComponent = () => {
  const history = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("phone", values.phone);
    localStorage.setItem("email", values.email);

    var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
    win.focus();
    history("/dashboard");
  };
  // useEffect(() => {

    
  // }, []);

  return (
    <>
    <div className="form-container">
      <h2>Get call history of any number</h2>
      <Formik
        initialValues={{ phone: "", email: "", country: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="form-group">
              <label>Phone Number</label>
              <PhoneInput
                country={"in"}
                value={values.phone}
                onChange={(phone) => setFieldValue("phone", phone)}
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

     
    </div>
    <div>
    <div className="img-container">
        <div className="img-grid">
          <img src={Bg} alt="phone" />
          <img src={Back} alt="phone" />
        </div>
      </div>
    </div>
    </>
  );
};

export default FormComponent;
