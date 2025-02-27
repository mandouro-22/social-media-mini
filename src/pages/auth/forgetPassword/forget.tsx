import { useTranslation } from "react-i18next";
import logo from "../../../assets/imgs/logo.png";
import { useFormik } from "formik";
import { ForgetPasswordSchema } from "../../../validation";
import { Button } from "../../../components/common";
import { useState } from "react";
import { ForgotPasswordValues } from "../../../types/auth";

const initialValues: ForgotPasswordValues = {
  email: "",
};

export default function ForgetPassword() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues,
    validationSchema: ForgetPasswordSchema(t),
    onSubmit: (value) => {
      setLoading(true);
      console.log(value);
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
            <div className="flex items-center flex-col max-sm:w-full w-[70%]">
              <h1 className="text-center text-2xl md:text-4xl font-semibold">
                {t("Forget Password")}
              </h1>

              <form
                onSubmit={formik.handleSubmit}
                className="mt-8 mb-4 w-full md:w-[85%]">
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

                <div className="w-full">
                  <Button
                    type="submit"
                    name={t("Send")}
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
