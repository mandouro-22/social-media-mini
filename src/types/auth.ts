export type LoginValues = {
  email: string;
  password: string;
};

export type SignUpValues = {
  firstName: string;
  lastName: string;
  birthdate: string;
  gender: "Male" | "Female";
  email: string;
  password?: string;
  confirmPassword?: string;
};

export type VerifyValues = {
  verify: string;
};

export type ForgotPasswordValues = {
  email: string;
};

export type ResetPasswordValues = {
  password: string;
  confirmPassword: string;
};
