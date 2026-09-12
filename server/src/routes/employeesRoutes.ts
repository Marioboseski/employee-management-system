import { Router } from "express";
import { getEmployees, getEmployeeById } from "../controllers/employeesController.js";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", getEmployeeById);

export default router;