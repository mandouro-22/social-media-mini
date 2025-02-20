import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error/errorPage";
import {
  ForgetPassword,
  Login,
  ResetPassword,
  SignUp,
  Verify,
} from "../pages/auth";
import SignUpWithGoogle from "../components/signUpWithGoogle/signUpWithGoogle";
import PrivateRoute from "../private/privateRoute";
import Layout from "../layout/layout";
import PublicRoute from "../private/publicRoute";

export function Pages() {
  const language = localStorage.getItem("i18nextLng");

  return (
    <Router>
      <div
        className="bg-[#f1f1f1] w-full min-h-screen py-3 px-2 h-full"
        dir={language === "ar" ? "rtl" : "ltr"}>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/register-with-google"
            element={
              <PublicRoute>
                <SignUpWithGoogle />
              </PublicRoute>
            }
          />
          <Route
            path="/forgetPassword"
            element={
              <PublicRoute>
                <ForgetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/verify"
            element={
              <PublicRoute>
                <Verify />
              </PublicRoute>
            }
          />
          <Route
            path="/forgetPassword/verify"
            element={
              <PublicRoute>
                <Verify />
              </PublicRoute>
            }
          />
          <Route
            path="/forgetPassword/resetPassword"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout>
                  <div>Hello World</div>
                </Layout>
              </PrivateRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
