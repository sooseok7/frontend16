import React from "react";

import QuestionResult from '../../QuestionResult';
import styled from 'styled-components/macro'

// reactstrap components


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TestResultHeader from "components/Headers/TestResultHeader";
import DarkFooter from "components/Footers/DarkFooter";
//import { options } from "preact";


//const QuizWindow = styled.div`
//    text-align: center;
//    font-size: clamp(20px, 2.5vw, 24px);
//    margin-top: 10vh;`;
//const Button2 = styled.div`
//border: 1px solid #616A94;
//border-radius: 50px;
//padding: 15px 30px;
//text-decoration: none;
//color: #616A94;
//background-color: #161A31;
//transition: 0.3s;
//font-size: 1em;
//cursor: pointer;
//outline: none;

//&:hover {
///    color: white;
//    background-color: #616A94;
//}`;
const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

//const btnCSS = css`
//    margin-top: 2em;`;
//const Options = styled.div`
//    display: flex;
//    flex-direction: column;
//    width: 70%;
//    margin: 2em auto;
//
//    @media screen and (min-width: 1180px) {
//        width: 50%;
//    }`;

/* const Option = styled.button`
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
    width: 70%;
    margin: 0 auto;
`;
*/

function TestPage() {
  //const [count, setCount] = useState(0);
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

  const items2 = QuestionResult.map(data2 =>{

   if(data2.mbti=="ISTJ"){
      
      return(
      
   
   <Intro>
            <h1 style={{color:"white"}}>{data2.mbti}</h1>
            <h4 style={{color:"white"}}>{data2.nickname}</h4>
            <br/>
            <br/>
          
            <h4 style={{color:"white"}}>{data2.features}</h4>
            <br/>
            <br/>
            <br/>
            <br/>
        </Intro>
      


      )
    }
    
    
  })



  
  
  return (
    <>
      <ExamplesNavbar />

      <div className="wrapper">
        <TestResultHeader />
       
         <div style={{backgroundColor:"black"}} className="section section-team text-center">
   

         {items2}
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
