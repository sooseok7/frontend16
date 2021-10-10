import React, { useState } from "react";
import axios from 'axios';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function PicturePage() {
  const [names,setNames]=useState([]);
  const [lengthss,setLengths]=useState();
  //const [loading,setLoading]=useState();

  React.useEffect(() => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getpicture'
    )
    .then(Response => {
      
      if (Response.status === 200) {
            
        //setNames(Response.data.response.body.items.item);
        //setLengths(Response.data.response.body.items.length);
        //console.log(Response.data.response.body.items.length);
        console.log(Response.data.response);
       // check if this component still mounted
       if (isSubscribed) {
         //setLoading(false);
       }
     }
    }).catch((Error)=>{console.log(Error)});

    document.body.classList.add("picture-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("picture-page");
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
            <h2 id="zoneTitle">사진여행</h2>
          </div>
        </div>
      </div>
      
      
      
      
      <DarkFooter /></>
  );
}

export default PicturePage;