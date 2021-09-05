import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Suggest() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">여행지이름</h2>
              <h5 className="description">
                설명
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                자세히
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                길찾기
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Suggest;
