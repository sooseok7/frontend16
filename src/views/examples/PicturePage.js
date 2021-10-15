import React, { useState } from "react";
import axios from 'axios';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function PicturePage() {
  const [names,setNames]=useState([]);
  //const [lengthss,setLengths]=useState();

  React.useEffect(() => {
    let isSubscribed = true;
    axios
    .get(
      '/api/getpicture'
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
                  <h2 style={{float:"center"}}className="title">{name.galTitle}</h2>
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
            backgroundImage: "url(" + require("assets/img/login1.jpg").default + ")",
          }}
        ></div>
      </div>

      </><div class="zone_wrap">
        <div class="list_zone">
          <div class="tit">
            {/* <h1 id="zoneTitle">{"<"}사진여행{">"}</h1> */}
          </div>
          {Namelists}
       <div style={{backgroundColor:"black"}}><br/></div>
        </div>
      </div>
      <DarkFooter /></>
  );
}

export default PicturePage;