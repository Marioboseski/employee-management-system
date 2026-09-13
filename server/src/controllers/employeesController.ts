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

export const getEmployeeById = async (req: Request, res: Response) => {

  const { id } = req.params;

  const employee = await prisma.employee.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      department: {
        select: {
          name: true,
        }
      }
    }
  });

  if (!employee) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  return res.status(200).json(employee);
}

export const createEmployee = async (req: Request, res: Response) => {
  const { firstName, lastName, email,
    phoneNumber, position, startDate,
    salary, status, departmentId } = req.body;

  const employee = await prisma.employee.create({
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      position,
      startDate,
      salary,
      status,
      department: {
        connect: {
          id: departmentId,
        }
      },
    }
  });

  return res.status(201).json({
    message: "Employee created successfully",
    employee
  })

}