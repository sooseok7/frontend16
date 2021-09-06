import React, { useState } from "react";
import axios from 'axios';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Suggest() {
  const [names,setNames]=useState([]);
  const [addresss,setLocationObj] =useState({
    locationfinal:""
  });
 axios.get('http://api.visitkorea.or.kr/openapi/service/rest/DataLabService/metcoRegnVisitrDDList?serviceKey=ZyXbs3ggoxjvBgNnPZIbqucXxkimzEhCbTUf2TCX6PoRp%2BTOPYloYNtCYjVBaZzDEm8tpcfCZJW6RVoIRejKpg%3D%3D&MobileOS=ETC&MobileApp=AppTest&startYmd=20210513&endYmd=2021513&_type=json')
    .then((Response)=>{console.log(Response.data)})
    //setNames({name:Response.data.response.body.items.item[1].areaNm, daywkDivNm:Response.data.response.body.items.item[1].daywkDivNm})})
  .catch((Error)=>{console.log(Error)});
  
  axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=서울시 서초구`, {
    headers: { Authorization: 'KakaoAK 37f2c03eb13accd2781060098af002b8' },
})
    .then(res => {
      const location = res.data.documents[0];
  //alert(location.address.x)
        setLocationObj({
         

            locationfinal:"https://map.kakao.com/link/to/크리스피드"+","+location.address.y+","+location.address.x
        })
    })
  return (
  
    <>
      <div className="section section-nucleo-icons">
      <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">여행지이름</h2>
              <h5 className="description">
                설명
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                size="lg"
                href="https://search.daum.net/search??w=tot&&q=크리스피드"
                target="_blank"
              > 자세히
              </Button>
              <Button
                className="btn-round"
                color="info"
                href= {addresss.locationfinal}
                outline
                size="lg"
                target="_blank"
              >
                길찾기
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
    
  );
}

export default Suggest;
