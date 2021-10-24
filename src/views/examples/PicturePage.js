import React, { useState } from "react";
import axios from 'axios';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import AuthenticationService from "../../jwtlogin/AuthenticationService.js";
function PicturePage() {
  const setupAxiosInterceptors=AuthenticationService.setupAxiosInterceptors();
  const [names,setNames]=useState([]);
  //const [lengthss,setLengths]=useState();

  const f1 = () => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getpicture1'
    )
    .then(Response => {
      
      if (Response.status === 200) {
        if (isSubscribed) {
        setNames(Response.data.response.body.items.item);
        //console.log(Response.data.response.body.items.item);
        //setLengths(Response.data.response.body.items.length);
        //console.log(Response.data.response.body.items.length);

       // check if this component still mounted
       
         //setLoading(false);
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
      '/api/getpicture2'
    )
    .then(Response => {
      
      if (Response.status === 200) {
        if (isSubscribed) {
        setNames(Response.data.response.body.items.item);
        //console.log(Response.data.response.body.items.item);
        //setLengths(Response.data.response.body.items.length);
        //console.log(Response.data.response.body.items.length);

       // check if this component still mounted
       
         //setLoading(false);
       }
     }
    })
    .catch((Error)=>{
      //console.log(Error)
    });
  }
  const f3 = () => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getpicture3'
    )
    .then(Response => {
      
      if (Response.status === 200) {
        if (isSubscribed) {
        setNames(Response.data.response.body.items.item);
        //console.log(Response.data.response.body.items.item);
        //setLengths(Response.data.response.body.items.length);
        //console.log(Response.data.response.body.items.length);

       // check if this component still mounted
       
         //setLoading(false);
       }
     }
    })
    .catch((Error)=>{
      //console.log(Error)
    });
  }
  const f4 = () => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getpicture4'
    )
    .then(Response => {
      
      if (Response.status === 200) {
        if (isSubscribed) {
        setNames(Response.data.response.body.items.item);
        //console.log(Response.data.response.body.items.item);
        //setLengths(Response.data.response.body.items.length);
        //console.log(Response.data.response.body.items.length);

       // check if this component still mounted
       
         //setLoading(false);
       }
     }
    })
    .catch((Error)=>{
      //console.log(Error)
    });
  }
  const f5 = () => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getpicture5'
    )
    .then(Response => {
      
      if (Response.status === 200) {
        if (isSubscribed) {
        setNames(Response.data.response.body.items.item);
        //console.log(Response.data.response.body.items.item);
        //setLengths(Response.data.response.body.items.length);
        //console.log(Response.data.response.body.items.length);

       // check if this component still mounted
       
         //setLoading(false);
       }
     }
    })
    .catch((Error)=>{console.log(Error)});
  }
    React.useEffect(() => {
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

  const Namelists= names.map((name)=> {
      const searchurl="https://search.daum.net/search??w=tot&&q="+ name.galTitle
      const mapurl="https://map.kakao.com/link/search/"+name.galTitle

        return(
          <div className="section3 section-nucleo-icons">
    
          <Container>
              <Row>
                <Col lg="6" md="12">
                  <h2 className="title">{name.galTitle}</h2>
                 <h5 className="description">
                     <img src= {name.galWebImageUrl}/>
                  </h5>
                  <Button
                  style={{marginTop:"-20px", float:"right"}}
                    className="btn-detail"
                    color="info"
                    size="lg"
                    href = {searchurl}
                    target="_blank"
                  > 자세히
                  </Button>
                  <Button
                  style={{marginTop:"-20px", float:"right"}}
                    className="btn-detail"
                    color="info"
                    href = {mapurl}
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
            backgroundImage: "url(" + require("assets/img/bg6.jpg").default + ")",
          }}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Picture Trip</h1>
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
              1
            </Button>
            <Button
              className="thema-button"
              onClick={f2}
            >
              2
            </Button>
            <Button
              className="thema-button"
              onClick={f3}
            >
              3
            </Button>
            <Button
              className="thema-button"
              onClick={f4}
            >
              4
            </Button>
            <Button
              className="thema-button"
              onClick={f5}
            >
              5
            </Button>
          </div>
        </div>
        <DarkFooter />
      </div></>
  );
}

export default PicturePage;