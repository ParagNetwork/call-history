import React, { useEffect, useState } from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: 'AW-16645947755',
}
TagManager.initialize(tagManagerArgs)

const Dashboard = () => {
  const history = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");
    setData({ phone, email });
  }, []);

  return (
    
    <div className="dashboard-container">
       <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7932309367502307"
     crossorigin="anonymous"></script>
    </head>
      <h1>Call History</h1>
      <div className="card">
        <div className="card-content one">
        {/* <MyComponent openLinks={openLinks} /> */}
        <html>
        <head>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16645947755">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'AW-16645947755');
</script> */}

</head>


        </html>
      
{/* <iframe width="560" 
height="315" 
src="https://infoihub.com/" 
title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; 
 encrypted-media; gyroscope; picture-in-picture; web-share" 
 referrerpolicy="strict-origin-when-cross-origin" 
 allowfullscreen></iframe> */}




        {/* <iframe width="250"
                        height="200"
                        
                        src=
                       "https://infoihub.com/"
                        title="GeeksforGeeks"
                        frameborder="0"
                        
                        
                        
                        >
                </iframe> */}
        
          <div className="" onClick={() => 
            
            {

              // var win = window.open('https://play2029.atmegame.com/online-hot-games', '_blank');
              // win.focus();
              history("/detail")

            }
            
            
            }>
            <h2>Call History</h2>
            <p>
              Get call details of <strong>{data?.phone}</strong>
            </p>
          </div>
          <div className="card-icon">→</div>
        </div>
     
        <div className="card-content two">
          <div className="" onClick={() => 
            
            {
              // var win = window.open('https://play2029.atmegame.com/online-hot-games/', '_blank');
              // win.focus();
              history("/detail")
            }
            
            
            }>
            <h2>WhatsApp History</h2>
            <p>
              Get all WhatsApp chat history for <strong>{data?.phone}</strong>
            </p>
          </div>
          <div className="card-icon">→</div>
        </div>
      
        <div className="card-content three">
          <div className="" onClick={() =>
            {

              // var win = window.open('https://play2029.atmegame.com/online-hot-games/', '_blank');
              // win.focus();
              history("/detail")

            }
            
            }>
            <h2>SMS History</h2>
            <p>
              Get SMS details of <strong>{data?.phone}</strong>
            </p>
          </div>
          <div className="card-icon">→</div>
        </div>
    
        <div className="card-content four">
          <div className="" onClick={() => 
            
            {

              // var win = window.open('https://play2029.atmegame.com/online-hot-games/', '_blank');
              // win.focus();
              history("/detail")

            }
            
            
            
            }>
            <h2>All History</h2>
            <p>
              Get all call, WhatsApp, SMS details for{" "}
              <strong>{data?.phone}</strong>
            </p>
          </div>
          <div className="card-icon">→</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
