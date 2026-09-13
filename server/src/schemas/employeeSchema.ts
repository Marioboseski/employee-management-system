import { z } from "zod";

export const employeeIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});