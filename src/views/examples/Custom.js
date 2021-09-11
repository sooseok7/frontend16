import React ,{useState}from "react";
import axios from "axios";
// reactstrap components
import {Container, Button, Input } from "reactstrap";

// core components

function Custom() {
   const [Schedules, setSchedule] = useState({
     id:"",
     startdate:"",
     enddate:"",
     title:"",
     alldat:"false"
    }
   );
  let pageHeader = React.createRef();



 
  const f3 = async () => {
    console.log(Schedules);
    axios.post('http://localhost:8080/api/saveschedule', Schedules)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }



  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
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
            alldat:Schedules.alldat})}


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
            alldat:Schedules.alldat})}
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
            alldat:Schedules.alldat})}
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