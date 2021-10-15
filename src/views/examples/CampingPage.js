import React, { useState } from "react";
import axios from 'axios';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function CampingPage() {
  const [names,setNames]=useState([]);

  React.useEffect(() => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getwalking'
    )
    .then(Response => {
      
      if (Response.status === 200) {
            
        setNames(Response.data.response.body.items.item);
        console.log(Response.data);
       // check if this component still mounted
       if (isSubscribed) {
         //setLoading(false);
       }
     }
    });
    //.catch((Error)=>{console.log(Error)});
      
    document.body.classList.add("camping-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("camping-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const Namelists= names.map((name)=> {
           const searchurl="https://search.daum.net/search??w=tot&&q="+ name.facltNm
           const mapurl="https://map.kakao.com/link/search/"+name.facltNm
        return(
          <div className="section3 section-nucleo-icons">
    
          <Container>
              <Row>
                <Col lg="6" md="12">
                  <h2 className="title">{name.facltNm}</h2>
                 <h5 className="description">
                    {name.trrsrtIntrcn}
                  </h5>
                  <Button
                    className="btn-detail"
                    color="info"
                    size="lg"
                    href = {searchurl}
                    target="_blank"
                  > 자세히
                  </Button>
                  <Button
                    className="btn-detail"
                    color="info"
                    href={mapurl}
                    size="lg"
                    target="_blank"
                  >
                    길찾기
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
       );
      }
);


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
            <h2 id="zoneTitle">캠핑여행</h2>
          </div>
          {Namelists}
      <DarkFooter />
      
      </div>
      </div></>
  );
}

export default CampingPage;