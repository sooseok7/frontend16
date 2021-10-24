import React, { useState } from "react";
import axios from 'axios';

// reactstrap components
import { Button, Container, Row, Col} from "reactstrap";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import AuthenticationService from "../../jwtlogin/AuthenticationService.js";
function CampingPage() {
  const setupAxiosInterceptors=AuthenticationService.setupAxiosInterceptors();
  const [names,setNames]=useState([]);

    const f1 = () => {
    axios
      .get(
        '/api/getcamping1'
      )
      .then(Response => {
        if (Response.status === 200) {

          setNames(Response.data.response.body.items.item);
          //console.log(Response.data.response.body.items.item);
          // check if this component still mounted
        }
      })
        .catch((Error)=>{
          //console.log(Error)
        })
    }

    const f2 = () => {
     axios
        .get(
          '/api/getcamping2'
        )
        .then(Response => {
          if (Response.status === 200) {
  
            setNames(Response.data.response.body.items.item);
            //console.log(Response.data.response.body.items.item);
            // check if this component still mounted
          }
        })
      
         .catch((Error)=>{
           //console.log(Error)
          });}
          const f3 = () => {
          axios
          .get(
            '/api/getcamping3'
          )
          .then(Response => {
            if (Response.status === 200) {
    
              setNames(Response.data.response.body.items.item);
              //console.log(Response.data.response.body.items.item);
              // check if this component still mounted
            }
          })
       
            .catch((Error)=>{
              //console.log(Error)
            });
          }
            const f4 = () => {
            axios
            .get(
              '/api/getcamping4'
            )
            .then(Response => {
              if (Response.status === 200) {
      
                setNames(Response.data.response.body.items.item);
               // console.log(Response.data.response.body.items.item);
                // check if this component still mounted
              }
            })
        
              .catch((Error)=>{
                //console.log(Error)
              });
            }
              const f5 = () => {
              axios
              .get(
                '/api/getcamping5'
              )
              .then(Response => {
                if (Response.status === 200) {
        
                  setNames(Response.data.response.body.items.item);
                  //console.log(Response.data.response.body.items.item);
                  // check if this component still mounted
                }
              })
                .catch((Error)=>{
                  //console.log(Error)
                });
            }
React.useEffect(() => {
         document.body.classList.add("boardread/:num");
         document.body.classList.add("sidebar-collapse");
         document.documentElement.classList.remove("nav-open");
         window.scrollTo(0, 0);
         document.body.scrollTop = 0;
         return function cleanup() {
           document.body.classList.remove("boardread/:num");
           document.body.classList.remove("sidebar-collapse");
         };
  }, []);

  const Namelists= names.map((name)=> {
           const searchurl="https://search.daum.net/search??w=tot&&q="+ name.facltNm
           const mapurl="https://map.kakao.com/link/to/,"+name.addr1 +"," +name.mapY+","+name.mapX
        return(
          <div className="section3 section-nucleo-icons">

              <Container>
                <Row key={name.facltNm}>
                  <Col lg="6" md="12">
                    <h2 className="title">{name.facltNm}</h2>
                    <h5 className="description">
                      &nbsp;{name.doNm}&nbsp;{name.induty}{name.pageNo}
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
      <><ExamplesNavbar /><div className="page-header clear-filter">
      <div
        className="page-header-image"
        style={{
          backgroundImage: "url(" + require("assets/img/bg7.jpg").default + ")",
        }}
      >
      </div>
      <div className="content-center">
        <Container>
          <h1 className="title">Camping Trip</h1>
        </Container>
      </div>
    </div><div class="zone_wrap">
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

export default CampingPage;