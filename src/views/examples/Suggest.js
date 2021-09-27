// import React, { useState } from "react";
// import axios from 'axios';
// // reactstrap components
// import { Button, Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

// // core components

// function Suggest() {
//   const [names,setNames]=useState([]);
  
//   //const [addresss,setLocationObj] =useState({
//   //  locationfinal:""
//   //});
//   //const [max,setMax] =useState(0);
//  axios.get('http://localhost:8080/api/getinformation'
//  )
//  .then((Response)=>
//  //console.log(Response.data.response.body.items)
//    setNames(Response.data.response.body.items)
//     //for(max = 0; max < Response.data.response.body.items.length; max++) {
//       // console.log(index, JSON.stringify(Response.data.response.body.items[index]));
//       //let read = JSON.stringify(Response.data.response.body.items[index]);
//       //let data = JSON.parse(read);
//      //names.push(data);
//        //console.log(data);
//     //}
//     //console.log(Response.data.response.body.items[1])
//     )
//     //setNames({name:Response.data.response.body.items.item[1].areaNm, daywkDivNm:Response.data.response.body.items.item[1].daywkDivNm})})
//   .catch((Error)=>{console.log(Error)});


//   let isSubscribed = true;

//     axios.get('http://localhost:8080/api/getinformation'
//     )
//     .then((Response)=>{
//     if (Response.status === 200) {
//       setNames(Response.data.response.body.items)
     
//       const result = QuestionResult.filter(kk => kk.mbti === testresult)
//       console.log(result)
//      result.map( ii => {
//       setNums(ii.num)
//      })

//      // check if this component still mounted
//      if (isSubscribed) {
//       isSubscribed=false;
//      }
//     }
//   })
//    // console.log(Response.data.response.body.items)
// .catch((Error)=>{console.log(Error)});

//   const namelist = names.map((name,index)=> {
//     const searchurl="https://search.daum.net/search??w=tot&&q="+ name.trrsrtNm 
//     const mapurl="https://map.kakao.com/link/to/,"+name.trrsrtNm+"," +name.latitude+","+name.longitude
//     const link = "/suggestdetail/"+ name.trrsrtNm 
//     return (

      
//       <div className="section3 section-nucleo-icons">
//       <Container>
//           <Row key={index}>
//             <Col lg="6" md="12">
//               <h2 className="title">{name.trrsrtNm}   <div className="suggestdetail"><Link to={link} > +날씨 &nbsp;</Link><Link to={link} > +사진</Link></div></h2>
//              <h5 className="description">
//                 {name.trrsrtIntrcn}
//               </h5>
//               <Button
//                 className="btn-detail"
//                 color="info"
//                 size="lg"
//                 href = {searchurl}
//                 target="_blank"
//               > 자세히
//               </Button>
//               <Button
//                 className="btn-direction"
//                 color="info"
//                 href={mapurl}
//                 outline
//                 size="lg"
//                 target="_blank"
//               >
//                 길찾기
//               </Button>
            
//             </Col>
//           </Row>
//         </Container>
//       </div>
    
    
     
   

//     )
//   }
  
  
// );

//   return (

//     <>
//     <div>
//   {namelist}
//     </div>
//   </>
  
   
    
//   );
// }

// export default Suggest;
