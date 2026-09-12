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