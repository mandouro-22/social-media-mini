import { useState, useRef } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../../components/common";
import logo from "../../../assets/imgs/logo.png";
import { LoginSchema } from "../../../validation";
import { LoginValues } from "../../../types/auth";
import GoogleLoginButton from "../../../components/GoogleBtn/GoogleLoginButton ";

// import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const { t } = useTranslation();
  const isSubmitting = useRef(false);
  const [loading, setLoading] = useState<boolean>(false);

  // const login = useGoogleLogin({
  //   scope:
  //     "openid profile email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read",
  //   onSuccess: async (tokenResponse) => {
  //     console.log("Token Response:", tokenResponse);

  //     // طلب بيانات المستخدم من Google People API
  //     const userProfile = await fetch(
  //       "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,genders,birthdays",
  //       {
  //         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //       }
  //     );

  //     const userData = await userProfile.json();
  //     console.log("User Data:", userData);
  //   },
  //   onError: (error) => console.error("Login Failed:", error),
  // });

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema(t),
    onSubmit: (values) => {
      if (isSubmitting.current) return;
      isSubmitting.current = true;

      console.log("Form submitted");
      setLoading(true);
      console.log("Login Data:", values);
    },
  });

  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-4 h-screen place-content-center">
          <div className="w-full max-sm:my-6 flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-48 mx-auto md:w-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-center text-2xl md:text-4xl font-semibold">
              {t("Login in to your account")}
            </h1>
            <div className="mt-4 border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-300 cursor-pointer">
              <GoogleLoginButton />
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-4 mb-4 w-full md:w-[85%]">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg mb-2">
                  {t("Email")}
                </label>
                <input
                  type="text"
                  id="email"
                  className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } outline-0`}
                  placeholder={t("Email Address")}
                  {...formik.getFieldProps("email")}
                  name="email"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="password" className="text-lg mb-2">
                  {t("Password")}
                </label>
                <input
                  type="password"
                  id="password"
                  className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } outline-0`}
                  placeholder={t("Password")}
                  {...formik.getFieldProps("password")}
                  name="password"
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <div className="w-full">
                <Button
                  type="submit"
                  name={t("Login")}
                  disabled={loading || !formik.isValid}
                  loading={loading}
                  className="w-full my-4 py-2.5 bg-[#19385c] hover:bg-[#122a46] flex items-center justify-center transition-colors duration-200 text-white rounded-md cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="w-fit">
                  <Link to="/forgetPassword">
                    <p className="text-sm text-gray-600 hover:underline hover:text-gray-800">
                      {t("Forgot Password?")}
                    </p>
                  </Link>
                </div>

                <div className="w-fit flex items-center gap-1 text-sm text-gray-600">
                  <span>{t("Create Account")}</span>
                  <Link to="/register">
                    <p className="underline hover:text-gray-800">
                      {t("Sign Up")}
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
