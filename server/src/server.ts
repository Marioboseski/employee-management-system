import express from "express";
import cors from "cors";
import employeesRoutes from "./routes/employeesRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/employees", employeesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})