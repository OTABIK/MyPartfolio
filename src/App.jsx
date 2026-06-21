import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import { useEffect } from "react";
import useScrollUp from "./store/useScrollUp";
import ScrollUp from "./components/ScrollUp";

const App = () => {
  const { showButton, hideButton } = useScrollUp();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        showButton();
      } else {
        hideButton();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <ScrollUp />
    </>
  );
};

export default App;
