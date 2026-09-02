import { getEmployees } from "../services/employeesApi";
import { useState, useEffect } from "react";
import type { Employee } from "../types/employees";
import CompanyEmployee from "../components/Employee";

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
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <CompanyEmployee employee={employee} />
        </div>
      ))}
    </div>
  );
}

export default Employees;