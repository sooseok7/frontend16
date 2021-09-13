import React from "react";
// reactstrap components
import { Button, Container} from "reactstrap";

// core components

function CalendarButton() {
    //const link = "/suggestdetail/"+ name.trrsrtNm 
    return (

      
      <Container>
              <Button
                className="btn-calendar"
                color="info"
                href="./custom"
                target="_blank"
              >등록
              </Button>
        </Container>
    )
  }

export default CalendarButton;
