import { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { ResetPasswordValues } from "../../../types/auth";
import logo from "../../../assets/imgs/logo.png";
import { Button, ShowPasswordBtn } from "../../../components/common";
import { ResetPasswordSchema } from "../../../validation";

const initialValues: ResetPasswordValues = {
  password: "",
  confirmPassword: "",
};

export default function ResetPassword() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    validationSchema: () => ResetPasswordSchema(t),
    onSubmit: (values) => {
      // handle form submission
      setLoading(true);
      console.log(values);
      setLoading(false);
    },
  });
  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 md:h-[90vh] md:place-content-center">
          <div className="w-full max-sm:my-6 hidden lg:flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-48 mx-auto md:w-72 lg:w-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full max-sm:my-6 flex items-center justify-center">
            <div className="flex items-center flex-col max-sm:w-full w-[90%]">
              <h1 className="text-center text-2xl md:text-4xl font-semibold">
                {t("Create Account")}
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="mt-8 mb-4 w-full md:w-[85%]">
                <div className="flex flex-col  gap-4 mb-4">
                  {/* Password & Confirm Password */}
                  {/* <div className="flex flex-col md:justify-center mb-4"> */}
                  <div className="flex flex-col">
                    <label className="mb-1 font-semibold">
                      {t("Password")}
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`w-full bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                          formik.errors.password && formik.touched.password
                            ? "border-red-500"
                            : "border-gray-300"
                        } outline-0`}
                        {...formik.getFieldProps("password")}
                        name="password"
                        placeholder={t("Password")}
                      />
                      <ShowPasswordBtn
                        setShowPassword={setShowPassword}
                        showPassword={showPassword}
                      />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>

                  <label className="mt-3 mb-1 font-semibold">
                    {t("Confirm Password")}
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className={`w-full bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } outline-0`}
                      {...formik.getFieldProps("confirmPassword")}
                      name="confirmPassword"
                      placeholder={t("Confirm Password")}
                    />
                    <ShowPasswordBtn
                      setShowPassword={setShowConfirmPassword}
                      showPassword={showConfirmPassword}
                    />
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                  {/* </div> */}
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
