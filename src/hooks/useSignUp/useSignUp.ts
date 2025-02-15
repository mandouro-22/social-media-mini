import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { SignUpValues } from "../../types/auth";
import { apiClient } from "../../config/axiosConfig";

const sendData = async (data: SignUpValues): Promise<SignUpValues> => {
  const response = await apiClient.post("/auth/signup", data);
  return response.data;
};

export const useSignup = () => {
  return useMutation<SignUpValues, Error, SignUpValues>({
    mutationFn: sendData,
  });
};
