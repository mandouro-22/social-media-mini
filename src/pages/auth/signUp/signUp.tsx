import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/imgs/logo.png";
import { signUpSchema } from "../../../validation";
import { Button } from "../../../components/common";
import { useState } from "react";

interface InitialValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: "male" | "female";
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: InitialValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "male",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    validationSchema: () => signUpSchema(t),
    onSubmit: (values) => {
      // handle form submission
      setLoading(true);
      console.log(values);
      setLoading(false);
    },
  });
  return (
    <section>
      <div className="container mx-auto px-2 py-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-4 h-screen place-content-center">
          <div className="w-full max-sm:my-6 hidden sm:flex items-center justify-center ">
            <img
              src={logo}
              alt="logo"
              className="w-48 mx-auto md:w-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full max-sm:my-6 flex items-center justify-center py-6">
            <div className="flex items-center flex-col max-sm:w-full">
              <h1 className="text-center text-2xl md:text-4xl font-semibold">
                {t("Create Account")}
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="mt-8 mb-4 w-full md:w-[85%]"
              >
                <div className="flex max-sm:flex-col items-center gap-4 mb-4">
                  <div className="flex flex-col w-full">
                    <label className="mb-1 font-semibold">
                      {t("First Name")}
                    </label>
                    <input
                      type="text"
                      className={`bg-gray-200 text-black rounded-md p-2.5 w-full text-sm border ${
                        formik.errors.firstName && formik.touched.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                      } outline-0`}
                      {...formik.getFieldProps("firstName")}
                      name="firstName"
                      placeholder={t("First Name")}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="mb-1 font-semibold">
                      {t("Last Name")}
                    </label>
                    <input
                      type="text"
                      className={`bg-gray-200 text-black rounded-md w-full p-2.5 text-sm border ${
                        formik.errors.lastName && formik.touched.lastName
                          ? "border-red-500"
                          : "border-gray-300"
                      } outline-0`}
                      {...formik.getFieldProps("lastName")}
                      name="lastName"
                      placeholder={t("Last Name")}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">
                    {t("Date of Birth")}
                  </label>
                  <input
                    type="date"
                    className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                      formik.errors.dateOfBirth && formik.touched.dateOfBirth
                        ? "border-red-500"
                        : "border-gray-300"
                    } outline-0`}
                    {...formik.getFieldProps("dateOfBirth")}
                    name="dateOfBirth"
                    placeholder={t("Date Of Brith")}
                  />
                  {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.dateOfBirth}
                    </div>
                  )}
                </div>

                {/* Gender */}
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">{t("Gender")}</label>
                  <div className="flex items-center gap-6">
                    <div className="flex gap-4">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formik.values.gender === "male"}
                          onChange={formik.handleChange}
                          className="ltr:mr-2 rtl:ml-2 peer-checked:bg-blue-800 focus:bg-blue-800"
                        />
                        {t("Male")}
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formik.values.gender === "female"}
                          onChange={formik.handleChange}
                          className="ltr:mr-2 rtl:ml-2 peer-checked:bg-blue-800 focus:bg-blue-800"
                        />
                        {t("Female")}
                      </label>
                    </div>
                  </div>
                  {formik.touched.gender && formik.errors.gender && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.gender}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">{t("Email")}</label>
                  <input
                    type="email"
                    className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                      formik.errors.email && formik.touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } outline-0`}
                    {...formik.getFieldProps("email")}
                    name="email"
                    placeholder={t("Email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                {/* Password & Confirm Password */}
                <div className="flex flex-col md:justify-center mb-4">
                  <div className="flex flex-col">
                    <label className="mb-1 font-semibold">
                      {t("Password")}
                    </label>
                    <input
                      type="password"
                      className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                        formik.errors.password && formik.touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      } outline-0`}
                      {...formik.getFieldProps("password")}
                      name="password"
                      placeholder={t("Password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>

                  <label className="mt-3 mb-1 font-semibold">
                    {t("Confirm Password")}
                  </label>
                  <input
                    type="password"
                    className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } outline-0`}
                    {...formik.getFieldProps("confirmPassword")}
                    name="confirmPassword"
                    placeholder={t("Confirm Password")}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <Button
                    type="submit"
                    name={t("Sign Up")}
                    disabled={loading || !formik.isValid}
                    loading={loading}
                    className="w-full my-4 py-2.5 bg-[#19385c] hover:bg-[#122a46] flex items-center justify-center transition-colors duration-200 text-white rounded-md cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
