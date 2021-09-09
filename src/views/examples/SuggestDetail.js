import React, { useState } from "react";
import axios from 'axios';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import SearchPageHeader from "components/Headers/SearchPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function SuggestDetail() {
  const [names,setNames]=useState([]);
  const [lengthss,setLengths]=useState();
  const [loading,setLoading]=useState();
  React.useEffect(() => {
    let isSubscribed = true;
    axios
      .get(
        'http://localhost:8080/api/getPhoto'
      )
      .then(Response => {
console.log(Response.data);
          if (Response.status === 200) {
            setNames(Response.data.response.body.items.item);
            setLengths(Response.data.response.body.items.length);
           ;
           // check if this component still mounted
           if (isSubscribed) {
             setLoading(false);
           }
         }
      });

      document.body.classList.add("search-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("search-page");
        document.body.classList.remove("sidebar-collapse");
        isSubscribed = false
      };
    

}, []);
    
 
    
     

 const namelist = ()=>{
    if(lengthss != '1'){
    names.map((name,index)=> {
      return (

      
        <div className="section section-nucleo-icons">
        <Container>
            <Row key={index}>
              <Col lg="6" md="12">
                <h2 className="title">{name.galTitle}</h2>
               <h5 className="description">
                 <img src= {name.galWebImageUrl}></img>
                </h5>
         
              </Col>
            </Row>
          </Container>
        </div>
    
    
     
   

      )
    }
 
    )
 
 }else{

 

     return (

     
       <div className="section section-nucleo-icons">
       <Container>
           <Row >
             <Col lg="6" md="12">
               <h2 className="title">{names.galTitle}</h2>
              <h5 className="description">
                <img src= {names.galWebImageUrl}></img>
               </h5>
        
             </Col>
           </Row>
         </Container>
       </div>
   
   
    
  

     )
  



 }
 }


  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <SearchPageHeader />
        <div className="main">
        {namelist}
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default SuggestDetail;
