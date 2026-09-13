import { Router } from "express";
import { getEmployees, getEmployeeById } from "../controllers/employeesController.js";
import { validateParams } from "../middleware/validate.js";
import { employeeIdSchema } from "../schemas/employeeSchema.js";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", validateParams(employeeIdSchema), getEmployeeById);

export default router;