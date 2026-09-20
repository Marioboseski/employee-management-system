import { getEmployees } from "../services/employeesApi";
import { useState, useEffect } from "react";
import type { Employee } from "../types/employees";
import CompanyEmployee from "../components/Employee";
import { Link } from "react-router-dom";

const Employees = () => {

  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {

        const data = await getEmployees();
        setEmployees(data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchEmployees();
  }, []);


  return (
    <div className="grid grid-cols-1 gap-3 p-2 w-full">
      <Link to={"/add-employee"}>Add employee</Link>
      {employees.map((employee) => (
        <div key={employee.id}>
          <CompanyEmployee employee={employee} />
        </div>
      ))}
    </div>
  );
}

export default Employees;