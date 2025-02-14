import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error/errorPage";
import { ForgetPassword, Login, SignUp, Verify } from "../pages/auth";

export function Pages() {
  const language = localStorage.getItem("i18nextLng");
  return (
    <Router>
      <div
        className="bg-[#f1f1f1] w-full min-h-screen py-3 px-2 h-full"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forgetPassword/verify" element={<Verify />} />
          {/* error page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
