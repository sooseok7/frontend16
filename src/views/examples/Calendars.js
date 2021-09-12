import React, { useState } from "react";
import  { Calendar, momentLocalizer  } from 'react-big-calendar'; //여기에서 이미 calendar를 ㅓimport 할 수 있게 해놓음 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment"; // 밑에 언어랑 시간대 가져옴
//import Anyday from '../../Anyday';
import axios from 'axios';



// reactstrap components
// import {
// } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DatePageHeader from "components/Headers/DatePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// sections for this page
// import BasicElements from "./index-sections/BasicElements.js";
// import Pagination from "./index-sections/Pagination.js";
// import Carousel from "./index-sections/Carousel.js";

function Calendars() {
  const [names,setNames]=useState([]);
  const localizer = momentLocalizer(moment); // 위에 import
  /*const [addresss,setLocationObj] =useState({
    locationfinal:""
  });
  const [max,setMax] =useState(0);
  const [loading,setLoading]=useState();

  */
  React.useEffect(() => {
    let isSubscribed = true;
    axios.get('http://localhost:8080/api/getHoliDeInfo?yearss='+moment().year())
      .then(Response => {

     
          if (Response.status === 200) {
            
            setNames(Response.data.response.body.items.item);
            console.log(Response.data.response.body.items.item);
           // check if this component still mounted
           if (isSubscribed) {
             //setLoading(false);
           }
         }
      });
      document.body.classList.add("calendars");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("calendars");
          document.body.classList.remove("sidebar-collapse");
          isSubscribed = false
        };
   

}, []);
  

const events= names.map((data)=>{
 
  const datess= String(data.locdate).substring(0,4)+","+String(data.locdate).substring(4,6)+","+String(data.locdate).substring(6,8)
  console.log(datess)
  return {
   // id: training.id,
     
    title: data.dateName,
    start: new Date(datess),
    end: new Date(datess),
    alldat:true
  }
})


//const myEventsList=Anyday; // json으로 작성한거 임시로 넣어서 밑에 있는 이벤트로 들어감

const Calendarfinal = () =>{ 
  //위에 import로 이미 캘린더는 생성이 되었고 const가 변수선언이랑 비슷한건데 이걸 .. 컴포넌트? 로 해서 밑에 넣음
  console.log(events)
 // setYears()
  return(
  <div>
      <Calendar
      onSelectEvent={event => window.open("./custom")}
      localizer={localizer} //언어와 시간대
      events={events} //출퇴근 위에꺼 입력됨
      startAccessor="start" 
      endAccessor="end"
      style={{ height: 690 ,margin: 30 }}
    />
    

  </div>
  )
  }


  return (
    <>
    
    <div>
    <ExamplesNavbar />
        <DatePageHeader />
        <Calendarfinal /> {/* 여기에 걍 넣어준거 */}
        <DarkFooter />
      </div>
    </>
  );
}

export default Calendars;