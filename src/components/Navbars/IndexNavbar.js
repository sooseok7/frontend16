import React from "react";

import AuthenticationService from '../../jwtlogin/AuthenticationService.js'
// reactstrap components
import {
  // Button,
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
  // UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
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
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
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
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="black">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="index"
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
            {isUserLoggedIn && <NavItem>
              <NavLink
              href="../test-page"
            >
             <p>여행성향테스트</p>
            </NavLink>
              </NavItem>}

              {isUserLoggedIn && <NavItem>
              <NavLink
              href="tour-page"
            >
             <p>전국여행</p>
              </NavLink>
              </NavItem>}

              {isUserLoggedIn && <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <p>테마여행</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem
                    href="../music-page"
                  >
                    <p>음악여행</p>
                  </DropdownItem>
                  <DropdownItem
                    href="../walking-page"
                  >
                    <p>뚜벅여행</p>
                  </DropdownItem>
                  <DropdownItem href="../picture-page"
                  >
                  <p>사진여행</p>
                  </DropdownItem>
                  <DropdownItem
                    href="../camping-page"
                  >
                    <p>캠핑여행</p>
                  </DropdownItem>
                  <DropdownItem
                    href="
                    ../food-page"
                  >
                    <p>맛집여행</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>}

              {isUserLoggedIn && <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <p>게시판</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem href="../board-page"
                  >
                  <p>자유게시판</p>
                  </DropdownItem>
                  <DropdownItem href="qna-page"
                  >
                  <p>질문게시판</p>
                  </DropdownItem>
                  <DropdownItem
                    href="../picchung-page"
                    // target="_blank"
                  >
                    <p>사진게시판</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>}

              {isUserLoggedIn && <NavItem>
              <NavLink
              href="../calendars"
            >
                  <p>달력</p>
                </NavLink>
                </NavItem>}

                {!isUserLoggedIn && <NavItem>
                  <NavLink
                  href="../login-page"
                  // target="_blank"
                  >
                    <p>로그인</p>
                    </NavLink>
                    </NavItem>}
                    
                    {isUserLoggedIn && <NavItem>
                      <NavLink
                      href="../../login-page"
                      onClick={AuthenticationService.logout}
                      >
                        <p>로그아웃</p>
                        </NavLink>
                      </NavItem>}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
