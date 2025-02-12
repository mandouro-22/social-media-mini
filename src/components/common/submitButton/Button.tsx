import { useTranslation } from "react-i18next";
// import { LoadingButton } from "../LoadingButton/loadingButton";

type SubmitButton = {
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  name: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

export function Button({
  type,
  onClick,
  name,
  className,
  disabled,
  loading,
}: SubmitButton) {
  const { t } = useTranslation();
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}>
      {loading ? <div className="spinner"></div> : t(name)}
    </button>
  );
}
