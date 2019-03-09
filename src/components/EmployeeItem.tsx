import * as React from "react";
import { Link } from "react-router-dom";
import EmployeeDTO from "../common/EmployeeDTO";

interface IProps {
  emp: EmployeeDTO;
  onDelete: (id: string) => void;
}

export default class EmployeeItem extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // 親のstateを変更するため、propsとして関数をもらってそれを呼び出す
  public handleDelete() {
    this.props.onDelete(this.props.emp.id);
  }

  public render() {
    return (
      <tr>
        <td>
          <Link to={`emp/${this.props.emp.id}/update`}>
            {this.props.emp.id}
          </Link>
        </td>
        <td>{this.props.emp.name}</td>
        <td>{this.props.emp.age}</td>
        <td>{this.props.emp.sex === "1" ? "男" : "女"}</td>
        <td>
          <button
            className="button is-danger is-small"
            onClick={this.handleDelete}
          >
            削除
          </button>
        </td>
      </tr>
    );
  }
}
