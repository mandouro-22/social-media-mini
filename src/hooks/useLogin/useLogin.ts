import { useMutation } from "@tanstack/react-query";
import { LoginValues } from "../../types/auth";
import axios from "axios";

const sendData = async (data: LoginValues): Promise<LoginValues> => {
  const response = await axios.post(
    "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/signin",
    data
  );
  return response.data;
};

export const useLogin = (data: LoginValues) => {
  return useMutation<LoginValues, Error, LoginValues>({
    mutationKey: ["login", data],
    mutationFn: sendData,
  });
};
