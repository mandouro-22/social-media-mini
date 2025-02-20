import { useMutation } from "@tanstack/react-query";
import { SignUpValues } from "../../types/auth";
import { apiClient } from "../../config/axiosConfig";

const sendData = async (data: SignUpValues): Promise<SignUpValues> => {
  const response = await apiClient.post("/auth/signup", data);
  return response.data;
};

export const useSignup = (data: SignUpValues) => {
  return useMutation<SignUpValues, Error, SignUpValues>({
    mutationKey: ["sign-up", data],
    mutationFn: sendData,
  });
};
