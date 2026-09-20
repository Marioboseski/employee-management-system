import { useState, useEffect } from "react";
import type { NewEmployeeForm, CreateEmployeeRequest } from "../types/employees";
import type { Department } from "../types/departments";
import { createEmployee } from "../services/employeesApi";
import { getDepartments } from "../services/departmentsApi";

export const AddEmployee = () => {

  const [employee, setEmployee] = useState<NewEmployeeForm>({
    firstName: "", lastName: "", email: "",
    phoneNumber: "", position: "", startDate: "",
    salary: "", status: "", departmentId: "",
  });
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const data = await getDepartments();
      setDepartments(data);
    }
    fetchDepartments();
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setEmployee((prev) => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEmployee: CreateEmployeeRequest = {
      ...employee,
      salary: Number(employee.salary),
      departmentId: Number(employee.departmentId),
    };

    try {

      await createEmployee(newEmployee);

    } catch (error) {
      console.log(error)
    }

    setEmployee({
      firstName: "", lastName: "", email: "",
      phoneNumber: "", position: "", startDate: "",
      salary: "", status: "", departmentId: "",
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
          placeholder="Name"
        />

        <input type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
          placeholder="Last name"
        />

        <input type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input type="text"
          name="phoneNumber"
          value={employee.phoneNumber}
          onChange={handleChange}
          placeholder="Phone number"
        />

        <input type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
          placeholder="Position"
        />

        <input type="date"
          name="startDate"
          value={employee.startDate}
          onChange={handleChange}
        />

        <input type="text"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          placeholder="Salary"
        />

        <label>Active</label>
        <input type="radio"
          name="status"
          value={"Active"}
          checked={employee.status === "Active"}
          onChange={handleChange}
        />

        <label>Inactive</label>
        <input type="radio"
          name="status"
          value={"Inactive"}
          checked={employee.status === "Inactive"}
          onChange={handleChange}
        />

        <select
          name="departmentId"
          value={employee.departmentId}
          onChange={handleChange}>

          <option value="" disabled>Select department</option>

          {departments.map((department) => (
            <option key={department.id} value={department.id}>{department.name}</option>
          ))}
        </select>

        <button type="submit">Add employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;