export default class EmployeeDTO {
  public id: string;
  public name: string;
  public age: number;
  public sex: string;

  constructor(id: string, name: string, age: number, sex: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}
