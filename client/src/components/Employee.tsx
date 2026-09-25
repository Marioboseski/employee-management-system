import type { EmployeeProps } from "../types/employees";
import { Link } from "react-router-dom";

const CompanyEmployee = ({ employee }: EmployeeProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-lg gap-3 border-2 border-gray-400 rounded-md min-h-40 hover:scale-105 duration-150 cursor-pointer">
      <Link to={`/edit-employee/${employee.id}`}>Edit</Link>
      <div className="flex gap-3">
        <p>Name: {employee.firstName}</p>
        <p>Last name: {employee.lastName}</p>
      </div>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department.name}</p>
      <p>Status: {employee.status}</p>
      <Link to={`/employees/${employee.id}`}>View profile</Link>
    </div>
  );

}

export default CompanyEmployee;