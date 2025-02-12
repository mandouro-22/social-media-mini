import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/login";
import ErrorPage from "../pages/error/errorPage";

export function Pages() {
  return (
    <Router>
      <div className="bg-[#191919] w-full h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* error page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
