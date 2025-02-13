import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/imgs/logo.png";
import { signUpSchema } from "../../../validation";

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
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    validationSchema: () => signUpSchema(t),
    onSubmit: (values) => {
      // handle form submission
      console.log(values);
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
          <div className="w-full max-sm:my-6 flex items-center justify-center">
            <div className="flex items-center flex-col">
              <h1 className="text-center text-2xl md:text-4xl font-semibold">
                {t("Create Account")}
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="mt-8 mb-4 w-full md:w-[85%]">
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">First Name</label>
                  <input
                    type="text"
                    className="border p-2 rounded"
                    {...formik.getFieldProps("firstName")}
                    name="firstName"
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.firstName}
                    </div>
                  )}

                  <label className="mt-3 mb-1 font-semibold">Last Name</label>
                  <input
                    type="text"
                    className="border p-2 rounded"
                    {...formik.getFieldProps("lastName")}
                    name="lastName"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">Date of Birth</label>
                  <input
                    type="date"
                    className="border p-2 rounded"
                    {...formik.getFieldProps("dateOfBirth")}
                    name="dateOfBirth"
                  />
                  {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.dateOfBirth}
                    </div>
                  )}
                </div>

                {/* Gender */}
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">Gender</label>
                  <div className="flex gap-4">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formik.values.gender === "male"}
                        onChange={formik.handleChange}
                        className="mr-2"
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formik.values.gender === "female"}
                        onChange={formik.handleChange}
                        className="mr-2"
                      />
                      Female
                    </label>
                  </div>
                  {formik.touched.gender && formik.errors.gender && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.gender}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">Email</label>
                  <input
                    type="email"
                    className="border p-2 rounded"
                    {...formik.getFieldProps("email")}
                    name="email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                {/* Password & Confirm Password */}
                <div className="flex flex-col mb-4">
                  <label className="mb-1 font-semibold">Password</label>
                  <input
                    type="password"
                    className="border p-2 rounded"
                    {...formik.getFieldProps("password")}
                    name="password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.password}
                    </div>
                  )}

                  <label className="mt-3 mb-1 font-semibold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="border p-2 rounded"
                    {...formik.getFieldProps("confirmPassword")}
                    name="confirmPassword"
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
