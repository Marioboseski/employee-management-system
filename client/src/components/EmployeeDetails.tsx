import type { EmployeeProps } from "../types/employees";

const EmployeeDetails = ({ employee }: EmployeeProps) => {

  return (
    <div className="flex justify-center items-center min-h-dvh p-2">
      <div className="flex flex-col justify-center items-start gap-3 text-lg p-2 w-full border-2 border-gray-500 rounded-md">
        <p>First name: {employee.firstName}</p>
        <p>Last name: {employee.lastName}</p>
        <p>Email: {employee.email}</p>
        <p>Phone number: {employee.phoneNumber}</p>
        <p>Position: {employee.position}</p>
        <p>Start date: {employee.startDate}</p>
        <p>Salary: ${employee.salary}</p>
        <p>Status: {employee.status}</p>
        <p>Department: {employee.department.name}</p>
      </div>
    </div>
  );
}

export default EmployeeDetails;