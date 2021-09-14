/*

=========================================================
* Now UI Kit React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import JoinPage from "views/examples/JoinPage";
import SearchPage from "views/examples/SearchPage.js";
import BoardPage from "views/examples/BoardPage.js";
import TestPage from "views/examples/TestPage.js";
import ResultPage from "views/examples/ResultPage";
import Calendars from "views/examples/Calendars";
import TestResultPage from "views/examples/TestResultPage.js";
import SuggestDetail from "views/examples/SuggestDetail.js";
import Custom from "views/examples/Custom.js";
import Person from "views/examples/Person.js";
import MbtiPicture from "views/examples/MbtiPicture.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/calendars"
          render={(props) => <Calendars {...props} />}
        />
        <Route
          path="/search-page"
          render={(props) => <SearchPage {...props} />}
        />
        <Route
          path="/board-page"
          render={(props) => <BoardPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/test-page"
          render={(props) => <TestPage {...props} />}
        />
        <Route
          path="/result"
          render={(props) => <ResultPage {...props} />}
        />
        <Route
          path="/join-page"
          render={(props) => <JoinPage {...props} />}
        />     
        <Route
        path="/result-page"
        render={(props) => <TestResultPage {...props} />}
        />
         <Route
        path="/suggestdetail/:word"
        render={(props) => <SuggestDetail {...props} />}
        />
         <Route
        path="/custom"
        render={(props) => <Custom {...props} />}
        />
        <Route
        path="/person"
        render={(props) => <Person {...props} />}
        />
        <Route
        path="/mbtipicture"
        render={(props) => <MbtiPicture {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
