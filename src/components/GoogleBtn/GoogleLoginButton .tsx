// import { useGoogleLogin } from "@react-oauth/google";
// import { useMutation } from "@tanstack/react-query";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function GoogleLoginButton() {
  // const navigate = useNavigate();

  // Mutation معدلة لإرسال التوكين
  //   const { mutate, isPending } = useMutation({
  //     mutationFn: async () => {
  //       const response = await axios.get(
  //         "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/google/callback"
  //       );
  //       return response.data;
  //     },
  //     onSuccess: (data) => {
  //       console.log(data);
  //     },
  //     onError: (error) => {
  //       console.error("Error:", error);
  //     },
  //   });

  // استخدام useGoogleLogin الصحيح
  //   const googleLogin = useGoogleLogin({
  //     onSuccess: (response) => {
  //       mutate(response?.access_token);
  //     },
  //     onError: (error) => console.error("Google Login Failed:", error),
  //   });

  const login = async () => {
    const fetch = await axios.get(
      "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/google/callback"
    );
    // navigate(fetch.data);
    console.log(fetch.data);
    return fetch.data;
    // console.log(fetch.data);
  };

  return (
    <button
      onClick={login} // تشغيل عملية جوجل
      //   disabled={isPending}
      className="...">
      {/* {isPending ? "Loading..." : "Sign in with Google 🚀"} */}
      Sign in with Google
    </button>
  );
}

//   // دالة تسجيل الدخول عبر Google
//   const googleLogin = useGoogleLogin({
//     scope:
//       "openid profile email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read",
//     onSuccess: (tokenResponse) => {
//       console.log("Google Token:", tokenResponse);
//         mutate(tokenResponse.access_token);
//     },
//     onError: (error) => {
//       console.error("Google Login Failed:", error);
//     },
//   });
