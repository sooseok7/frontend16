import React from "react";
import { useParams } from "react-router-dom";
import QuestionResult from '../../QuestionResult';
import styled from 'styled-components/macro'
import Suggest from "./Suggest";
import Person from "./Person";
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
  margin-top: 5em;
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
  const {testresult}=useParams();  

  let mbti_A="img/noresult.jpg"

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
     mbti_A="img/"+testresult+".jpg"
      return(
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
      )
    }
    
    
  })



  
  
  return (
    <>
      <ExamplesNavbar />


        <TestResultHeader />
        
        
        <div style={{backgroundColor:"black"}} className="section2 section-team text-center">
   
      
         
          
         {items2}
         {/* <Intro>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <button  css={btnCSS}>Begin</button>
        </Intro> */}
    

        </div>
        <Person/>
        <div class="sugggest-title">
            당신의 추천 여행지는
          </div>
        <Suggest/>
        <DarkFooter />
  
    </>
  );
}

export default TestPage;