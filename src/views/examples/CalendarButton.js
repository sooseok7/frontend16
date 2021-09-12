import React from "react";
// reactstrap components
import { Button} from "reactstrap";

// core components

function CalendarButton() {
    //const link = "/suggestdetail/"+ name.trrsrtNm 
    return (

              <Button
                class="btn-calendar"
                color="white"
                href="./custom"
                target="_blank"
              >등록
              </Button>
    )
  }

export default CalendarButton;
