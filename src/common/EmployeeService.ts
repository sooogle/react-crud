import EmployeeDTO from "./EmployeeDTO";

export default class EmployeeService {
  public static findList(): EmployeeDTO[] {
    return this.empList;
  }

  public static find(id: string): EmployeeDTO {
    return (
      this.empList.find(emp => emp.id === id) || new EmployeeDTO("", "", 0, "1")
    );
  }

  public static create(emp: EmployeeDTO): void {
    this.empList.push(emp);
  }

  public static update(emp: EmployeeDTO): void {
    let target = this.empList.find(e => e.id === emp.id);
    if (target) {
      target = emp;
    }
  }

  public static delete(id: string): void {
    const tmp = this.empList;
    this.empList = tmp.filter(emp => emp.id !== id);
  }

  private static empList: EmployeeDTO[] = [
    new EmployeeDTO("A0001", "Satoh", 25, "1"),
    new EmployeeDTO("A0002", "Suzuki", 25, "2"),
    new EmployeeDTO("A0003", "Tanaka", 30, "1"),
    new EmployeeDTO("A0004", "Matsumoto", 27, "1")
  ];
}
