import React from "react";
import axios from 'axios';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function WalkingPage() {

  React.useEffect(() => {

    axios
    .get(
      '/api/getwalking'
    )
    .then(Response => {
      if (Response.status === 200) {
      console.log(Response.data.response.body)
   
        
          
          // setNames(Response.data.response.body.items);
          // setLengths(Response.data.response.body.items);
          //        console.log(Response.data.response.body.items);
          //console.log(Response.data.response.body.items);
         // check if this component still mounted
       }
    }).catch((Error)=>{console.log(Error)});

    document.body.classList.add("walking-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("walking-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <><>
      <ExamplesNavbar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login1.jpg").default + ")",
          }}
        ></div>
      </div>



    </><div class="zone_wrap">
        <div class="list_zone">
          <div class="tit">
            <h2 id="zoneTitle">뚜벅여행</h2>
          </div>
        </div>
      </div>
      
      
      
      
      <DarkFooter /></>
  );
}

export default WalkingPage;