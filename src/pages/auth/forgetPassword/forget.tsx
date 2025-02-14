import { useTranslation } from "react-i18next";
import forgetImage from "../../../assets/imgs/forgetpassword.png";
export default function ForgetPassword() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container mx-auto px-2 py-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-4 h-screen place-content-center">
          <div className="w-full max-sm:my-6 hidden sm:flex items-center justify-center ">
            <img
              src={forgetImage}
              alt="logo"
              className="w-48 mx-auto md:w-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full max-sm:my-6 flex items-center justify-center py-6">
            <div className="flex items-center flex-col max-sm:w-full">
              <h1 className="text-center text-2xl md:text-4xl font-semibold">
                {t("Forget Password")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
