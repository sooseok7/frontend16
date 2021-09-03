import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ResultPageHeader from "components/Headers/ResultPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
// import BasicElements from "./index-sections/BasicElements.js";
// import Pagination from "./index-sections/Pagination.js";
// import Carousel from "./index-sections/Carousel.js";

function ResultPage() {
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
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ResultPageHeader />
        {/* <div className="main">
          <BasicElements />
          <Pagination />
          <Carousel />
        </div> */}
        <DarkFooter />
      </div>
    </>
  );
}

export default ResultPage;