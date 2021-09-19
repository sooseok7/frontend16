import React ,{useState}from "react"
import axios from "axios";
import {Container, Button, Input } from "reactstrap";
import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';
import { useParams } from "react-router-dom";
function BoardRead() {
    const {num} = useParams(); 
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss'); 
    const [Board, setBoard] = useState({
    idx: "",
    title: "",
    content: "",
    board_date: "",
    id: "",
    views: ""
}
     );
     const[Commentlist,setCommentList] = useState([])
     const [Comment, setComment] = useState({
      title: "",
      content: "",
      comment_date: nowTime,
      board_id: Board.id,
      comment_id: "test",
      board_no: Board.idx,
      views: "0"
  }
       );
     //let pageHeader = React.createRef();


     React.useEffect(() => {
        axios.get('http://localhost:8080/api/board/'+num)
        .then(function (response) {
            setBoard(response.data);
      
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('http://localhost:8080/api/getCommentById/'+num)
        .then(function (response) {
          //console.log(response.data)
          setCommentList(response.data)
          console.log(Commentlist)
        })
        .catch(function (error) {
          console.log(error);
        });
   
        // document.body.classList.add("boardread/:num");
        // document.body.classList.add("sidebar-collapse");
        // document.documentElement.classList.remove("nav-open");
        // window.scrollTo(0, 0);
        // document.body.scrollTop = 0;
        // return function cleanup() {
        //   document.body.classList.remove("boardread/:num");
        //   document.body.classList.remove("sidebar-collapse");
        // };
      }, []);

     const f3 = async () => {
        
        window.location.href ='http://localhost:3000/boardinput/'+Board.idx
      }
      const f4 = async () => {
        console.log(Board);
        //삭제/board/{no}
        axios.delete('http://localhost:8080/api/board/'+num)
        .then(function (response) {
          window.location.href ='http://localhost:3000/board-page'
        })
        .catch(function (error) {
          console.log(error);
        });
   
      }
      const f5 = async () => {
        console.log(Board); //createcomment
        axios.post('http://localhost:8080/api/board/comment',Comment)
        .then(function (response) {
          window.location.href ='http://localhost:3000/boardread/'+Board.idx
        })
        .catch(function (error) {
          console.log(error);
        });
   
      }
      function deletecomment(number){
        axios.delete('http://localhost:8080/api/board/comment/'+number)
        .then(function (response) {
          window.location.href ='http://localhost:3000/boardread/'+Board.idx
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      const commentarray= Commentlist.map((data)=>{
if(Commentlist.length != '0'){
        return (
          <div style={{backgroundColor:"white"}} >
<h5 style={{color:"black"}}>{data.content} &nbsp;  &nbsp;  &nbsp;  &nbsp; {data.comment_id} <button onClick={()=> deletecomment(data.idx)}>삭제</button>  </h5>      

          </div>

)
        
      }})
      


      //alert(Board.title);
    return(
        <div>
<div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg4.jpg").default + ")",
          }}
          //ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">ㄱㅔㅅㅣㅍㅏㄴ</h1><br/>
            <h2><Input
            placeholder={Board.title}
            name="title"  disabled
            ></Input></h2>
            
            <h2><Input
       
            placeholder={Board.content}
            type="textarea"
            name="content" disabled
            /></h2>
            <br/>
            <Button
            block
            className="btn-view"
            color="black"
            href="../board-page"
            size="5px"
            >
                목록
                </Button>
                <Button
            block
            className="btn-board"
            color="black"
            // href=""
            onClick={f4}
            size="5px"
            >
                삭제
                </Button>
            <Button
            block
            className="btn-board"
            color="black"
            // href=""
            onClick={f3}
            size="5px"
            >
                수정
                </Button>
    
                    <div >

                        <div className="row" >

                            <textarea className="comment-textarea"
                                type="text"
                                placeholder="댓글" name="answer"
                              
                                onChange={({ target: { value } }) => setComment({
                                    content: value,
                                    comment_date: Comment.comment_date,
                                    board_id: Board.id,
                                    comment_id: "test",
                                    board_no: Board.idx,
                                    views: "0"
                           })}
                            />
                            <button className="main-btn" onClick={f5} >댓글</button>


                        </div>
                    </div>
                    {commentarray}
          </Container>
        </div>
      </div>
      </div>
    )
}

export default BoardRead;