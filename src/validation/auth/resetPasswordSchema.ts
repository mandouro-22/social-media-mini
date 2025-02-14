import * as Yup from "yup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ResetPasswordSchema = (t: any) => {
  return Yup.object({
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
