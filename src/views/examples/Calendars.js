import React from "react";
import  { Calendar, momentLocalizer  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from "moment";

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
  const localizer = momentLocalizer(moment)



  React.useEffect(() => {
    document.body.classList.add("search-page");
  document.body.classList.add("sidebar-collapse");
  document.documentElement.classList.remove("nav-open");
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("result-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
const myEventsList = 
  [
    {
      title:"출근",
      allDat:false,
      start: new Date(2021,9,9,10,0),
      end: new Date(2021,9,9,10,30)
    },
    {
      title:"퇴근",
      allDat:false,
      start: new Date(2021,12,9,10,0),
      end: new Date(2021,12,9,10,30)
    }
  ];

   
 
const Calendarfinal = () =>{
  return(
  <div>
      <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 750 ,margin: 10 }}
    />
    

  </div>
  )
  }


  return (
    <>
    
    <div>
    <ExamplesNavbar />
        <DatePageHeader />
        <Calendarfinal />
        <DarkFooter />
      </div>
    </>
  );
}

export default Calendars;