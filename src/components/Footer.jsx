import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <a href="">
          <img className={s.logo} src="/fainal logo (1).png" alt="otabik" />
        </a>
        <div className={s.links}>
          <a className={s.link} href="#heero">
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
        <div className={s.appLinks}>
          <a
            target="_blank"
            className={s.link}
            href="https://www.instagram.com/"
          >
            <img src="/mdi_instagram.svg" alt="instagram" />
          </a>
          <a
            target="_blank"
            className={s.link}
            href="https://www.linkedin.com/in/%D0%BE%D1%82%D0%B0%D0%B1%D0%B5%D0%BA-%D1%83%D0%BB%D1%83%D0%B3%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-35902a411/"
          >
            <img src="/mingcute_linkedin-line.svg" alt="linkedin" />
          </a>

          <a target="_blank" className={s.link} href="https://github.com/">
            <img src="/icons8-github-logo-64.png" alt="github" />
          </a>
        </div>
        <div className={s.contacts}>
          <p className={s.email}>
            <img src="/icons/mail.svg" alt="mail" /> otabekulugbekov90@gmail.com
          </p>
          <p className={s.phoneNumber}>
            <img src="/icons/call.svg" alt="call" />
            +998 33 184 99 44
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
