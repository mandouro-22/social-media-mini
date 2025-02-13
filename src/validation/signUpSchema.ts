import * as Yup from "yup";
// import i18n from "../locales/i18n"; // استيراد i18n

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signUpSchema = (t: any) => {
  return Yup.object({
    firstName: Yup.string()
      .min(1, t("FirstName Required"))
      .required(t("FirstName Required")),
    lastName: Yup.string()
      .min(1, t("LastName Required"))
      .required(t("LastName Required")),
    gender: Yup.mixed<"male" | "female">()
      .oneOf(["male", "female"], t("Invalid Gender"))
      .required(t("Gender Required")),
    email: Yup.string().email(t("Invalid Email")).required(t("Email Required")),
    password: Yup.string()
      .min(8, t("Password must be at least 8 characters"))
      .required(t("Password Required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("Password Mis Match"))
      .required(t("Confirm Password Required")),
  });
};
