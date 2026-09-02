import type { EmployeeProps } from "../types/employees";

const CompanyEmployee = ({employee}: EmployeeProps) => {
  return (
    <div>
      <p>{employee.firstName}</p>
      <p>{employee.lastName}</p>
      <p>{employee.position}</p>
      <p>{employee.department.name}</p>
      <p>{employee.status}</p>
    </div>
  );
}

export default CompanyEmployee;