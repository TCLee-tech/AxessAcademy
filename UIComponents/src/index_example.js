import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App";

import { AppName } from "./App";
import { CreditCardList } from "./CreditCardList";
import { Greeting } from "./Greetings";
import { Counter } from "./Counter";
import { UserList } from "./Users";

import { ViewApplicationList } from "./ViewApplicationList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <div className="container">
        <Header />
        {/* <App1 name="Ankit Rathod" /> */}
        {/* <AppName/> */}
        {/* <CreditCardList/> */}
        <Route path="/" component={Greeting} />
        <Route path="/creditcard" component={CreditCardList} />
        {/* <Greeting/> */}

        {/* <Counter/> */}
        <Route path="/counter" component={Counter} />
        <Route path="/users" component={UserList} />
        {/* <UserList/> */}
        {/* <UserName/> */}
        <Route path="/applications" component={ViewApplicationList} />
        {/* <ViewApplicationList/> */}
      </div>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
