import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../../components/common";
import logo from "../../../assets/imgs/logo.png";

export default function Login() {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    emailOrPhone: Yup.string()
      .trim()
      .required(t("This field is required"))
      .test("emailOrPhone", t("Invalid email or phone number"), (value) => {
        if (!value) return false;
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isPhone = /^[0-9]{1,15}$/.test(value);
        return isEmail || isPhone;
      }),
    password: Yup.string()
      .trim()
      .required(t("This field is required"))
      .min(6, t("Password must be at least 6 characters")),
  });
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ Yup Validation Schema

  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      console.log("Login Data:", values);
    },
  });

  return (
    <section className="">
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
            <form
              onSubmit={formik.handleSubmit}
              className="mt-8 mb-4 w-full md:w-[85%]"
            >
              {/* ✅ Email or Phone Input */}
              <div className="flex flex-col">
                <label htmlFor="emailOrPhone" className="text-lg mb-2">
                  {t("Email or Phone Number")}
                </label>
                <input
                  type="text"
                  id="emailOrPhone"
                  className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                    formik.errors.emailOrPhone && formik.touched.emailOrPhone
                      ? "border-red-500"
                      : "border-gray-300"
                  } outline-0`}
                  placeholder={t("Email Address or Phone Number")}
                  {...formik.getFieldProps("emailOrPhone")}
                  name="emailOrPhone"
                />
                {formik.errors.emailOrPhone && formik.touched.emailOrPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.emailOrPhone}
                  </p>
                )}
              </div>

              {/* ✅ Password Input */}
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

              {/* ✅ Login Button */}
              <div className="w-full">
                <Button
                  name={t("Login")}
                  disabled={loading || !formik.isValid}
                  loading={loading}
                  className="w-full my-4 py-2.5 bg-[#19385c] hover:bg-[#122a46] flex items-center justify-center transition-colors duration-200 text-white rounded-md cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                {/* ✅ Forgot Password */}
                <div className="w-fit">
                  <Link to="/">
                    <p className=" text-sm text-gray-600 hover:underline hover:text-gray-800">
                      {t("Forgot Password?")}
                    </p>
                  </Link>
                </div>

                {/* ✅ Register Button */}
                <div className="w-fit flex items-center gap-1 text-sm text-gray-600">
                  <span>{t("Create Account")}</span>
                  <Link to="/">
                    <p className="underline hover:text-gray-800">SignUp</p>
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