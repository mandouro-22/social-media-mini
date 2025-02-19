import { useEffect } from "react";

export default function GoogleLoginButton() {
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

  const loginWithGoogle = () => {
    window.location.href =
      "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/google/callback";
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("access_token");
    const code = urlParams.get("code");
    console.log(urlParams);
    console.log(token);
    console.log(code);
  });

  return (
    <button onClick={() => loginWithGoogle()} className="">
      Sign in with Google
    </button>
  );
}
