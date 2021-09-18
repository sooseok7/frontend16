import React ,{useStyles,useState} from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Container, Row} from "reactstrap";
// reactstrap components
import { useParams } from "react-router-dom";
// core components
import ResultNavbar from "components/Navbars/ResultNavbar.js";
import BoardPageHeader from "components/Headers/BoardPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function BoardPage() {
   //axios.get('http://localhost:8080/api/test')
   //then((Response)=>{console.log(Response.data)})
   //.catch((Error)=>{console.log(Error)})
   const useStyles = makeStyles({
     table: {
      minWidth: 650,
     },
   });
var now = new Date();
  //  const {keyword}=useParams();  
  const classes = useStyles();  
  const [p_num,setNum]=useState(1);
  const [keyword,setKeyword]=useState();
  const [pagingData,setData]=useState([]);
  const [list,setList]=useState([]);
  const hrefs="http://localhost:3000/board-page/"+keyword;

  React.useEffect(() => {
    axios.get('http://localhost:8080/api/getPagingBoard?p_num='+p_num+'&?keyword='+keyword)
    .then(Response => {
        if (Response.status === 200) {
          setData(Response.data.pagingData);
          setList(Response.data.list);
       }
    });
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

function listBoard(p_num, keyword)
{

    axios.get('http://localhost:8080/api/getPagingBoard?p_num='+p_num+'&?keyword='+keyword)
    .then(Response => {
        if (Response.status === 200) {
          setData(Response.data.pagingData);
          setList(Response.data.list);
          
       }
    })
  };
 
function viewPaging() {
  const pageNums = [];
  for (let i = pagingData.pageNumStart; i <= pagingData.pageNumEnd; i++) {
      pageNums.push(i);
  }
  let currentpage = pagingData.currentPageNum;
  return (pageNums.map((page) =>
      <li className="page-item" key={page.toString()}>
          <a className="page-link" onClick={() => listBoard(p_num , keyword)}>
              {
                  (function () {
                      if (page == currentpage)
                          return (<div style={{ color: '#fbb9ab', fontWeight: 'bold' }}>{page}</div>);
                      else return (<div>{page}</div>);
                  })()
              }
          </a>
      </li>
  ));
};

function isPagingPrev() {
  if (pagingData.prev) {
      return (
          <li className="page-item">
              <a className="page-link" onClick={() => listBoard(pagingData.currentPageNum - 1,keyword)} tabIndex="-1">Previous</a>
          </li>
      );
  }
};

function isPagingNext() {
  if (pagingData.next) {
      return (
         <li className="page-item">
              <a className="page-link" onClick={() => listBoard(pagingData.currentPageNum + 1, keyword)} tabIndex="-1">Next</a>
          </li>
      );
  }
};


  return (
    <>
       <ResultNavbar />
      <div className="wrapper">
        <BoardPageHeader />         
        <div className="section">
          {/* <div class="board-title">자유게시판</div> */}
          <Container>
             <Row>
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">title</TableCell>
            <TableCell align="right">date</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">views</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          { list.map((row) => (
            <TableRow key={row.idx}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.board_date}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.views}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
            </Row> 
          </Container>
          <input type="text" placeholder="검색하기" style={{ width:"100px"}}
                                            name="search"
                                            className="text-search"onClick={e => setKeyword(e.target.value)} />
          <Button class="btn-view"
                color="info"
                href="./boardinput"
                href= {hrefs}
                //target="_blank"
                >조회</Button>

              <Button
                className="btn-board"
                color="info"
                href="http://localhost:3000/boardinput"
                //target="_blank"
              >등록
              </Button>
        </div>
        { <div >                   
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                               
                                    {
                                        isPagingPrev()
                                    }
                                    {
                                        viewPaging()
                                    }
                                    {
                                        isPagingNext()
                                    }
                                </ul>
                            </nav>
                        </div>
      }
        <DefaultFooter />
      </div>
    </>
  );
}

export default BoardPage;