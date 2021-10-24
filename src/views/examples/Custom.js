import React ,{useState}from "react";
import axios from "axios";
// reactstrap components
import {Container, Button, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import AuthenticationService from "../../jwtlogin/AuthenticationService.js";
// core components

function Custom() {
  const setupAxiosInterceptors=AuthenticationService.setupAxiosInterceptors();
  const {mode}=useParams();  
   const [Schedules, setSchedule] = useState({
     id:"",
     title:"",
     startdate:"",
     enddate:"",
     alldat:false,
     userid:"test"
    }
   );
  
  let pageHeader = React.createRef();



 
  const f3 = async () => {
    if(!Schedules.title){
      window.confirm("제목을 작성해주세요");
    }else if(Schedules.startdate >= Schedules.enddate){
      window.confirm("시작날짜를 종료날짜 이후로 설정해주세요");
    }
    else{
    if(mode == "new"){
      if(window.confirm("저장하시겠습니까?")){
    axios.post('/api/saveschedule', Schedules)
  .then(function (response) {
    //console.log(response);
    window.open("about:blank", "_self");
    window.location.href ='../calendars'
  })
  .catch(function (error) {
    //console.log(error);
  });}
}else{
  if(!Schedules.title){
  window.confirm("제목을 작성해주세요");
}else{
  if(window.confirm("수정하시겠습니까?")){
  axios.put('/api/updateschedule/'+ Schedules.id, Schedules)
  .then(function (response) {
    //console.log(response);
    window.open("about:blank", "_self");
    window.location.href ='../calendars'
  })
  .catch(function (error) {
    //console.log(error);
  });}
}}}}

  const f4 = async () => {
    //console.log(Schedules);
    if(mode != "new"){
      if(window.confirm("삭제하시겠습니까?")){
    axios.delete('/api/deleteschedule/'+mode)
  .then(function (response) {
    //console.log(response);
    window.open("about:blank", "_self");
    window.location.href ='../calendars'}
  )
  .catch(function (error) {
    //console.log(error);
  });}
}
  }

function Buttons(){
  if(mode == "new"){
    return (
      <div><Button
      block
      className="btn-round"
      color="white"
      onClick={f3}
      size="lg"
      >
          등록
          </Button></div>
      
    )
  }else if(mode !="new"){
    return(
      <div>
  <Button
      block
      className="btn-round"
      color="white"
      onClick={f3}
      size="lg"
      >
          수정
          </Button>
            <Button
            block
            className="btn-round"
            color="white"
            // href=""
            onClick={f4}
            size="lg"
            >
                삭제
            </Button>
      </div>
    )
  }
}


  React.useEffect(() => {
    let isSubscribed = true;
     if(mode !="new"){

axios
.get('/api/getschedulebyNum/'+mode)
.then(( Response ) => setSchedule(Response.data));
     }
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
  },[]);
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
            maxlength="14"
            type="text"
            value={Schedules.title}
            onChange={({ target: { value } }) =>
             setSchedule({
              id:Schedules.id,
     title:value,
     startdate:Schedules.startdate,
     enddate:Schedules.enddate,
     alldat:Schedules.alldat,
     userid:Schedules.userid
        })
        }


            ></Input></h2>
            <h2>시작날짜<Input
            placeholder="시작날짜..."
            type="datetime-local"
            name="startdate"
            value={Schedules.startdate}
            onChange={({ target: { value } }) => setSchedule({
              id:Schedules.id,
              title:Schedules.title,
              startdate:value,
              enddate:Schedules.enddate,
              alldat:Schedules.alldat,
              userid:Schedules.userid})}
            ></Input></h2>
            <h2>종료날짜<Input
            placeholder="종료날짜..."
            value={Schedules.enddate}
            type="datetime-local"
            name="enddate"
            onChange={({ target: { value } }) => setSchedule({
              id:Schedules.id,
              title:Schedules.title,
              startdate:Schedules.startdate,
              enddate:value,
              alldat:Schedules.alldat,
              userid:Schedules.userid})}
            ></Input></h2>
            <br/>
            {/* <Button
            block
            className="btn-round"
            color="white"
            // href=""
            onClick={f3}
            size="lg"
            >
                등록
                </Button> */}
          {Buttons()}
          </Container>
        </div>
      </div>
    </>
  );
}

export default Custom;