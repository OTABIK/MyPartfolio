import s from "./AboutMe.module.css";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div id="aboutMe" className={s.aboutMe}>
      <div className={s.container}>
        <h2 className={s.title}>About Me</h2>
        <p className={s.text}>User Interface and User Experience</p>
        <div className={s.mainInf}>
          <div className={s.foto}>
            <div className={s.svg}></div>
            <img
              className={s.img}
              src="/Дизайн без названия (60) (1).png"
              alt="MyHero"
            />
          </div>
          <div className={s.block}>
            <p className={s.textAbout}>
              My name is Otabek Ulugbekov, I am 18 years old. I graduated from
              School N.10 in 2026. I have been interested in IT since I was 13
              years old and previously studied basic IT courses. Later, I
              completed a web development course where I learned{" "}
              <span className={s.span}>HTML</span>,{" "}
              <span className={s.span}>CSS</span>, and{" "}
              <span className={s.span}>JavaScript.</span> I have also been
              interested in <span className={s.span}>social media</span> and{" "}
              <span className={s.span}>digital content</span> for many years. I
              have experience running my own YouTube channel with more than
              50,000 subscribers. I also worked on product cards for Uzum and
              completed different digital design and content projects. I can
              work with <span className={s.span}>Microsoft Office</span>{" "}
              applications such as{" "}
              <span className={s.span}>Microsoft Excel</span>,{" "}
              <span className={s.span}>PowerPoint</span> , and {""}
              <span className={s.span}>Word</span>. I am interested in{" "}
              <span className={s.span}> web design</span>,{" "}
              <span className={s.span}>social media content</span>,{" "}
              <span className={s.span}>video editing</span>, and modern digital
              projects.
            </p>

            <a
              href="/Professional CV Resume (4).pdf"
              download="CV.pdf"
              className={s.cv}
            >
              Download CV
            </a>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
