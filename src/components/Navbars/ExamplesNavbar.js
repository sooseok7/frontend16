import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  //UncontrolledTooltip,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
        <div className="navbar-translate">
            <NavbarBrand
              href="http://localhost:3000/index"
              // target="_blank" 새창
              id="navbar-brand"
            >
              Travel16
            </NavbarBrand>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
             <Nav navbar>
              <NavItem>
              <NavLink
              href="http://localhost:3000/landing-page"
            >
             <p>여행성향테스트</p>
            </NavLink>
              </NavItem>

              <NavItem>
              <NavLink
              href="http://localhost:3000/profile-page"
            >
             <p>여행지 추천</p>
              </NavLink>
              </NavItem>

              <NavItem>
              <NavLink
              href="http://localhost:3000/landing-page"
            >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i>    아이콘 */}
                  <p>달력</p>
                </NavLink>
              </NavItem>

              <NavItem>
              <NavLink
              href="http://localhost:3000/landing-page"
            >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i>    아이콘 */}
                  <p>게시판</p>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                
                  <p>마이페이지</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                  <p>정보수정</p>
                  </DropdownItem>
                  <DropdownItem
                    href="http://localhost:3000/login-page"
                    // target="_blank"
                  >
                    <p>로그아웃</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
