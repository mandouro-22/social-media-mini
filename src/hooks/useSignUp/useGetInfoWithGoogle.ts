import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface UserData {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
  verified_email: boolean;
  name: string;
}

const fetchData = async (access_token: string) => {
  const API = import.meta.env.VITE_APP_GET_USER_INFO_WITH_GOOGLE;
  const response = await axios.get<UserData>(API, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  console.log(response.data);
  return response.data;
};

export const useGetInfoWithGoogle = (
  access_token: string
): UseQueryResult<UserData> => {
  return useQuery({
    queryKey: ["userInfo", access_token],
    queryFn: () => fetchData(access_token),
    staleTime: Infinity,
    enabled: !!access_token,
  });
};
