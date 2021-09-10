import React from "react";

// reactstrap components
import {Container, Button, Input } from "reactstrap";

// core components

function Custom() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg5.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">당신의 일정을 입력해주세요</h1><br/>
            <h4>제목<Input
            placeholder="제목..."
            type="text"
            ></Input></h4>
            <h4>시작날짜<Input
            placeholder="시작날짜..."
            type="date"
            ></Input></h4>
            <h4>종료날짜<Input
            placeholder="종료날짜..."
            type="date"
            ></Input></h4>
            <h4>장소<Input
            placeholder="장소..."
            type="text"
            ></Input></h4>
            <br/>
            <Button
            block
            className="btn-round"
            color="white"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            >
                등록
                </Button>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Custom;