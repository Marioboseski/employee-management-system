import { Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import EmployeeProfile from "./pages/EmployeeProfile";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Employees />} />
      <Route path="/employees/:id" element={<EmployeeProfile />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/edit-employee/:id" element={<EditEmployee />} />
    </Routes>
  );
}

export default App;