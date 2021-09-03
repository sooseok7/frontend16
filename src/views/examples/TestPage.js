import React from "react";

// reactstrap components


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TestPageHeader from "components/Headers/TestPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function TestPage() {
  React.useEffect(() => {
    document.body.classList.add("test-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("test-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <TestPageHeader />
         <div className="section section-team text-center">
          






        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default TestPage;
