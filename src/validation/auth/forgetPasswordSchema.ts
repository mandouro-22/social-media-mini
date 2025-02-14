import * as Yup from "yup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ForgetPasswordSchema = (t: any) => {
  return Yup.object().shape({
    email: Yup.string()
      .email(t("Invalid Email"))
      .required(t("Email Required"))
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
  });
};
