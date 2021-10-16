import React, { useState } from "react";
import axios from 'axios';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Paging from "./Paging";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function CampingPage() {
  const [names,setNames]=useState([]);

  React.useEffect(() => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getcamping'
    )
    .then(Response => {
      
      if (Response.status === 200) {
            
        setNames(Response.data.response.body.items.item);
        console.log(Response.data.response.body.items.item);
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
           const mapurl="https://map.kakao.com/link/search/"+name.addr1
        return(
          <div className="section3 section-nucleo-icons">

              <Container>
                <Row key={name.facltNm}>
                  <Col lg="6" md="12">
                    <h2 className="title">{name.facltNm}</h2>
                    <h5 className="description">
                      &nbsp;{name.doNm}&nbsp;{name.induty}
                    </h5>
                    <Button
                      className="btn-detail"
                      color="info"
                      size="lg"
                      href={searchurl}
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
            <div className="content-center">
          <Container>
            <h1 className="title">Camping Trip</h1>
          </Container>
        </div>
      </div>



      </><div class="zone_wrap">
        <div class="list_zone">
          <div class="tit">
          </div>
          {Namelists}
          <Paging/>
      </div>
      <DarkFooter />
      </div></>
  );
}

export default CampingPage;