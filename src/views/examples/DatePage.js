import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DatePageHeader from "components/Headers/DatePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";




function DatePage() {


  React.useEffect(() => {
    document.body.classList.add("date-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("date-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <DatePageHeader />
                  {/* <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png").default}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png").default}
              ></img>
            </a>
            .
          </h6> */}
        <DarkFooter />
      </div>
    </>
  );
}

export default DatePage;