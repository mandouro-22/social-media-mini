import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../config/axiosConfig";
import { SignUpValues } from "../../types/auth";

const sendData = async (data: SignUpValues): Promise<SignUpValues> => {
  const response = await apiClient.post("/auth/complete-profile", data);
  return response.data;
};

export const useSignUpGoogle = () => {
  return useMutation<SignUpValues, Error, SignUpValues>({
    mutationFn: sendData,
  });
};
