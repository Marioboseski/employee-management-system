import { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../services/employeesApi";
import { getDepartments } from "../services/departmentsApi";
import type { NewEmployeeForm, CreateEmployeeRequest } from "../types/employees";
import type { Department } from "../types/departments";
import { useParams } from "react-router-dom";

const EditEmployee = () => {

  const [employee, setEmployee] = useState<NewEmployeeForm>({
    firstName: "", lastName: "", email: "",
    phoneNumber: "", position: "", startDate: "",
    salary: "", status: "", departmentId: "",
  })

  const [departments, setDepartments] = useState<Department[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchEmployeeById = async () => {
      const data = await getEmployeeById(Number(id));

      setEmployee({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        position: data.position,
        startDate: data.startDate.split("T")[0],
        salary: String(data.salary),
        status: data.status,
        departmentId: String(data.department.id),
      });
    }
    fetchEmployeeById();
  }, [id]);

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
      ...prev, [name]: value,
    }))
  }

  const handleSaveChanges = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedEmployee: CreateEmployeeRequest = {
      firstName: employee.firstName, lastName: employee.lastName,
      email: employee.email, phoneNumber: employee.phoneNumber,
      position: employee.position, startDate: employee.startDate,
      salary: Number(employee.salary), status: employee.status,
      departmentId: Number(employee.departmentId),
    };

    try {
      await updateEmployee(Number(id), updatedEmployee);
      console.log("Employee updated successfully!");

    } catch (error) {
      console.log("Failed to update employee", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSaveChanges}>
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

        <input type="text"
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

        <input type="radio"
          name="status"
          value={"Active"}
          checked={employee.status === "Active"}
          onChange={handleChange}
        />

        <input type="radio"
          name="status"
          value={"Inactive"}
          checked={employee.status === "Inactive"}
          onChange={handleChange}
        />

        <select name="departmentId"
          value={employee.departmentId}
          onChange={handleChange}>

          <option value="" disabled>Select department</option>

          {departments.map((department) => (
            <option key={department.id} value={department.id}>{department.name}</option>
          ))}
        </select>

        <button>Save changes</button>
      </form>
    </div>
  );
}

export default EditEmployee;