import AboutMe from "./AboutMe";
import Burger from "./Burger";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import s from "./Header.module.css";
import Hero from "./Hero";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Services from "./Services";
import "swiper/css";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Nav />
        <Burger />
        <Hero />
      </header>
      <main className={s.main}>
        <Services />
        <AboutMe />
        <Portfolio />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Header;
