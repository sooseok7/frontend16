import React from "react";
import axios from 'axios';
// reactstrap components
 import {
   Container,
  Row,
 } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import BoardPageHeader from "components/Headers/BoardPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function BoardPage() {
  axios.get('http://localhost:8080/api/test')
  .then((Response)=>{console.log(Response.data)})
  .catch((Error)=>{console.log(Error)})

  React.useEffect(() => {
    document.body.classList.add("board-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("board-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <BoardPageHeader />
        <div className="section">
          <Container>
             <Row>
               
            </Row> 
          </Container>
        </div>
        <div>
                <h2 className="text-center">게시판 테스트</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>작성자 </th>
                                <th>작성일 </th>
                                <th>갱신일 </th>
                                <th>좋아요수</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                        
                                     <tr >
                                        <td> 1</td>
                                        <td> 2 </td>
                                        <td> 3 </td>
                                        <td> 4 </td>
                                        <td> 5 </td>
                                        <td> 6 </td>
                                       
                                    </tr>
                                
                            
                        </tbody>
                    </table>
                </div>
                </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default BoardPage;
