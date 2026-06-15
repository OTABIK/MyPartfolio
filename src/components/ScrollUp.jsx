import useScrollUp from "../store/useScrollUp";
import s from "./ScrollUp.module.css";

const ScrollUp = () => {
  const { isVisible } = useScrollUp();

  const btnUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={btnUp}
      className={`${s.scrollUp} ${isVisible ? s.show : ""}`}
    >
      ↑
    </button>
  );
};

export default ScrollUp;
