import React ,{useState } from "react";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {
    const [User, setUser] = useState({
      username:"",
      password:"",
      role: "ROLE_USER"
});
    React.useEffect(() => {
      document.body.classList.add("login-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("login-page");
        document.body.classList.remove("sidebar-collapse");
      };
    }, []);

    const inputmember = async () => {
      if(User.username == User.password){
        window.confirm("아이디와 비번이 같습니다.");
      }
      else if(!User.username || !User.password){
        window.confirm("빈칸을 채워주세요.");
      }
      else{
      if(window.confirm("회원가입하시겠습니까?")){
    axios.post('/authenticate', User)
      .then(function (response) {
        setUser(response.data);
        console.log(response);
        window.location.href ='login-page'
      })
      .catch(function (error) { 
        //console.log(error);
      });}}}
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
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-login card-plain">
               <Form action="" className="form" method="post">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png").default}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>

                    <InputGroup
                      className={
                        "no-border input-lg"
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Want Id..."
                        name="username"
                        type="text"
                        value={User.username}
                        maxlength="14"
                        onChange={({ target: { value } }) => 
                        setUser({
                          username:value,
                          password: User.password,
                          role: User.role
                   })}
                      ></Input>
                    </InputGroup>

                    <InputGroup
                      className={
                        "no-border input-lg"
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Want Password..."
                        name="user-password"
                        type="password"
                        maxlength="14"
                        value={User.password}
                        onChange={({ target: { value } }) => 
                        setUser({
                          username:User.username,
                          password: value,
                          role: User.role
                   })}
                      ></Input>
                    </InputGroup>

                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={inputmember}
                      size="lg"
                    >
                      Get Started
                    </Button>
                    
                  </CardFooter>
                  </CardBody>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;