import React,{useState } from "react";
import axios from 'axios'
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
  const [input, setInput] = useState({
    id:"",
    pw:""
  })
  React.useEffect(() => {
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
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
  	// login 버튼 클릭 이벤트
    const onClickLogin = (event) => {
      event.preventDefault(); //리프레시 방지-> 방지해야 이 아래 라인의 코드들 실행 가능 
      if(input.id == input.pw){
        window.confirm("아이디와 비번이 같습니다.");
      }
      else if(!input.id || !input.pw){
        window.confirm("빈칸을 채워주세요.");
      }else{
      if(window.confirm("로그인하시겠습니까?")){
          axios.post('/api/login', input)
        .then(function (response) {
          console.log(response);
          //window.location.href ='../../boardread/'+response.data.idx
        })
        .catch(function (error) { 
          console.log(error);
    })
  }
}
    
 }
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
                <Form className="form" method="">
                  <CardHeader className="text-center" style={{marginTop:"20px"}}>
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
                        placeholder="Your ID..."
                        type="text"
                        name='id'
                        value={input.id}
                        maxlength="14"
                        onChange={({ target: { value } }) => 
                        setInput({
                          id:value,
                          pw: input.pw
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
                        placeholder="Your Password..."
                        type="password"
                        name='pw'
                        maxlength="14"
                        value={input.pw}
                        onChange={({ target: { value } }) => 
                        setInput({
                          id:input.id,
                          pw: value
                   })}
                      ></Input>
                    </InputGroup>
                  
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={onClickLogin}
                      size="lg"
                    >
                      Get Started
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="join-page"
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="index"
                        >
                          go to home?
                        </a>
                      </h6>
                    </div>
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