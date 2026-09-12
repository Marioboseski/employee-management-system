import { Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";
import EmployeeProfile from "./pages/EmployeeProfile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Employees />} />
      <Route path="/employees/:id" element={<EmployeeProfile />} />
    </Routes>
  );
}

export default App;