// import { useGoogleLogin } from "@react-oauth/google";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useGetInfoWithGoogle } from "../../hooks";
// import { toast } from "react-toastify";

export default function GoogleLoginButton() {
  // const navigate = useNavigate();
  // const [token, setToken] = useState<string>("");

  // const signUpUsers = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     setToken(tokenResponse.access_token);
  //     navigate("/register-with-google");
  //   },
  //   onError: (error) => toast.error(error.error_description),

  //   scope:
  //     "openid email profile https://www.googleapis.com/auth/userinfo.profile",
  // });

  // if (isError) {
  //   return toast.error(error.message);
  // }

  const signUpUsers = () => {
    window.location.href =
      "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/google/callback";
  };

  return (
    <button onClick={() => signUpUsers()} className="">
      {/* {isLoading ? "Loading..." : " */}
      Sign in with Google
      {/* "} */}
    </button>
  );
}
