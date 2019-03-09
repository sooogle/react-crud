import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import EmployeeDTO from "../common/EmployeeDTO";
import EmployeeService from "../common/EmployeeService";

interface IState {
  id?: string;
  name?: string;
  age?: number;
  sex?: string;
}

export class EmployeeCreate extends React.Component<
  RouteComponentProps,
  IState
> {
  constructor(props: any) {
    super(props);
    this.state = new EmployeeDTO("", "", 0, "1");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <label className="label" htmlFor="id">
              従業員No.
            </label>
            <input
              className="input"
              type="text"
              name="id"
              id="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </div>
          <div className="control">
            <label className="label" htmlFor="name">
              氏名
            </label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="control">
            <label className="label" htmlFor="age">
              年齢
            </label>
            <input
              className="input"
              type="number"
              name="age"
              id="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label">性別</label>
            <label className="radio">
              <input
                type="radio"
                name="sex"
                value="1"
                onChange={this.handleChange}
              />
              男
            </label>
            <label className="radio">
              <input
                type="radio"
                name="sex"
                value="2"
                onChange={this.handleChange}
              />
              女
            </label>
          </div>
          <div>
            <input type="submit" className="button" value="登録" />
          </div>
        </div>
      </form>
    );
  }

  private handleChange(e: React.FormEvent<HTMLInputElement>) {
    // この書き方はIStateがnullableじゃないと通らない
    // (そのため、DTOの型がそのまま使えない。TypeScriptと相性悪い点)
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  private handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emp = new EmployeeDTO(
      this.state.id || "",
      this.state.name || "",
      this.state.age || 0,
      this.state.sex || "1"
    );
    EmployeeService.create(emp);
    if (confirm(JSON.stringify(this.state))) {
      this.props.history.push("/");
    }
  }
}

export default withRouter(EmployeeCreate);
