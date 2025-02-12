import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/login";
import ErrorPage from "../pages/error/errorPage";

export function Pages() {
  const language = localStorage.getItem("i18nextLng");
  return (
    <Router>
      <div
        className="bg-[#f1f1f1] w-full h-screen"
        dir={language === "ar" ? "rtl" : "ltr"}>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* error page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
