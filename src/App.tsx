import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/dashboard";
import EmployeePage from "./pages/employees";
import OnBoardingPage from "./pages/onboarding";
import LeavePage from "./pages/leave";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={DashboardPage} />
        <Route path="/employees" Component={EmployeePage} />
        <Route path="/on-boarding" Component={OnBoardingPage} />
        <Route path="/leave" Component={LeavePage} />
      </Routes>
    </Router>
  );
}

export default App;
