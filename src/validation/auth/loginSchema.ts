import * as Yup from "yup";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoginSchema = (t: any) => {
  return Yup.object({
    email: Yup.string()
      .trim()
      .required(t("This field is required"))
      .test("email", t("Invalid email"), (value) => {
        if (!value) return false;
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isPhone = /^[0-9]{1,15}$/.test(value);
        return isEmail || isPhone;
      })
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
    password: Yup.string()
      .trim()
      .required(t("This field is required"))
      .min(8, t("Password must be at least 8 characters"))
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
  });
};
