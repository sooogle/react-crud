import * as React from "react";
import { Link } from "react-router-dom";
import EmployeeDTO from "../common/EmployeeDTO";
import EmployeeService from "../common/EmployeeService";
import EmployeeItem from "./EmployeeItem";

// このComponentにとってempListはprops? → No.削除するのでstate
interface IState {
  empList: EmployeeDTO[];
}

export default class EmployeeList extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { empList: EmployeeService.findList() };
    this.handleDelete = this.handleDelete.bind(this);
  }

  public render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>従業員No.</th>
              <th>氏名</th>
              <th>年齢</th>
              <th>性別</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.empList.map(emp => (
              <EmployeeItem
                emp={emp}
                onDelete={this.handleDelete}
                key={emp.id}
              />
            ))}
          </tbody>
        </table>
        <Link to="/emp/create" className="button">
          新規登録
        </Link>
      </div>
    );
  }

  private handleDelete(id: string) {
    alert("delete: " + id);
    EmployeeService.delete(id);
    this.setState({
      empList: this.state.empList.filter(emp => emp.id !== id)
    });
  }
}
