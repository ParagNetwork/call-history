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

const Day = () => {
  const history = useNavigate();

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

  //   const timeoutID = window.setTimeout(() => {
  //     window.open("https://play2029.atmegame.com/online-cricket-games/");
  
  // }, 1500);



  // return () => window.clearTimeout(timeoutID );

  });
  return (
    <div className="detail-container">
       <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7932309367502307"
     crossorigin="anonymous"></script>
    </head>
    
      {/* <div className="header-card ">
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
      </div> */}
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
      <div className="ppackage-card gold one">
        <a onClick={async()=>{
            // var win = window.open('https://play2029.atmegame.com/online-cricket-games/', '_blank');
            // win.focus();
            history("/HistoryScreen")
        }  
        }
          class="upi-pay1"
        >
          <div className="package-content">
            <h3>Today's History</h3>
            <p>Full Time Access</p>
            <p>Unlimited technical support</p>
          </div>
          <div className="ccard-icon">→</div>
        </a>
      </div>
   
      <div className="ppackage-card red one">
      <a onClick={()=>{
          // var win = window.open('https://play2029.atmegame.com/online-cricket-games/', '_blank');
          // win.focus();
          history("/HistoryScreen")

      }}
        >
        <div className="package-content">
          <h3>Yesterday's History</h3>
          <p>Full Time Access</p>
          <p>Unlimited technical support</p>
        </div>
        <div className="ccard-icon">→</div>
        </a>
      </div>

      <div className="ppackage-card bronze one">
      <a onClick={()=>{

              // var win = window.open('https://play2029.atmegame.com/online-cricket-games/', '_blank');
              // win.focus();
              history("/HistoryScreen")

      }}
        >
        <div className="package-content">
          <h3> Last 7 day's History</h3>
          <p>Full Time Access</p>
          <p>Unlimited technical support</p>
        </div>
        <div className="ccard-icon">→</div>
        </a>
      </div>

      <div className="ppackage-card bronze one">
      <a onClick={()=>{

            // var win = window.open('https://play2029.atmegame.com/online-cricket-games/', '_blank');
            // win.focus();
            history("/HistoryScreen")

      }}
        >
        <div className="package-content">
          <h3> Last 15 day's History</h3>
          <p>Full Time Access</p>
          <p>Unlimited technical support</p>
        </div>
        <div className="ccard-icon">→</div>
        </a>
      </div>
    </div>
  );
};

export default Day;
