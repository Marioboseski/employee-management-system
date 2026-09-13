import { z } from "zod";

export const employeeIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const createEmployeeSchema = z.object({
  firstName: z.string().trim().min(1, "This field is required"),
  lastName: z.string().trim().min(1, "This field is requred"),
  email: z.string().trim().email("Invalid email address"),
  phoneNumber: z.string().trim().min(1, "Phone number is required"),
  position: z.string().trim().min(1, "This field is required"),
  startDate: z.coerce.date(),
  salary: z.coerce.number().positive(),
  status: z.enum(["Active", "Inactive"]),
  departmentId: z.coerce.number().int().positive(),
});