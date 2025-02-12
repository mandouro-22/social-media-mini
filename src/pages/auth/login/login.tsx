import logo from "../../../assets/imgs/logo.png";

export default function Login() {
  return (
    <section>
      <div className="container mx-auto p-2">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-center text-xl">Login to your account</h1>
            <form action="">
              <div className="flex flex-col gap-y-2">
                <input
                  type="text"
                  className="bg-white text-black rounded-md px-3 py-1"
                />
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
