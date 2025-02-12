import { Link } from "react-router-dom";
import ErrorImage from "../../assets/imgs/error.png";

export default function ErrorPage() {
  return (
    <section className="h-full flex items-center justify-center p-2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center justify-center">
            <img
              src={ErrorImage}
              alt="Error"
              className="w-32 h-32 object-cover"
            />
          </div>

          <div className="my-4 text-center">
            <h2 className="text-[#b0b3b8] font-bold mb-2">
              This content is currently unavailable.
            </h2>
            <p className="text-[#b0b3b8] font-medium lg:max-w-xl">
              When this happens, it's usually because the owner has only shared
              the content with a small group of people, changed who can see it,
              or the content has been deleted.
            </p>
          </div>

          <div>
            <Link
              to={"/"}
              className="bg-blue-600 px-10 py-2 text-white font-semibold rounded-md my-4">
              Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
