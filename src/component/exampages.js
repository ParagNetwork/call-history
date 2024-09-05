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
import PaidChallan from '../../src/image/paidchallana.png';

import PendingChallan from '../../src/image/pending.png';
import questionbanner from '../../src/image/questionbanner.png';






const validationSchema = Yup.object({
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ExamPageScreen = () => {
  const history = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("phone", values.phone);
    localStorage.setItem("email", values.email);

    var win = window.open('https://625.go.qureka.com', '_blank');
    win.focus();
    history("/EchallanHome");
  };
 

  return (
    <>
    <div className="form-container">
      {/* <div className="blktext-container">
        
        Search Your Challan / Vehicle Details </div> */}

      
       
      <Formik
        initialValues={{ phone: "", emai: "", country: null }}
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
              {/* <label>2 Challans Issued By RTO.</label> */}
              {/* <Field type="email" name="email" placeholder="GJ00XX8525"   />
              <ErrorMessage name="email" component="div" className="error" /> */}
            </div>

            {/* <button type="search">Search</button> */}

          <div>
          <img onClick={()=>{

              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/InsuranceList");

          }}
          
          
          src={questionbanner} alt="phone" />
            </div>    

            {/* <div>
          <img onClick={()=>{
              // var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
              // win.focus();
          }}
          
          
          src={PendingChallan} alt="phone" />
            </div>     */}

         
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
              history("/InsuranceList");

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
              history("/InsuranceList");

          }}
          
          
          src={TrendingCars} alt="phone" />
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/InsuranceList");

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
              history("/InsuranceList");

          }}
          
          
          src={TrendingBike} alt="phone" />
          <img onClick={()=>{
              var win = window.open('https://625.go.qureka.com', '_blank');
              win.focus();
              history("/InsuranceList");

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

export default ExamPageScreen;
