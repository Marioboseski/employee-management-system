import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const getEmployees = async (req: Request, res: Response) => {
  try {

    const employees = await prisma.employee.findMany({
      include: {
        department: {
          select: {
            name: true,
          },
        }
      }
    });

    return res.json(employees);

  } catch (error) {
    console.log(error);
  }
}