// import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function GoogleLoginButton() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // const clientId =
  //   "94142909577-8qav3d7hpcms630ej23g1d86rurcvqun.apps.googleusercontent.com";
  // const backendRedirectUri =
  //   "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/google/callback"; // Backend Route

  // const loginWithGoogle = async () => {
  //   const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
  //     backendRedirectUri
  //   )}&response_type=code&scope=openid%20profile%20email`;

  //   window.location.href = googleAuthUrl;
  // };

  // const loginWithGoogle = () => {
  //   window.location.href =
  //     "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/google/callback";
  // };

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const token = urlParams.get("access_token");
  //   const code = urlParams.get("code");
  //   console.log(urlParams);
  //   console.log(token);
  //   console.log(code);
  // });
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // جلب البيانات الأساسية
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        // جلب بيانات الميلاد والجنس من Google People API
        const peopleInfo = await axios.get(
          "https://people.googleapis.com/v1/people/me?personFields=genders,birthdays",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );
        console.log(tokenResponse.access_token);
        console.log("Basic Info:", userInfo.data);
        console.log("Additional Info:", peopleInfo.data);

        // setUserData({
        //   ...userInfo.data, // البيانات الأساسية
        //   ...peopleInfo.data, // بيانات إضافية مثل الجنس وتاريخ الميلاد
        // });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    onError: (error) => console.error("Login Failed:", error),

    // إضافة Scopes المطلوبة
    scope:
      "openid email profile https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/userinfo.profile",
  });

  return (
    <button onClick={() => login()} className="">
      Sign in with Google
    </button>
  );
}
