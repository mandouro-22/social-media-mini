export default function GoogleLoginButton() {
  const signUpUsers = () => {
    window.location.href =
      "https://delightful-shelli-social-media-app-437a3548.koyeb.app/api/auth/google/callback";
  };

  return (
    <button onClick={() => signUpUsers()} className="cursor-pointer">
      Sign in with Google 🚀
    </button>
  );
}
