import React from "react";
//import './Paging.css';
//import Pagination from "react-js-pagination";
import {
    Pagination,
    PaginationItem,
    PaginationLink,

  } from "reactstrap";
function Paging() {

        return(                    <>
        <Pagination
            className="pagination pagination-info"
            listClassName="pagination-info"
          ><PaginationItem className="active">
        <PaginationLink
            href="#pablo"
            onClick={(e) => e.preventDefault()}
        >
            1
        </PaginationLink>
    </PaginationItem><PaginationItem>
            <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
            >
                2
            </PaginationLink>
        </PaginationItem><PaginationItem>
            <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
            >
                3
            </PaginationLink>
        </PaginationItem><PaginationItem>
            <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
            >
                4
            </PaginationLink>
        </PaginationItem><PaginationItem>
            <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
            >
                5
            </PaginationLink>
        </PaginationItem>
              </Pagination></>)
};
export default Paging;