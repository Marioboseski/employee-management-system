import type { CreateEmployeeRequest } from "../types/employees";

const API_URL = import.meta.env.VITE_API_URL;

export const getEmployees = async () => {
  const res = await fetch(`${API_URL}/api/employees`)
  
  if(!res.ok) {
    throw new Error("Failed to fetch employees")
  }

  return res.json();
}

export const getEmployeeById = async (id: number) => {
  const res = await fetch(`${API_URL}/api/employees/${id}`);

  if(!res.ok) {
    throw new Error("Failed to fetch employee")
  }

  return res.json();
}

export const createEmployee = async (employee: CreateEmployeeRequest) => {
  const res = await fetch(`${API_URL}/api/employees`, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify(employee)
  });

  if(!res.ok) {
    throw new Error("Failed to create employee")
  }

  return res.json();
}