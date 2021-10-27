import React ,{useState}from "react"
import axios from "axios";
import {Container, Button, Input } from "reactstrap";
import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';
import { useParams } from "react-router-dom";
import AuthenticationService from "../../jwtlogin/AuthenticationService.js";
function BoardInput() {
   
const setupAxiosInterceptors=AuthenticationService.setupAxiosInterceptors();
const nowTime = moment().format('YYYY-MM-DD HH:mm:ss'); 

const {mode} = useParams(); 

    const [Board, setBoard] = useState({
      idx:null,
         title: "",
         content: "",
         board_date: nowTime,
         id: "2monthsago",        
         view: "0"
}
      );
   
     let pageHeader = React.createRef();

     React.useEffect(() => {
       if(mode != 'new'){
      axios.get('/api/board/'+mode)
      .then(function (response) {
        //console.log(response)
          setBoard(response.data);
    
      })
      .catch(function (error) {
        //console.log(error);
      });}

    }, []);
  
     const f3 = async () => {
       if(mode==='new'){ //new
        if(!Board.title || !Board.content){
        window.confirm("빈칸을 채워주세요.");
        }
        else
        axios.post('/api/board', Board)
      .then(function (response) {
        //console.log(response);
        window.location.href ='../../boardread/'+response.data.idx
      })
      .catch(function (error) { 
        //console.log(error);
      });
    }else { //update        
      if(!Board.title){
      window.confirm("제목을 채워주세요.");}
      if(!Board.content){
        window.confirm("내용을 채워주세요.");}
      else
      axios.put('/api/board/'+Board.idx, Board)
      .then(function (response) {
        window.location.href ='../../boardread/'+Board.idx
      })
      .catch(function (error) {
        //console.log(error);
      });
    }

      }


    return(
<div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg4.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">자유게시판</h1><br/>
            <h2><Input
            placeholder="제목..."
            maxlength="14"
            type="text"
            name="title"
            class="form-control2"
            value={Board.title}
            onChange={({ target: { value } }) => 
             setBoard({
               idx:Board.idx,
                 title: value,
                 content: Board.content,
                 board_date: Board.board_date,
                id: Board.id,        
                view: Board.view
        })
 
    }

            ></Input></h2>
            
            <h2><Input
            placeholder="내용..."
            type="textarea"
            name="content"
            value={Board.content}
            onChange={({ target: { value } }) => setBoard({
              idx:Board.idx,
                title: Board.title,
                content: value,
                board_date: Board.board_date,
                id: Board.id,        
                view: Board.view
       })}
            ></Input></h2>
            <br/>
            <Button
            className="btn-viewboard"
            color="black"
            href="../board-page"
            size="5px"
            >
                목록
                </Button>
            <Button
            className="btn-inputboard"
            color="black"
            // href=""
            onClick={f3}
            size="5px"
            >
                등록
                </Button>
                
          </Container>
        </div>
        
      </div>

    )
}

export default BoardInput;