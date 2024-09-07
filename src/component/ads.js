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


const validationSchema = Yup.object({
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Adstxt = () => {
  const history = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("phone", values.phone);
    localStorage.setItem("email", values.email);

    // var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
    // win.focus();
    history("/EchallanHome");
  };
 

  return (
    <>
        <h6>google.com, pub-7932309367502307, DIRECT, f08c47fec0942fa0</h6>
    </>
  );
};

export default Adstxt;
