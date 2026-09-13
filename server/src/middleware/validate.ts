import type { Request, Response, NextFunction } from "express";
import * as z from "zod";

export const validateParams = <T extends z.ZodType> (schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        message: "Invalid employee ID",
        errors: [
          {
            field: "id",
            message: "Employee ID must be a positive number",
          },
        ],
      });
    }
    next();
  };
};