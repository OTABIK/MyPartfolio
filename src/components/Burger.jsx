import { useBurger } from "../store/useBurger";
import s from "./Burger.module.css";

const Burger = () => {
  const { isBurger, handleBurger } = useBurger();

  return (
    <div
      className={`${s.burger} ${isBurger && s.active}`}
      onClick={handleBurger}
    >
      <div className={s.block} onClick={(e) => e.stopPropagation()}>
        <img
          className={s.icon}
          onClick={handleBurger}
          src="/icons8-x-96.png"
          alt="x"
        />
        <div className={s.links}>
          <a className={s.link} href="">
            Home
          </a>
          <a className={s.link} href="#services">
            Services
          </a>
          <a className={s.link} href="#aboutMe">
            About me
          </a>
          <a className={s.link} href="#portfolio">
            Portfolio
          </a>
          <a className={s.link} href="#contactMe">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Burger;
