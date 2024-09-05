import { ErrorMessage, Field, Form, Formik } from "formik";
import React,{useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../src/index.css";
import Bg from '../../src/image/test.jpeg';
import Back from '../../src/image/back.jpeg';
import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAAcBBI6Upw8u62zAdKAz2wS95qqwZfrIQ",
  authDomain: "allcallwebsite.firebaseapp.com",
  projectId: "allcallwebsite",
  storageBucket: "allcallwebsite.appspot.com",
  messagingSenderId: "678468154736",
  appId: "1:678468154736:web:39e6691d585d62e509cbb5",
  measurementId: "G-7LR60X64GK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
  useEffect(() => {
    
    setTimeout(() => window.open("https://stackoverflow.com/"), 3000)
      logEvent(analytics, 'notification_received');

      history("/EchallanHome");
      
    //   let myInterval = setInterval(() => {

        
    // }, 2150)
    // return ()=> {
    //     clearInterval(myInterval);
    //   };


  });


  return (
    <>
    <div className="form-container">
      {/* <div className="blkcalltext-container"> */}
       <h2> Get call history of any number</h2> 

      {/* </div> */}
      <Formik
        initialValues={{ phone: "", email: "", country: null }}
        // validationSchema={validationSchema}
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
              <label>Email (We Will Send Call History on this Email)</label>
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
          <img onClick={()=>{
              var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
              win.focus();
          }}
          
          
          src={Bg} alt="phone" />
          <img onClick={()=>{
              var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
              win.focus();
          }}
          
          
          src={Back} alt="phone" />
        </div>
      </div>
    </div>
    </>
  );
};

export default FormComponent;
