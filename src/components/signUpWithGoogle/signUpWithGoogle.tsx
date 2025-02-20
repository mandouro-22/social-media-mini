import { useTranslation } from "react-i18next";
import logo from "../../assets/imgs/logo.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button } from "../common";
import { useEffect, useState } from "react";
import { useSignUpGoogle } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useState } from "react";

interface SignUpFormValues {
  birthdate: string;
  gender: "Male" | "Female";
}

interface GetDataFromUseParams {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: SignUpFormValues = {
  birthdate: "",
  gender: "Male",
};

export default function SignUpWithGoogle() {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const mutation = useSignUpGoogle();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<GetDataFromUseParams>({
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get("email");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    if (email && firstName && lastName) {
      setFormData({ firstName: firstName, lastName: lastName, email: email });
    }

    console.log(formData);
  }, [formData.email, formData.firstName, formData.lastName]);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      birthdate: Yup.date()
        .nullable() // تأكد من أنه يمكن أن يكون فارغًا بدون خطأ
        .test("age-check", t("You must be at least 12 years old"), (value) => {
          if (!value) return false; // تأكد من وجود قيمة
          const today = new Date();
          const minDate = new Date();
          minDate.setFullYear(today.getFullYear() - 12);
          return value <= minDate;
        })
        .max(new Date(), t("Date of birth cannot be in the future")),

      gender: Yup.mixed<"Male" | "Female">()
        .oneOf(["Male", "Female"], t("Invalid Gender"))
        .required(t("Gender Required")),
    }),
    onSubmit: (values) => {
      // Simulate form submission
      console.log("SignUpForm values:", values);
      const { birthdate, gender } = values;

      const sendData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        birthdate: birthdate,
        gender: gender,
      };

      setLoading(true);
      mutation.mutate(sendData, {
        onSuccess: (res) => {
          setLoading(false);
          navigate("/");
          toast.success(t("Account Created Successfully"));
          localStorage.setItem("user", JSON.stringify(res));
        },
        onError: () => {
          setLoading(false);
          toast.error(t("Something went wrong"));
        },
      });
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
            <form
              onSubmit={formik.handleSubmit}
              className="mt-8 mb-4 w-full md:w-[85%]">
              <div className="flex max-sm:flex-col items-center gap-4 mb-4">
                {/* Date of Birth */}
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">
                    {t("Date of Birth")}
                  </label>
                  <input
                    type="date"
                    className={`bg-gray-200 text-black rounded-md p-2.5 text-sm border ${
                      formik.errors.birthdate && formik.touched.birthdate
                        ? "border-red-500"
                        : "border-gray-300"
                    } outline-0`}
                    {...formik.getFieldProps("birthdate")}
                    name="birthdate"
                    placeholder={t("Date Of Brith")}
                  />
                  {formik.touched.birthdate && formik.errors.birthdate && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.birthdate}
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
                          value="Male"
                          checked={formik.values.gender === "Male"}
                          onChange={formik.handleChange}
                          className="ltr:mr-2 rtl:ml-2 peer-checked:bg-blue-800 focus:bg-blue-800"
                        />
                        {t("Male")}
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={formik.values.gender === "Female"}
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
              </div>
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
    </section>
  );
}
