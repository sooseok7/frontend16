import React from "react";
import MusicResult from '../../MusicResult.js';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function MusicPage() {

  React.useEffect(() => {
    document.body.classList.add("music-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("music-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
    //https://www.youtube.com/results?search_query=
  const Musiclists= MusicResult.map(music=> {
           const channelurl="https://www.youtube.com/channel/"+ music.channel
           const viewurl="https://www.youtube.com/watch?v="+music.id
        return(
          <div className="section3 section-nucleo-icons">

          <Container>
              <Row>
                <Col lg="6" md="12">
                  <h2 className="title">{music.name}</h2>
                 <h5 className="description">
                 &nbsp;{music.example}
                  </h5>
                  <Button
                    className="btn-detail"
                    color="info"
                    size="lg"
                    href = {viewurl}
                    target="_blank"
                  > 들어보기
                  </Button>
                  <Button
                    className="btn-detail"
                    color="info"
                    href={channelurl}
                    size="lg"
                    target="_blank"
                  >
                    채널이동
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
       );
      }
);


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
                <div className="content-center">
          <Container>
            <h1 className="title">Music Trip</h1>
          </Container>
        </div>
      </div>



      </><div class="zone_wrap">
        <div class="list_zone">
          <div class="tit">
          </div>
          {Musiclists}

      
      </div>
      </div>
      <DarkFooter /></>
  );
}

export default MusicPage;