import { useTranslation } from "react-i18next";
import logo from "../../../assets/imgs/logo.png";
import { useFormik } from "formik";
import { VerifySchema } from "../../../validation";
import { Button } from "../../../components/common";
import { useState } from "react";
import { VerifyValues } from "../../../types/auth";

const initialValues: VerifyValues = {
  verify: "",
};

export function Verify() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues,
    validationSchema: VerifySchema(t),
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
                {t("Verify")}
              </h1>

              <form onSubmit={formik.handleSubmit} className="mt-8 mb-4 w-full">
                <div className="flex flex-col">
                  <label htmlFor="verify" className="text-lg mb-2">
                    {t("Verification Code")}
                  </label>
                  <input
                    type="text"
                    id="verify"
                    className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                      formik.errors.verify && formik.touched.verify
                        ? "border-red-500"
                        : "border-gray-300"
                    } outline-0`}
                    placeholder={t("Verification Code")}
                    {...formik.getFieldProps("verify")}
                    name="verify"
                  />
                  {formik.errors.verify && formik.touched.verify && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.verify}
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
