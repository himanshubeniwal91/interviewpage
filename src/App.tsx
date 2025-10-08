import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage.js";
import Dashboard from "./pages/DashBoard.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />        {/* Signup page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
      </Routes>
    </Router>
  );
}
