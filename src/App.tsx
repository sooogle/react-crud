import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeList from "./components/EmployeeList";
import EmployeeUpdate from "./components/EmployeeUpdate";

export default class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <h1 className="title">従業員マスタメンテナンス</h1>
          <Route path="/" exact={true} component={EmployeeList} />
          <Route path="/emp/create" component={EmployeeCreate} />
          <Route path="/emp/:id/update" component={EmployeeUpdate} />
        </div>
      </Router>
    );
  }
}
