import React,{useState} from "react";
import Question from '../../Question';

import styled from 'styled-components/macro'
// import {
//   NavItem,
//   NavLink
 
// } from "reactstrap";
// reactstrap components


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TestPageHeader from "components/Headers/TestPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
//import { options } from "preact";
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;
const Button2 = styled.div`
border: 1px solid #616A94;
border-radius: 50px;
padding: 15px 30px;
text-decoration: none;
color: #616A94;
background-color: #161A31;
transition: 0.3s;
font-size: 1em;
cursor: pointer;
outline: none;

&:hover {
    color: white;
    background-color: #616A94;
}
`;
const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

/*const btnCSS = css`
    margin-top: 2em;
`;
*/
const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question2 = styled.div`
    width: 90%;
    margin: 0 auto;
`;

function TestPage() {
  const [count, setCount] = useState({
    counts:0,
    i:1,
    s:1,
    t:1,
    j:1,
    s:1,
    n:1,
    f:1,
    p:1
  }
  );
  React.useEffect(() => {
    document.body.classList.add("test-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("test-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


const updatecount = (mbti)=>{



   if(mbti == 'f'){
     setCount({counts:count.counts+1 , f: count.f+1});
   }else{
     setCount({counts:count.counts+1,i:count.i,s:count.s });
   }

  
};



  const items = Question.map(data =>{

    if(count.counts== '0' && data.num=='0'){
      
      return(
        
      <div>
   
   <Intro>
            <h1 style={{color:"white"}}>{data.question}</h1>
            <h4></h4>
            <br/>
            <br/>
            <br/>
            <br/>
            <Button2 style={{marginLeft:"10px", marginRight:"10px"}} onClick={() => updatecount()}>시작</Button2>
        </Intro>
      

    </div>
      )
    }
    else if(data.num== count.counts && count.counts != '0' ){
      
  return(
    <QuizWindow>
   
          <Question2 style={{color:"white"}}><h1>{data.question.split("\n").map((line)=> { //this.props.data.content: 내용
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}

          {/* {this.props.data.content} */} </h1></Question2><br/>
          <Options>
          <Option  onClick={() => updatecount(data.answer1_mbti)}>{data.answer1}</Option>
          <Option onClick={() => updatecount(data.answer2_mbti)}>{data.answer2}</Option>
          <br/>
          </Options>
    </QuizWindow>
    )

    
   
    
  }else if(count.counts=='15'&&data.num=='0'){
 
    return( 
      <Intro>
    <a style={{color:"white",fontSize:"30px"}}
    className="link"
    href="/testResult"
    
  >결과 보기</a>
  <br/><br/>
  </Intro>
   )
  }
    

})
  
  return (
    <>
      <ExamplesNavbar />

      <div className="wrapper">
        <TestPageHeader />
       
         <div style={{backgroundColor:"black"}} className="section section-team text-center">
        
     
         {items}
         {/* <Intro>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <button  css={btnCSS}>Begin</button>
        </Intro> */}

        </div>
      
        <DarkFooter />
      </div>
  
    </>
  );
}

export default TestPage;
