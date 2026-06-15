import { useBurger } from "../store/useBurger";
import s from "./Nav.module.css";
import Services from "./Services";

const Nav = () => {
  const { handleBurger } = useBurger();
  return (
    <nav className={s.nav}>
      <div className={s.container}>
        <img
          className={s.burger}
          src="/align-justify-cropped.svg"
          alt="burger"
          onClick={handleBurger}
        />

        <a href="">
          <img className={s.logo} src="/fainal logo (1).png" alt="otabik" />
        </a>
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
        <a href="#contactMe" className={s.btn}>
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Nav;
