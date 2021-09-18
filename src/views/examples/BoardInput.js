import React ,{useState}from "react"
import axios from "axios";
import {Container, Button, Input } from "reactstrap";
import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';
import TestPage from "./TestPage";
function BoardInput() {
   
const nowTime = moment().format('YYYY-MM-DD HH:mm:ss'); 
    const [Board, setBoard] = useState({
         title: " ",
         content: " ",
         board_date: nowTime,
         id: "test",        
         view: "0"
}
      );
     let pageHeader = React.createRef();


     const f3 = async () => {
        console.log(Board);
        axios.post('http://localhost:8080/api/board', Board)
      .then(function (response) {
        console.log(response);
        window.location.href ='http://localhost:3000/board-page'
      })
      .catch(function (error) {
        console.log(error);
      });
      }

      //alert(Board.title);
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
            type="text"
            name="title"

            onChange={({ target: { value } }) => 
             setBoard({
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
            onChange={({ target: { value } }) => setBoard({
                title: Board.title,
                content: value,
                board_date: Board.board_date,
                id: Board.id,        
                view: Board.view
       })}
            ></Input></h2>
            <br/>
            <Button
            block
            className="btn-view"
            color="black"
            href="board-page"
            size="5px"
            >
                목록
                </Button>
            <Button
            block
            className="btn-board"
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