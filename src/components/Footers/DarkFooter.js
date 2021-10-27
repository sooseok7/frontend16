/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
              >
                개인정보처리방침
              </a>
            </li>
            <li>
              <a
                href="#"
              >
                이용약관
              </a>
            </li>
            <li>
              <a
                href="#"
              >
                저작권정책
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          ©2MonthsAgo
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
