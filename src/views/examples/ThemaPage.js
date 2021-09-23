import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function ThemaPage() {

  React.useEffect(() => {
    document.body.classList.add("thema-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("thema-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login.jpg").default + ")",
          }}
        ></div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default ThemaPage;