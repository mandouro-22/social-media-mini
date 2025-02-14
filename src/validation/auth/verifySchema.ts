import * as Yup from "yup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const VerifySchema = (t: any) => {
  return Yup.object().shape({
    verify: Yup.string()
      .required(t("Verify Required"))
      .max(6, t("Must be at most 6 characters"))
      .test("no-spaces-only", t("Cannot be spaces only"), (value) =>
        value ? value.trim().length > 0 : false
      ),
  });
};
