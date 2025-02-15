import { Pages } from "./routers/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Pages />
      <ToastContainer
        position="bottom-right"
        className={"text-sm"}
        closeOnClick
        autoClose={2000}
      />
    </>
  );
}

export default App;
