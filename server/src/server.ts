import express from "express";
import cors from "cors";
import employeesRoutes from "./routes/employeesRoutes.js";
import departmentsRoutes from "./routes/departmentsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/employees", employeesRoutes);
app.use("/api/departments", departmentsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})