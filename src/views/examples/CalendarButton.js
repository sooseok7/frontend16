import React from "react";
// reactstrap components
import { Button } from "reactstrap";

// core components

function CalendarButton() {
    //const link = "/suggestdetail/"+ name.trrsrtNm 
    return (

              <Button
                className="btn-calendar"
                color="info"
                href="./custom/new"
              >등록
              </Button>
        
    )
  }

export default CalendarButton;
