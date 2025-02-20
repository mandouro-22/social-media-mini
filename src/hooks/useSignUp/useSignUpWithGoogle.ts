import { useMutation } from "@tanstack/react-query";
// import { apiClient } from "../../config/axiosConfig";
import { SignUpValues } from "../../types/auth";
import axios from "axios";

const sendData = async (data: SignUpValues): Promise<SignUpValues> => {
  const response = await axios.post(
    "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/complete-profile",
    data
  );
  return response.data;
};

export const useSignUpGoogle = () => {
  return useMutation<SignUpValues, Error, SignUpValues>({
    mutationFn: sendData,
  });
};
