import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Carousel from "views/examples/Carousel.js";

function PicchungPage() {

  React.useEffect(() => {
    document.body.classList.add("picchung-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("picchung-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <><>
      <ExamplesNavbar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login1.jpg").default + ")",
          }}
        ></div>
      </div>



    </><div class="zone_wrap">
        <div class="list_zone">
          <div class="tit">
            <h2 id="zoneTitle">테마별 여행</h2>
          </div>
          {/* type0 클래스 수정 */}
          <div class="swiper-container2 type0" id="zoneArr">
            {/* dot 0개일경우 class type1, dot 1개일경우 class type1, dot 2개일경우 class type2,
    dot 3개일경우 class type3 */}
            {/* //type0 클래스 수정 */}
            <div class="swiper-wrapper">
              <div id="zone1" class="swiper-slide2">
                <button type="button" href="#">사진여행</button>
                {/* <span class="selected_text blind">선택됨</span> */}
              </div>
              <div id="zone2" class="swiper-slide2">
                <button type="button" href="#">음악여행</button>
              </div>
              <div id="zone3" class="swiper-slide2">
                <button type="button" href="#">뚜벅여행</button>
              </div>
              <div id="zone4" class="swiper-slide2">
                <button type="button" href="#">캠핑여행</button>
              </div>
              <div id="zone5" class="swiper-slide2">
                <button type="button" href="#">독서여행</button>
              </div>
              <div id="zone6" class="swiper-slide2">
                <button type="button" href="#">축제여행</button>
              </div>
              <div id="zone7" class="swiper-slide2">
                <button type="button" href="#">세계여행</button>
              </div>
              <div id="zone9" class="swiper-slide2">
                <button type="button" href="#">한국여행</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Carousel />
      <DarkFooter /></>
  );
}

export default PicchungPage;