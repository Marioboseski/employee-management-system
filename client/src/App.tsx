import { Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import EmployeeProfile from "./pages/EmployeeProfile";
import AddEmployee from "./pages/AddEmployee";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Employees />} />
      <Route path="/employees/:id" element={<EmployeeProfile />} />
      <Route path="/add-employee" element={<AddEmployee />} />
    </Routes>
  );
}

export default App;