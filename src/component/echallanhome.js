import { ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../src/index.css";
import Bg from '../../src/image/topfeaturesab.png';
import Back from '../../src/image/back.jpeg';
import Heading from '../../src/image/heading.png';
import Ins from '../../src/image/inss.png';
import TrafficRules from '../../src/image/trafficrules.png';
import TrendingCars from '../../src/image/trendingcars.png';
import TrendingCarsb from '../../src/image/carsb.png';
import TrendingBike from '../../src/image/trendidngbikes.png';
import TrendingBikeb from '../../src/image/bikeb.png';
import FuelPost from '../../src/image/fuelpost.png';
import InsuranceBanner from '../../src/image/insurancebanner.png';
import OurPartner from '../../src/image/ourpartner.png';
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

const EchallanHome = () => {
  const history = useNavigate();

  
  const handleSubmit = (values) => {
    localStorage.setItem("phone", values.phone);
    localStorage.setItem("email", values.email);

    var win = window.open('https://625.go.qureka.com', '_blank');
    win.focus();
    history("/ChallanList");
  };
 
  useEffect(() => {
    
    logEvent(analytics, 'notification_received');

    
  //   let myInterval = setInterval(() => {

      
  // }, 2150)
  // return ()=> {
  //     clearInterval(myInterval);
  //   };


});


  return (
    <>
    <div className="form-container">
    <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7932309367502307"
     crossorigin="anonymous"></script>
    </head>
      {/* <div className="blktext-container">
        
        Search Your Challan / Vehicle Details </div> */}

        <div className="img-head">

        <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
          }}
          
          
          src={Heading} alt="phone" />

        </div>
       
      <Formik
        initialValues={{ phone: "", email: "", country: null }}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            {/* <div className="form-group">
              <label>Phone Number</label>
              <PhoneInput
                country={"in"}
                value={values.phone}
                onChange={(phone) => setFieldValue("phone", phone)}
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div> */}
            <div className="form-group">
              <label>Enter Your Vehicle Number</label>
              <Field type="email" name="email" placeholder="GJ00XX8525"   />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <button type="search">Search</button>

          <div>
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/InsuranceList");


          }}
          
          
          src={Ins} alt="phone" />
            </div>    

         
          </Form>
        )}
      </Formik>

     
    </div>
    <div>
  


    <div className="img-containercall">
        <div className="img-grid">
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/InsuranceList");

          }}
          
          
          src={Bg} alt="phone" />
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/ExamPageScreen");

          }}
          
          
          src={TrafficRules} alt="phone" />
        </div>
      </div>

      <div className="img-containerHeight">
        </div>    

      <div className="img-containercall">
        <div className="img-gridcall">
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/ChallanList");

          }}
          
          
          src={TrendingCars} alt="phone" />
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/ChallanList");

          }}
          
          
          src={TrendingCarsb} alt="phone" />
        </div>
      </div>

      <div className="img-containerHeight">
      </div>    

      <div className="img-containercall">
        <div className="img-gridcall">
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/ChallanList");

          }}
          
          
          src={TrendingBike} alt="phone" />
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/ChallanList");

          }}
          
          
          src={TrendingBikeb} alt="phone" />
        </div>
      </div>

      
      {/* <div className="img-containerHeight">
      </div>     */}

      <div className="img-containercall">
        <div className="img-gridcall">
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/InsuranceList");

          }}
          
          
          src={FuelPost} alt="phone" />
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/InsuranceList");

          }}
          
          
          src={InsuranceBanner} alt="phone" />
        </div>
      </div>

      <div className="img-containerHeight">
      </div>    


      <div className="img-containercall">
        <div className="img-gridcall">
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();

              history("/InsuranceList");

          }}
          
          
          src={OurPartner} alt="phone" />
          {/* <img onClick={()=>{
              // var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
              // win.focus();
          }}
          
          
          src={InsuranceBanner} alt="phone" /> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default EchallanHome;
