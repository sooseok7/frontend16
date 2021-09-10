import React from "react";
// reactstrap components


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Custom() {
 
  React.useEffect(() => {
    document.body.classList.add("custom");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("custom");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="main">
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Custom;

//제목 및 시간추가 //겉으로는 이것만 뜨도록

//시간

//장소

//