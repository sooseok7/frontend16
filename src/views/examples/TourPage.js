import React from "react";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function TourPage() {

  React.useEffect(() => {
    document.body.classList.add("tour-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("tour-page");
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
        >

        </div>
        <div class="zone_wrap">
          <div class="tit">
            <h2 id="zoneTitle">서울</h2>
          </div>
        {/* type0 클래스 수정 */}
        <div class="swiper-container2 type0" id="zoneArr"></div>
          {/* dot 0개일경우 class type1, dot 1개일경우 class type1, dot 2개일경우 class type2,
          dot 3개일경우 class type3 */}
          {/* //type0 클래스 수정 */}
          <div class="swiper-wrapper">
            <div id="zone1" class="swiper-slide on" data-areacode="1">
              <button type="button">서울</button>
              <span class="selected_text blind">선택됨</span>
          </div>
          <div id="zone2" class="swiper-slide" data-areacode="6">
              <button type="button">부산</button>
          </div>
          <div id="zone3" class="swiper-slide" data-areacode="4">
              <button type="button">대구</button>
          </div>
          <div id="zone4" class="swiper-slide" data-areacode="2">
              <button type="button">인천</button>
          </div>
          <div id="zone5" class="swiper-slide" data-areacode="5">
              <button type="button">광주</button>
          </div>
          <div id="zone6" class="swiper-slide" data-areacode="3">
              <button type="button">대전</button>
          </div>
          <div id="zone7" class="swiper-slide" data-areacode="7">
              <button type="button">울산</button>
          </div>
          <div id="zone8" class="swiper-slide" data-areacode="8">
              <button type="button">세종</button>
          </div>
          <div id="zone9" class="swiper-slide" data-areacode="31">
              <button type="button">경기</button>
          </div>
          <div id="zone10" class="swiper-slide" data-areacode="32">
              <button type="button">강원</button>
          </div>
          <div id="zone11" class="swiper-slide" data-areacode="33">
              <button type="button">충북</button>
          </div>
          <div id="zone12" class="swiper-slide" data-areacode="34">
              <button type="button">충남</button>
          </div>
          <div id="zone13" class="swiper-slide" data-areacode="37">
              <button type="button">전북</button>
          </div>
          <div id="zone14" class="swiper-slide" data-areacode="38">
              <button type="button">전남</button>
          </div>
          <div id="zone15" class="swiper-slide" data-areacode="35">
              <button type="button">경북</button>
          </div>
          <div id="zone16" class="swiper-slide" data-areacode="36">
              <button type="button">경남</button>
          </div>
          <div id="zone17" class="swiper-slide" data-areacode="39">
              <button type="button">제주</button>
          </div>
        </div>
        <div class="zone_box">
            <div class="box_logo" id="boxLogo">
              <a href="javascript:goAreaLogo(1,'http://korean.visitseoul.net');" class="logo" title="서울 홈페이지 새 창 열림">
                {/* <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=57761821-2056-4a2c-849a-7c4d00c1c623"
                alt="서울" style="width: 34px; height:36px"> */}
                  <strong class="name">서울</strong>
              </a>
            <p id="pLogo">
              <a href="javascript:goAreaLogo(1, 'http://korean.visitseoul.net');">너와 나의 서울
              </a>
            </p>
            </div>
            {/* 
            1. 하나의 div.zone_cont 안에 각각의 데이터가 새로 적용 되는 방식
            2. 탭 메뉴 클릭시 해당되는 컨텐츠에 클래스 zoneCont1~15가 추가되면서
            display:block 이 된다.
            */}
            <div class="zoneCont1 zone_cont on">
              <div class="area_mid" id="areamid">
                {/* <a href="javascript:goAreaFeed("온택트강남페스티벌", "희망으로의 한걸음!<br/>강남전역은 강남페스티벌 무대",
                "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=fe453d08-14c6-4126-ae79-e576edeba486", "1", "0", "main"");" class="img">
                  <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=725eb1dc-3b77-406f-9854-d3c8f3d4159c" alt="온택트강남페스티벌">
                </a>
                </div> */}
                </div>
              <div class="area_left" id="arealeft">
                <span>
                  "MY AREA FEED"
                  </span>
                  <div class="txt_info">
                  </div>
              </div>
              <div id="arearight">
                <div id="area-right" id="area3">
                  <ul>
                    <li class="obj1 clfix">
                      {/* <div>
                        <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
                        <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
                        "필름카메라📷의 매력"
                        </a>
                      </div> */}
                    </li>
                    <li class="obj2 clfix">
                      {/* <div>
                        <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
                        <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
                        "필름카메라📷의 매력"
                        </a>
                      </div> */}
                    </li>
                    <li class="obj2 clfix">
                      {/* <div>
                        <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
                        <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
                        "필름카메라📷의 매력"
                        </a>
                      </div> */}
                      {/* 4개일때 */}
                    </li>
                  </ul>
                
                </div>
                
              </div>
              <div id="arearight">
                <div id="area-right" id="area4">
                  <ul>
                    <li class="obj1 clfix">
                      {/* <div>
                        <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
                        <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
                        "필름카메라📷의 매력"
                        </a>
                      </div> */}
                    </li>
                    <li class="obj2 clfix">
                      {/* <div>
                        <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
                        <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
                        "필름카메라📷의 매력"
                        </a>
                      </div> */}
                    </li>
                    <li class="obj3 clfix">
                      {/* <div>
                        <a href="javascript:goAreaFeed("필름카메라📷의 매력", "사진으로 추억을 담다. 아날로그 기록", "https://blog.naver.com/haechiseoul/222485782561", "1", "0", "list");" title="새창열림">
                        <strong class="bn_txtR">사진으로 추억을 담다. 아날로그 기록</strong>
                        "필름카메라📷의 매력"
                        </a>
                      </div> */}
                      {/* 5개일때 */}
                    </li>
                  </ul>
                
                </div>
                
              </div>
              <div class="list_sub">
                <div class="inr">
                  <ul class="clfix" id="sigungulist">
                    <li>
                      <a href="#" title="강남구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="강동구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="강북구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="강서구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="관악구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="광진구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="구로구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="금천구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="노원구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="도봉구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동대문구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동작구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="마포구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li><li>
                      <a href="#" title="서대문구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="서초구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="성동구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="성북구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="송파구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="양천구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="영등포구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="용산구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="은평구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="종로구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="중구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="중량구 문화관광 홈페이지_새창">강남구
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="button" class="btn_more">더보기</button>
              </div>
          </div> 
        </div>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default TourPage;