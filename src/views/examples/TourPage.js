import React from "react";
import axios from "axios";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function TourPage() {

  let location = "";
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

  // function handleSubmit(e)

  const location1 = async () => {
    location = "Seoul";
   }
   const location2 = async () => {
    location = "Busan";
  }
  const location3 = async () => {
    location = "Daegu";
  }
  const location4 = async () => {
    location = "Incheon";
  }
  const location5 = async () => {
    location = "Gwangju";
  }
  const location6 = async () => {
    location = "Daejeon";
  }
  const location7 = async () => {
    location = "Ulsan";
  }
  const location8 = async () => {
    location = "Sejong";
  }
  const location9 = async () => {
    location = "Gyeong-gi";
  }
  const location10 = async () => {
    location = "Gang-won";
  }
  const location11 = async () => {
    location = "Chungbug";
  }
  const location12 = async () => {
    location = "Chungnam";
  }
  const location13 = async () => {
    location = "Jeonbug ";
  }
  const location14 = async () => {
    location = "Jeonnam";
  }
  const location15 = async () => {
    location = "Gyeongbug";
  }
  const location16 = async () => {
    location = "Gyeongnam";
  }
  const location17 = async () => {
    location = "Jeju";
  }

//     if(mode==='new'){ //new
//      axios.post('http://localhost:8080/api/board', Board)
//    .then(function (response) {
//      console.log(response);
//      window.location.href ='http://localhost:3000/boardread/'+response.data.idx
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
//  }else { //update
//    axios.put('http://localhost:8080/api/board/'+Board.idx, Board)
//    .then(function (response) {
//      console.log(response);
//      window.location.href ='http://localhost:3000/boardread/'+Board.idx
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
// }



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
        </div>
        <div class="zone_wrap">
         <div class="list_zone">
          <div class="tit">
            <h2 id="zoneTitle">{location}</h2>
          </div>
        {/* type0 클래스 수정 */}
        <div class="swiper-container2 type0" id="zoneArr">
          {/* dot 0개일경우 class type1, dot 1개일경우 class type1, dot 2개일경우 class type2,
          dot 3개일경우 class type3 */}
          {/* //type0 클래스 수정 */}
          <div class="swiper-wrapper">
            <div id="zone1" class="swiper-slide" data-areacode="1">
              <button type="button" onClick={location1}>서울</button>
              {/* <span class="selected_text blind">선택됨</span> */}
            </div>
          <div id="zone2" class="swiper-slide" data-areacode="6">
              <button type="button" onClick={location2}>부산</button>
          </div>
          <div id="zone3" class="swiper-slide" data-areacode="4">
              <button type="button" onClick={location3}>대구</button>
          </div>
          <div id="zone4" class="swiper-slide" data-areacode="2">
              <button type="button" onClick={location4}>인천</button>
          </div>
          <div id="zone5" class="swiper-slide" data-areacode="5">
              <button type="button" onClick={location5}>광주</button>
          </div>
          <div id="zone6" class="swiper-slide" data-areacode="3">
              <button type="button" onClick={location6}>대전</button>
          </div>
          <div id="zone7" class="swiper-slide" data-areacode="7">
              <button type="button" onClick={location7}>울산</button>
          </div>
          <div id="zone8" class="swiper-slide" data-areacode="8">
              <button type="button" onClick={location8}>세종</button>
          </div>
          <div id="zone9" class="swiper-slide" data-areacode="31">
              <button type="button" onClick={location9}>경기</button>
          </div>
          <div id="zone10" class="swiper-slide" data-areacode="32">
              <button type="button" onClick={location10}>강원</button>
          </div>
          <div id="zone11" class="swiper-slide" data-areacode="33">
              <button type="button" onClick={location11}>충북</button>
          </div>
          <div id="zone12" class="swiper-slide" data-areacode="34">
              <button type="button" onClick={location12}>충남</button>
          </div>
          <div id="zone13" class="swiper-slide" data-areacode="37">
              <button type="button" onClick={location13}>전북</button>
          </div>
          <div id="zone14" class="swiper-slide" data-areacode="38">
              <button type="button" onClick={location14}>전남</button>
          </div>
          <div id="zone15" class="swiper-slide" data-areacode="35">
              <button type="button" onClick={location15}>경북</button>
          </div>
          <div id="zone16" class="swiper-slide" data-areacode="36">
              <button type="button" onClick={location16}>경남</button>
          </div>
          <div id="zone17" class="swiper-slide" data-areacode="39">
              <button type="button" onClick={location17}>제주</button>
          </div>
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
            <div class="zoneCont2 zone_cont on">
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
                      <a href="#" title="강서구 문화관광 홈페이지_새창">강서구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="금정구 문화관광 홈페이지_새창">금정구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="기장구 문화관광 홈페이지_새창">기장구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="남구 문화관광 홈페이지_새창">남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동구 문화관광 홈페이지_새창">동구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동래구 문화관광 홈페이지_새창">동래구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="부산진구 문화관광 홈페이지_새창">부산진구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="북구 문화관광 홈페이지_새창">북구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="사상구 문화관광 홈페이지_새창">사상구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="사하구 문화관광 홈페이지_새창">사하구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="서구 문화관광 홈페이지_새창">서구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="수영구 문화관광 홈페이지_새창">수영구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="연제구 문화관광 홈페이지_새창">연제구
                      </a>
                    </li><li>
                      <a href="#" title="영도구 문화관광 홈페이지_새창">영도구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="중구 문화관광 홈페이지_새창">중구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="해운대구 문화관광 홈페이지_새창">해운대구
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont3 zone_cont on">
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
                      <a href="#" title="남구 문화관광 홈페이지_새창">남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="달서구 문화관광 홈페이지_새창">달서구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="달성구 문화관광 홈페이지_새창">달성구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동구 문화관광 홈페이지_새창">동구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="북구 문화관광 홈페이지_새창">북구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="서구 문화관광 홈페이지_새창">서구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="수성구 문화관광 홈페이지_새창">수성구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="중구 문화관광 홈페이지_새창">중구
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont4 zone_cont on">
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
                      <a href="#" title="강화군 문화관광 홈페이지_새창">강화군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="계양구 문화관광 홈페이지_새창">계양구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="미추홀구 문화관광 홈페이지_새창">미추홀구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="남동구 문화관광 홈페이지_새창">남동구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동구 문화관광 홈페이지_새창">동구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="부평구 문화관광 홈페이지_새창">부평구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="서구 문화관광 홈페이지_새창">서구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="연수구 문화관광 홈페이지_새창">연수구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="옹진구 문화관광 홈페이지_새창">옹진구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="중구 문화관광 홈페이지_새창">중구
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont5 zone_cont on">
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
                      <a href="#" title="광산구 문화관광 홈페이지_새창">광산구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="남구 문화관광 홈페이지_새창">남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동구 문화관광 홈페이지_새창">동구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="북구 문화관광 홈페이지_새창">북구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="서구 문화관광 홈페이지_새창">서구
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont6 zone_cont on">
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
                      <a href="#" title="대덕구 문화관광 홈페이지_새창">대덕구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동구 문화관광 홈페이지_새창">동구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="서구 문화관광 홈페이지_새창">서구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="유성구 문화관광 홈페이지_새창">유성구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="중구 문화관광 홈페이지_새창">중구
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont7 zone_cont on">
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
                      <a href="#" title="중구 문화관광 홈페이지_새창">중구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="남구 문화관광 홈페이지_새창">남구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동구 문화관광 홈페이지_새창">동구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="북구 문화관광 홈페이지_새창">북구
                      </a>
                    </li>
                    <li>
                      <a href="#" title="울주군 문화관광 홈페이지_새창">울주군
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont8 zone_cont on">
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
                      <a href="#" title="세종시 문화관광 홈페이지_새창">세종시
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont9 zone_cont on">
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
                      <a href="#" title="가평군 문화관광 홈페이지_새창">가평군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="고양시 문화관광 홈페이지_새창">고양시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="과천시 문화관광 홈페이지_새창">과천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="광명시 문화관광 홈페이지_새창">광명시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="광주시 문화관광 홈페이지_새창">광주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="구리시 문화관광 홈페이지_새창">구리시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="군포시 문화관광 홈페이지_새창">군포시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="김포시 문화관광 홈페이지_새창">김포시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="남양주시 문화관광 홈페이지_새창">남양주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동두천시 문화관광 홈페이지_새창">동두천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="부천시 문화관광 홈페이지_새창">부천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="성남시 문화관광 홈페이지_새창">성남시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="수원시 문화관광 홈페이지_새창">수원시
                      </a>
                    </li><li>
                      <a href="#" title="시흥시 문화관광 홈페이지_새창">시흥시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="안산시 문화관광 홈페이지_새창">안산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="안성시 문화관광 홈페이지_새창">안성시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="얀양시 문화관광 홈페이지_새창">얀양시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="양주시 문화관광 홈페이지_새창">양주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="양평군 문화관광 홈페이지_새창">양평군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="여주시 문화관광 홈페이지_새창">여주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="연천군 문화관광 홈페이지_새창">연천군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="오산시 문화관광 홈페이지_새창">오산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="용인시 문화관광 홈페이지_새창">용인시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="의왕시 문화관광 홈페이지_새창">의왕시                      </a>
                    </li>
                    <li>
                      <a href="#" title="의정부시 문화관광 홈페이지_새창">의정부시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="이천시 문화관광 홈페이지_새창">이천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="파주시 문화관광 홈페이지_새창">파주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="평택시 문화관광 홈페이지_새창">평택시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="포천시 문화관광 홈페이지_새창">포천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="하남시 문화관광 홈페이지_새창">하남시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="화성시 문화관광 홈페이지_새창">화성시
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont10 zone_cont on">
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
                      <a href="#" title="강릉시 문화관광 홈페이지_새창">강릉시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="고성군 문화관광 홈페이지_새창">고성군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="동해시 문화관광 홈페이지_새창">동해시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="삼척시 문화관광 홈페이지_새창">삼척시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="속초시 문화관광 홈페이지_새창">속초시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="양구군 문화관광 홈페이지_새창">양구군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="양양군 문화관광 홈페이지_새창">양양군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="영월군 문화관광 홈페이지_새창">영월군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="원주시 문화관광 홈페이지_새창">원주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="인제군 문화관광 홈페이지_새창">인제군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="정선군 문화관광 홈페이지_새창">정선군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="철원군 문화관광 홈페이지_새창">철원군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="춘천시 문화관광 홈페이지_새창">춘천시
                      </a>
                    </li><li>
                      <a href="#" title="태백시 문화관광 홈페이지_새창">태백시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="평창군 문화관광 홈페이지_새창">평창군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="홍천군 문화관광 홈페이지_새창">홍천군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="화천군 문화관광 홈페이지_새창">화천군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="횡성군 문화관광 홈페이지_새창">횡성군
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont11 zone_cont on">
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
                      <a href="#" title="괴산군 문화관광 홈페이지_새창">괴산군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="단양군 문화관광 홈페이지_새창">단양군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="보은군 문화관광 홈페이지_새창">보은군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="영동군 문화관광 홈페이지_새창">영동군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="옥천군 문화관광 홈페이지_새창">옥천군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="음성군 문화관광 홈페이지_새창">음성군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="제천시 문화관광 홈페이지_새창">제천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="진천군 문화관광 홈페이지_새창">진천군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="청주시 문화관광 홈페이지_새창">청주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="충주시 문화관광 홈페이지_새창">충주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="증평군 문화관광 홈페이지_새창">증평군
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont12 zone_cont on">
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
                      <a href="#" title="공주시 문화관광 홈페이지_새창">공주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="금산군 문화관광 홈페이지_새창">금산군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="논산시 문화관광 홈페이지_새창">논산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="당진시 문화관광 홈페이지_새창">당진시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="보령시 문화관광 홈페이지_새창">보령시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="부여군 문화관광 홈페이지_새창">부여군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="서산시 문화관광 홈페이지_새창">서산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="아산시 문화관광 홈페이지_새창">아산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="예산군 문화관광 홈페이지_새창">예산군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="천안시 문화관광 홈페이지_새창">천안시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="청양군 문화관광 홈페이지_새창">청양군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="태안군 문화관광 홈페이지_새창">태안군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="홍성군 문화관광 홈페이지_새창">홍성군
                      </a>
                    </li><li>
                      <a href="#" title="계룡시 문화관광 홈페이지_새창">계룡시
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont13 zone_cont on">
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
                      <a href="#" title="고창시 문화관광 홈페이지_새창">고창시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="군산시 문화관광 홈페이지_새창">군산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="김제시 문화관광 홈페이지_새창">김제시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="남원시 문화관광 홈페이지_새창">남원시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="무주군 문화관광 홈페이지_새창">무주군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="부안군 문화관광 홈페이지_새창">부안군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="순창군 문화관광 홈페이지_새창">순창군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="완주군 문화관광 홈페이지_새창">완주군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="익산시 문화관광 홈페이지_새창">익산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="임실군 문화관광 홈페이지_새창">임실군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="장수군 문화관광 홈페이지_새창">장수군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="전주시 문화관광 홈페이지_새창">전주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="정읍시 문화관광 홈페이지_새창">정읍시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="진안군 문화관광 홈페이지_새창">진안군
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont14 zone_cont on">
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
                      <a href="#" title="강진군 문화관광 홈페이지_새창">강진군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="고흥군 문화관광 홈페이지_새창">고흥군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="곡성군 문화관광 홈페이지_새창">곡성군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="광양시 문화관광 홈페이지_새창">광양시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="구례군 문화관광 홈페이지_새창">구례군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="나주시 문화관광 홈페이지_새창">나주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="담양군 문화관광 홈페이지_새창">담양군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="목포시 문화관광 홈페이지_새창">목포시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="무안군 문화관광 홈페이지_새창">무안군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="보성군 문화관광 홈페이지_새창">보성군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="순천시 문화관광 홈페이지_새창">순천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="신안군 문화관광 홈페이지_새창">신안군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="여수시 문화관광 홈페이지_새창">여수시
                      </a>
                    </li><li>
                      <a href="#" title="영광군 문화관광 홈페이지_새창">영광군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="영암군 문화관광 홈페이지_새창">영암군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="완도군 문화관광 홈페이지_새창">완도군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="장성군 문화관광 홈페이지_새창">장성군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="장흥군 문화관광 홈페이지_새창">장흥군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="진도군 문화관광 홈페이지_새창">진도군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="함평군 문화관광 홈페이지_새창">함평군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="해남군 문화관광 홈페이지_새창">해남군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="화순군 문화관광 홈페이지_새창">화순군
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont15 zone_cont on">
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
                      <a href="#" title="경산시 문화관광 홈페이지_새창">경산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="경주시 문화관광 홈페이지_새창">경주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="고령군 문화관광 홈페이지_새창">고령군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="구미시 문화관광 홈페이지_새창">구미시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="군위군 문화관광 홈페이지_새창">군위군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="김천시 문화관광 홈페이지_새창">김천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="문경시 문화관광 홈페이지_새창">문경시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="봉화군 문화관광 홈페이지_새창">봉화군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="상주시 문화관광 홈페이지_새창">상주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="성주군 문화관광 홈페이지_새창">성주군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="안동시 문화관광 홈페이지_새창">안동시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="영덕군 문화관광 홈페이지_새창">영덕군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="영양군 문화관광 홈페이지_새창">영양군
                      </a>
                    </li><li>
                      <a href="#" title="영주시 문화관광 홈페이지_새창">영주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="영천시 문화관광 홈페이지_새창">영천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="예천군 문화관광 홈페이지_새창">예천군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="울릉군 문화관광 홈페이지_새창">울릉군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="울진군 문화관광 홈페이지_새창">울진군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="의성군 문화관광 홈페이지_새창">의성군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="청도군 문화관광 홈페이지_새창">청도군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="청송군 문화관광 홈페이지_새창">청송군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="칠곡군 문화관광 홈페이지_새창">칠곡군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="포항시 문화관광 홈페이지_새창">포항시
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont16 zone_cont on">
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
                      <a href="#" title="거제시 문화관광 홈페이지_새창">거제시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="거창군 문화관광 홈페이지_새창">거창군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="고성군 문화관광 홈페이지_새창">고성군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="김해시 문화관광 홈페이지_새창">김해시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="남해군 문화관광 홈페이지_새창">남해군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="밀양시 문화관광 홈페이지_새창">밀양시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="사천시 문화관광 홈페이지_새창">사천시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="산청군 문화관광 홈페이지_새창">산청군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="양산시 문화관광 홈페이지_새창">양산시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="의령군 문화관광 홈페이지_새창">의령군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="진주시 문화관광 홈페이지_새창">진주시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="창녕군 문화관광 홈페이지_새창">창녕군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="창원시 문화관광 홈페이지_새창">창원시
                      </a>
                    </li><li>
                      <a href="#" title="통영시 문화관광 홈페이지_새창">통영시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="하동군 문화관광 홈페이지_새창">하동군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="함안군 문화관광 홈페이지_새창">함안군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="함양군 문화관광 홈페이지_새창">함양군
                      </a>
                    </li>
                    <li>
                      <a href="#" title="합천군 문화관광 홈페이지_새창">합천군
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="zoneCont17 zone_cont on">
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
                      <a href="#" title="서귀포시 문화관광 홈페이지_새창">서귀포시
                      </a>
                    </li>
                    <li>
                      <a href="#" title="제주시 문화관광 홈페이지_새창">제주시
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default TourPage;