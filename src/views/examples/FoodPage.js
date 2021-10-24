import React, { useState } from "react";
import axios from 'axios';
import AuthenticationService from "../../jwtlogin/AuthenticationService.js";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function FoodPage() {
  const setupAxiosInterceptors=AuthenticationService.setupAxiosInterceptors();
  const [names,setNames]=useState([]);

  const f1 = () => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getfood'
    )
    .then(Response => {
      
      if (Response.status === 200) {
        if (isSubscribed) {    
        setNames(Response.data.data);
        //setLengths(Response.data.response.body.items.length);
        //console.log(Response.data.response.body.items.length);
        //console.log(Response.data.data);
       // check if this component still mounted
       if (isSubscribed) {
         //setLoading(false);
       }
      }
     }
    })
    .catch((Error)=>{
      //console.log(Error)
    });
  }
  const f2 = () => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getfood1'
    )
    .then(Response => {
      
      if (Response.status === 200) {
        if (isSubscribed) {    
        setNames(Response.data.data);
        //setLengths(Response.data.response.body.items.length);
        //console.log(Response.data.response.body.items.length);
        //console.log(Response.data.data);
       // check if this component still mounted
       if (isSubscribed) {
         //setLoading(false);
       }
      }
     }
    })
    .catch((Error)=>{console.log(Error)});
  }

    React.useEffect(() => {
    document.body.classList.add("food-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("food-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  const Namelists= names.map((name)=> {
           const searchurl="https://search.daum.net/search??w=tot&&q="+ name.음식테마거리명
           const mapurl="https://map.kakao.com/link/search/"+name.음식테마거리명
        return(
          <div className="section3 section-nucleo-icons">
    
          <Container>
              <Row>
                <Col lg="6" md="12">
                  <h2 className="title">{name.음식테마거리명} </h2>
                 <h5 className="description">
                    {name.지역}
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
            backgroundImage: "url(" + require("assets/img/test.jpg").default + ")",
          }}
        ></div>
           <div className="content-center">
          <Container>
            <h1 className="title">Food Trip</h1>
          </Container>
        </div>
      </div>
      </><div class="zone_wrap">
        <div class="list_zone">
          <div class="tit">
          </div>
          {Namelists}
        <div className="thema-line">
          <Button
          className="thema-button"
            onClick={f1}
          >
            열기
          </Button>
          <Button
          className="thema-button"
            onClick={f2}
          >
            접기
          </Button>
          </div>
          </div>
        <DarkFooter />
      </div></>
  );
}

export default FoodPage;