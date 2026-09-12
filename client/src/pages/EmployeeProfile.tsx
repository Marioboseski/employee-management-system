import { useState, useEffect } from "react";
import { getEmployeeById } from "../services/employeesApi";
import { useParams } from "react-router-dom";
import type { Employee } from "../types/employees";
import CompanyEmployee from "../components/Employee";

const EmployeeProfile = () => {

  const [employee, setEmployee] = useState<Employee | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(Number(id));
      setEmployee(data);
    }
    fetchEmployee();
  },[id]);

  if(!employee) {
    return <p>Loading...</p>
  }
  
  return (
    <div>
      <CompanyEmployee employee={employee} />      
    </div>
  );
}

export default EmployeeProfile;