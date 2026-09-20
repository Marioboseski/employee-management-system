import { z } from "zod";

export const departmentIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});