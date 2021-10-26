import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import QuestionResult from '../../QuestionResult';
import styled from 'styled-components/macro'
import ResultNavbar from "components/Navbars/ResultNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { getDistance } from "geolib"
import AuthenticationService from "../../jwtlogin/AuthenticationService.js";
const Intro = styled.div`
  margin-top: 5em;
  text-align: center;
`;


function TestPage() {
  const setupAxiosInterceptors=AuthenticationService.setupAxiosInterceptors();
  const {testresult}=useParams();  
  const [nums,setNums]=useState([]); 
  const [names,setNames]=useState([]);


  let mbti_A="/img/noresult.jpg"
  let mbti_B ="/img/noresult.jpg"
    let mbti_C ="/img/noresult.jpg"
    let themas =""
  React.useEffect(() => {
    let isSubscribed = true;

    axios.get('/api/getinformation'
    )
    .then((Response)=>{ 
    if (Response.status === 200) {
      if (isSubscribed) {
        setNames(Response.data.response.body.items)
        const result = QuestionResult.filter(kk => kk.mbti === testresult)
        setNums(result[0].num)
 
     // check if this component still mounted
    }
    }
  })
   // console.log(Response.data.response.body.items)
   .catch((Error)=>{
     //console.log(Error)
    });

    document.body.classList.add("result-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("result-page");
      document.body.classList.remove("sidebar-collapse");
      //console.log('unmounting...');
      
      isSubscribed=false;
    };
   
  }, []);
 
  const items2 = QuestionResult.map(data2 =>{

   if(data2.mbti == testresult){
    
    
     mbti_A="/img/"+testresult+".jpg"
     mbti_B="/img/"+data2.like+".jpg"
     mbti_C="/img/"+data2.hate+".jpg"
     themas = "../"+data2.thema
      return(
        <div>
        <div style={{backgroundColor:"black"}} className="section2 section-team text-center">
     <div>
        <img className="mbtipicture" alt="mbti_A" src={mbti_A}/>
<Intro>  

            <h1 style={{color:"white"}}>{data2.mbti}</h1>
            <h4 style={{color:"white"}}>{data2.nickname}</h4>
            <br/>
            <br/>
          
            <h4 style={{color:"white"}}>{data2.features.split("\n").map((line)=> { 
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}</h4>
            <br/>
            <br/>
            <br/>
            <br/>
        </Intro>
      

        </div>
            <div class="result-box">
            <div class="person-type">유형별 잘맞는 사람</div>
    <div class="result-box-title">

        <div class="img-halt-box">
            <ui class="list">
                <li class="person1">
                    <span class="label-top">{data2.like}</span>
                    <img
                    //alt="bg5"
                    src={mbti_B}/>
                    <span class="label-bottom">{data2.likefeatures.split("\n").map((line)=> { 
            return (
              <span>
                {line}
                <br/>
              </span>
            );
          })}</span>
                    <a href={data2.like} class="btn-gray-round">보러가기</a>
                </li>
                <li class="person2">
                    <span class="label-top">{data2.hate}</span>
                    <img
                    //alt="bg5"
                    src={mbti_C}/>
                    <span class="label-bottom">{data2.hatefeatures.split("\n").map((line)=> { 
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}</span>
                    <a href={data2.hate} class="btn-gray-round">보러가기</a>
                </li>
            </ui>
            <br/><br/>
        </div>
    </div>
</div>
</div>

<div class="sugggest-title">
당신의 추천 여행지는<br/>
</div>

 </div>
      )
    }
  });
let array1={} ;
let array2={} ;
let array3={} ;
let array4={};
let array5={};
  const Namelists= names.map((name,index)=> {
   
    return(<div>
      {  
        nums.map((i,index2)=> {
    
          if(index == i){
      
       // setLocation([locationss,name]);
     if(index2 === 0){
       array1 = name
     }else if(index2 ===2){
      array2 = name
     }
     else if(index2 ===4){
      array3 = name
    }else if(index2 ===8){
      array4 = name
    }else if(index2 ===3){
      array5 = name
    }
           const searchurl="https://search.daum.net/search??w=tot&&q="+ name.trrsrtNm
           const mapurl="https://map.kakao.com/link/to/,"+name.trrsrtNm+"," +name.latitude+","+name.longitude
           const link = "/suggestdetail/"+ name.trrsrtNm

        return(
          <div className="section3 section-nucleo-icons">
    
          <Container>
              <Row key={index}>
                 {/* <h5> {name.rdnmadr.split(" ")[0]}</h5>  */}
                <Col lg="6" md="12">
                  <h2 className="title">{name.trrsrtNm}  <div className="suggestdetail"><Link to={link} > +사진</Link></div></h2>
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
    
        })
      }
      </div>
    )
  }
);
function calculateDistance(a,b,c,d){


  const dist = getDistance(
    { latitude: parseInt(a), longitude: parseInt(b) },
    { latitude: parseInt(c), longitude:parseInt(d) }
  );
//const dist10 =dist/1000;
//console.log('distance:', dist) //getting right value 54209m
return dist/1000;
}


  return (
    <>
      <ResultNavbar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg1.jpg").default + ")",
          }}
          
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">여행성향 MBTI 테스트 결과</h1>
          </Container>
        </div>
      </div>     
         {items2}
         {/* <Intro>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <button  css={btnCSS}>Begin</button>
        </Intro> */}

{/* 버튼 css라서 필요하면 쓸거임 */}

{/* <h4>Navigation Pills</h4>
              <Nav
                className="nav-pills-info nav-pills-just-icons"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    className={pills === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills("1");
                    }}
                  >
                    <i className="far fa-gem"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={pills === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills("2");
                    }}
                  >
                    <i className="fa fa-thermometer-full"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={pills === "3" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills("3");
                    }}
                  >
                    <i className="fa fa-suitcase"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" disabled>
                    <i className="fa fa-exclamation"></i>
                  </NavLink>
                </NavItem>
              </Nav> */}

 
<div className="btn-moving">
<br/><br/>
    <Button className="btn-first">{array1.trrsrtNm}</Button> -{calculateDistance(array1.latitude,array1.longitude,array2.latitude,array2.longitude)} KM- &nbsp;&nbsp; 
      <Button className="btn-second">{array2.trrsrtNm}</Button> - {calculateDistance(array2.latitude,array2.longitude,array3.latitude,array3.longitude)}KM- &nbsp;&nbsp;
      <Button className="btn-third">{array3.trrsrtNm}</Button>   - {calculateDistance(array3.latitude,array3.longitude,array4.latitude,array4.longitude)}KM- &nbsp;&nbsp;
      <Button className="btn-fourth">{array4.trrsrtNm}</Button> -{calculateDistance(array4.latitude,array4.longitude,array5.latitude,array5.longitude)}KM- &nbsp;&nbsp;
      <Button className="btn-fifth">{array5.trrsrtNm}</Button>  
    </div>
          {Namelists}
        <div style={{backgroundColor:"black"}}><br/><br/>
        <Button className="btn-calendars" href={themas}>당신에게 맞는<br/>여행 테마 추천</Button>
        <Button className="btn-schedule" href="../test-page">테스트<br/>다시하기</Button></div>
        <div style={{backgroundColor:"black"}}><br/><br/></div>
        <DarkFooter />
  
    </>
  );
}

export default TestPage;