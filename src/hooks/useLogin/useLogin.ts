import { useMutation } from "@tanstack/react-query";
import { LoginValues } from "../../types/auth";
import { apiClient } from "../../config/axiosConfig";

const sendData = async (data: LoginValues): Promise<LoginValues> => {
  const response = await apiClient.post("/auth/signin", data);
  return response.data;
};

export const useLogin = (data: LoginValues) => {
  return useMutation<LoginValues, Error, LoginValues>({
    mutationKey: ["login", data],
    mutationFn: sendData,
  });
};
