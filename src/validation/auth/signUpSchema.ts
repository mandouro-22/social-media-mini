import * as Yup from "yup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signUpSchema = (t: any) => {
  return Yup.object({
    firstName: Yup.string()
      .min(1, t("FirstName Required"))
      .required(t("FirstName Required"))
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
    lastName: Yup.string()
      .min(1, t("LastName Required"))
      .required(t("LastName Required"))
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
    gender: Yup.mixed<"Male" | "Female">()
      .oneOf(["Male", "Female"], t("Invalid Gender"))
      .required(t("Gender Required")),
    email: Yup.string()
      .email(t("Invalid Email"))
      .required(t("Email Required"))
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
    birthdate: Yup.date()
      .max(new Date(), t("Date of birth cannot be in the future"))
      .test("age-check", t("You must be at least 12 years old"), (value) => {
        if (!value) return false;
        const today = new Date();
        const minDate = new Date();
        minDate.setFullYear(today.getFullYear() - 12);
        return value <= minDate;
      })
      .required(t("Date of Birth Required")),
    password: Yup.string()
      .min(8, t("Password must be at least 8 characters"))
      .required(t("Password Required"))
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("Password Mis Match"))
      .required(t("Confirm Password Required"))
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
  });
};
