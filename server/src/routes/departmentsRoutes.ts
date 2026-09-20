import { Router } from "express";
import {
  getDepartments,
  getDepartmentById,
} from "../controllers/departmentsController.js";
import { validateParams } from "../middleware/validate.js";
import { departmentIdSchema } from "../schemas/departmentSchema.js";

const router = Router();

router.get("/", getDepartments);
router.get("/:id", validateParams(departmentIdSchema), getDepartmentById);

export default router;