import React from "react";
import { useParams } from "react-router-dom";
import QuestionResult from '../../QuestionResult';
import styled from 'styled-components/macro'
import Suggest from "./Suggest";
import ResultNavbar from "components/Navbars/ResultNavbar.js";
import TestResultHeader from "components/Headers/TestResultHeader";
import DarkFooter from "components/Footers/DarkFooter";
import { Button } from "reactstrap";

const Intro = styled.div`
  margin-top: 5em;
  text-align: center;
`;


function TestPage() {
  const {testresult}=useParams();  

  let mbti_A="/img/noresult.jpg"
  let mbti_B ="/img/noresult.png"
    let mbti_C ="/img/noresult.png"
  React.useEffect(() => {
    document.body.classList.add("result-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("result-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const items2 = QuestionResult.map(data2 =>{

   if(data2.mbti == testresult){
     mbti_A="/img/"+testresult+".jpg"
     mbti_B="/img/"+data2.like+".jpg"
     mbti_C="/img/"+data2.hate+".jpg"
      return(
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
                <br />
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
        </div>
    </div>
</div>
</div>
      )
    }
    
    
  });

  
  return (
    <>
      <ResultNavbar />


        <TestResultHeader />
        
        
        
   
      
         
          
         {items2}
         {/* <Intro>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <button  css={btnCSS}>Begin</button>
        </Intro> */}
    
    
        <div class="sugggest-title">
            당신의 추천 여행지는
          </div>
        <Suggest/>
        <div style={{backgroundColor:"black"}}>
        <Button className="btn-calendars" href="http://localhost:3000/calendars">달력이동</Button>
        <Button className="btn-schedule" href="">일정 짜주기</Button><br/>
        <Button className="btn-retest" href="http://localhost:3000/test-page"style={{display:"block"}}>테스트 다시하기</Button></div>
        <DarkFooter />
  
    </>
  );
}

export default TestPage;