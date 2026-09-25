import { Router } from "express";
import {
getEmployees,
getEmployeeById,
createEmployee,
updateEmployee
} from "../controllers/employeesController.js";
import { validateParams, validateBody } from "../middleware/validate.js";
import { employeeIdSchema, createEmployeeSchema } from "../schemas/employeeSchema.js";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", validateParams(employeeIdSchema), getEmployeeById);
router.post("/", validateBody(createEmployeeSchema), createEmployee);
router.put("/:id", updateEmployee);

export default router;