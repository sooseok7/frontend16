import React ,{useState}from "react";
import axios from "axios";
// reactstrap components
import {Container, Button, Input } from "reactstrap";
import { useParams } from "react-router-dom";
// core components

function Custom() {
  const {mode}=useParams();  
   const [Schedules, setSchedule] = useState({
     id:"",
     startdate:"",
     enddate:"",
     title:"",
     alldat:"false",
     userid:"test"
    }
   );
  
  let pageHeader = React.createRef();



 
  const f3 = async () => {
    console.log(Schedules);
    if(mode == "new"){
    axios.post('http://localhost:8080/api/saveschedule', Schedules)
  .then(function (response) {
    console.log(response);
    window.open("about:blank", "_self");
    window.close();
  })
  .catch(function (error) {
    console.log(error);
  });
}else{
  axios.post('http://localhost:8080/api/updateschedule'+ Schedules.id, Schedules)
  .then(function (response) {
    console.log(response);
    window.open("about:blank", "_self");
    window.close();
  })
  .catch(function (error) {
    console.log(error);
  });
}
  }



  React.useEffect(() => {
    let isSubscribed = true;
//     if(mode !="new"){
      
//       axios.get('http://localhost:8080/api/getschedulebyNum/'+mode
//     )
//     .then((Response)=>{
//     if (Response.status === 200) {
//       if (isSubscribed) {
//         setSchedule(Response.data);
//         console.log(Response.data);
       
//        }
      
//     }
//   })
// .catch((Error)=>{console.log(Error)});

//     }
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
        isSubscribed = false;
      };
    }

    return function cleanup() {
      isSubscribed = false;
    };
  },[Schedules]);
  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg5.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">당신의 일정을 입력해주세요</h1><br/>
            <h2>제목<Input
            placeholder="제목..."
            type="text"
            name="title"

            onChange={({ target: { value } }) => setSchedule({
              title:value,
               id:Schedules.id,
            startdate:Schedules.startdate,
            enddate:Schedules.enddate,
            alldat:Schedules.alldat,
          userid:Schedules.userid})}


            ></Input></h2>
            <h2>시작날짜<Input
            placeholder="시작날짜..."
            type="datetime-local"
            name="startdate"
            onChange={({ target: { value } }) => setSchedule({
              title:Schedules.title,
               id:Schedules.id,
            startdate:value,
            enddate:Schedules.enddate,
            alldat:Schedules.alldat,
            userid:Schedules.userid})}
            ></Input></h2>
            <h2>종료날짜<Input
            placeholder="종료날짜..."
            type="datetime-local"
            name="enddate"
            onChange={({ target: { value } }) => setSchedule({
              title:Schedules.title,
               id:Schedules.id,
            startdate:Schedules.startdate,
            enddate:value,
            alldat:Schedules.alldat,
            userid:Schedules.userid})}
            ></Input></h2>
            <br/>
            <Button
            block
            className="btn-round"
            color="white"
            // href=""
            onClick={f3}
            size="lg"
            >
                등록
                </Button>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Custom;