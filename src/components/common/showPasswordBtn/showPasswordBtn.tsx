import { FaEye, FaEyeSlash } from "react-icons/fa";

interface showPasswordProps {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}

export function ShowPasswordBtn({
  setShowPassword,
  showPassword,
}: showPasswordProps) {
  return (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
      {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
    </button>
  );
}
