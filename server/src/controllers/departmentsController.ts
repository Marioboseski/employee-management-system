import type { Request, Response } from "express"
import { prisma } from "../lib/prisma.js"

export const getDepartments = async (req: Request, res: Response) => {
  const departments = await prisma.department.findMany({
    orderBy: {
      name: "asc"
    },
  });

  return res.status(200).json(departments);
}

export const getDepartmentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const department = await prisma.department.findUnique({
    where: {
      id: Number(id)
    }
  });

  return res.status(200).json(department);
}