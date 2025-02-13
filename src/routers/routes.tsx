import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error/errorPage";
import { ForgetPassword, Login, SignUp } from "../pages/auth";

export function Pages() {
  const language = localStorage.getItem("i18nextLng");
  return (
    <Router>
      <div
        className="bg-[#f1f1f1] w-full h-screen"
        dir={language === "ar" ? "rtl" : "ltr"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          {/* error page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
