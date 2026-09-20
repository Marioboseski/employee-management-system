const API_URL = import.meta.env.VITE_API_URL;

export const getDepartments = async () => {
  const res = await fetch(`${API_URL}/api/departments`);

  if (!res.ok) {
    throw new Error("Failed to get departments");
  }
  return res.json();
}