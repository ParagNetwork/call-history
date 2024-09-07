import React, { useEffect, } from "react";
import "../../src/index.css";
import logo from '../image/logoimage.jpeg';
import { useNavigate } from "react-router-dom";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper/core";

// Import Swiper styles
// import "swiper/swiper-bundle.min.css";

// Install Swiper modules
// SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Detail = () => {
  const detail = useNavigate();

  const histories = [
    {
      id: 1,
      type: "SMS History",
      number: "76988*****",
      time: "8hr ago"
    },
    {
      id: 2,
      type: "Whatsapp History",
      number: "75432*****",
      time: "5min ago"
    },
    {
      id: 3,
      type: "Call History",
      number: "98765*****",
      time: "2hr ago"
    },
    {
      id: 4,
      type: "All History",
      number: "98765*****",
      time: "2hr ago"
    },
    {
      id: 5,
      type: "SMS History",
      number: "76988*****",
      time: "8hr ago"
    },
    {
      id: 6,
      type: "Whatsapp History",
      number: "75432*****",
      time: "5min ago"
    },
    {
      id: 7,
      type: "Call History",
      number: "98765*****",
      time: "2hr ago"
    },
    {
      id: 8,
      type: "All History",
      number: "98765*****",
      time: "2hr ago"
    },
  ];



  useEffect(() => {
    
    // setTimeout(() => window.open("https://stackoverflow.com/"), 3000)

    const timeoutID = window.setTimeout(() => {
      window.open("https://play2029.atmegame.com/online-card-games/");
  
  }, 2500);


  return () => window.clearTimeout(timeoutID );

  });
  return (
    <div className="detail-container">
       <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7932309367502307"
     crossorigin="anonymous"></script>
    </head>
      <div className="header-card ">
        <h2>Call History : Get Call Details</h2>
        <p>Unlimited access to all number</p>
        <ul>
          <li>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            Get Call Details
          </li>
          <li>
            <span role="img" aria-label="whatsapp">
              💬
            </span>{" "}
            Get WhatsApp Call Details
          </li>
          <li>
            <span role="img" aria-label="sms">
              📩
            </span>{" "}
            Get All SMS Details with History
          </li>
          <li>
            <span role="img" aria-label="all">
              🔍
            </span>{" "}
            Get All of these at one click
          </li>
        </ul>
      </div>
      <div className="history-slider">
      {/* <Swiper
      effect={'cube'}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // Set this to false to continue autoplay after interaction
        }}
        loop={true} // Add looping
       
        modules={[Autoplay, Pagination]} // Define modules in the Swiper component
      >
        {histories.map((history) => (
          <SwiperSlide key={history.id}>
            <div className="history-card bg-dark text-white p-3">
              <h2>{history.type}</h2>
              <p>{history.number}</p>
              <small>{history.time}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
      <div className="package-card gold one">
        <a onClick={async()=>{
          var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
          win.focus();
          detail("/Day")
          // try {
          //   const response = await fetch(logo);
          //   const blob = await response.blob();
          //   const file = new File([blob], 'qrcode1.png', { type: 'image/png' });
      
          //   if (navigator.share) {
          //     try {
          //       await navigator.share({
          //         title: 'Pay with Your Preferred App',
          //         text: 'Scan this QR code to pay',
          //         files: [file], // Share the image file,
              

          //       });
          //       console.log('Successfully shared');
          //     } catch (error) {
          //       console.error('Error sharing:', error);
          //     }
          //   } else {
          //     alert('Web Share API is not supported in your browser.');
          //   }
          // } catch (error) {
          //   console.error('Error fetching image:', error);
          // }
                //  href="upi://pay?pa=7874763003@okbizaxis&pn=KANAIYA%AGRO&mc=BCR2DN6T6OFKTJLX&tid=TXN123456789&cu=INR&am=1"

        }  
        }
        // upi://pay?pa=${payeeVPA}&pn=${payeeName}&mc=${merchantCode}&tid=${transactionId}&cu=INR&am=${amount}&url=https://yourwebsite.com
        // href="upi://pay?pa=7874763003@okbizaxis&pn=KANAIYA%AGRO&mc=BCR2DN6T6OFKTJLX&tid=TXN123456789&cu=INR&am=1"

      // href='upi://pay?pa=gpay-11248734880@okbizaxis&pn=SHINOI%TECH&mc=BCR2DN6T6OFKTJLX&tn=Verified%20Merchant&am=1&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEQCIB4NcyZl2FEuktegagtryRG1iA1XG9r3tMHCIGZmR0wQAiBPvbuBFfhZjmq3MKMKH/XouOPk2+STl/VwYQTg2Y7vWg=='

      // href='upi://pay?pa=gpay-11248734880@okbizaxis&pn=SHINOI%TECH&mc=BCR2DN6T6OFKTJLX&tn=Verified%20Merchant&am=1&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEQCIB4NcyZl2FEuktegagtryRG1iA1XG9r3tMHCIGZmR0wQAiBPvbuBFfhZjmq3MKMKH/XouOPk2+STl/VwYQTg2Y7vWg=='
          class="upi-pay1"
        >
          <div className="package-content">
            <h3>Free Gold Package</h3>
            <p>Full Time Access</p>
            <p>Unlimited technical support</p>
          </div>
          <div className="card-icon">→</div>
        </a>
      </div>
   
      <div className="package-card red one">
      <a onClick={()=>{
          var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
          win.focus();
          detail("/Day")

      }}
        >
               {/* href="upi://pay?pa=gpay-11248734880@okbizaxis&pn=SHINOI%TECH&mc=BCR2DN6T6OFKTJLX&tn=Verified%20Merchant&am=1&cu=INR&url=&mode=02&orgid=159012&mid=&msid=&mtid=&sign=MEQCIB4NcyZl2FEuktegagtryRG1iA1XG9r3tMHCIGZmR0wQAiBPvbuBFfhZjmq3MKMKH/XouOPk2+STl/VwYQTg2Y7vWg==" */}
               {/* class="upi-pay1" */}
        <div className="package-content">
          <h3>Free Refundable Package</h3>
          <p>Full Time Access</p>
          <p>Unlimited technical support</p>
        </div>
        <div className="card-icon">→</div>
        </a>
      </div>

      <div className="package-card bronze one">
      {/* href="phonepe://pay?pa=JAYDEEPVAGHASIYA.JV-1@okicici&pn=VAGHASIYA&JAYDEEP&VINUBHAI&mc=&tn=Verified%20Merchant&am=1&cu=INR" */}
      {/* class="upi-pay1" */}
      <a onClick={()=>{

var win = window.open('https://play2029.atmegame.com/online-card-games/', '_blank');
win.focus();
detail("/Day")

      }}
        >
        <div className="package-content">
          <h3> Free Bronze Package</h3>
          <p>Full Time Access</p>
          <p>Unlimited technical support</p>
        </div>
        <div className="card-icon">→</div>
        </a>
      </div>
    </div>
  );
};

export default Detail;
