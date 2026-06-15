import s from "./Services.module.css";

const Services = () => {
  return (
    <section id="services" className={s.services}>
      <div className={s.container}>
        <h2 className={s.title}>Services</h2>
        <p className={s.text}>
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam
        </p>
        <div className={s.servBlock}>
          <div className={s.box}>
            <div className={s.inf}>
              <img
                className={s.img}
                src="/icons/icons8-website-64.png"
                alt=""
              />
              <p className={s.subTitle}>Website Design</p>
            </div>
            <p className={s.text}>
              Creating modern, responsive, and user-friendly website designs for
              brands, portfolios, and digital businesses.
            </p>
          </div>
          <div className={s.box}>
            <div className={s.inf}>
              <img
                className={s.img}
                src="/icons/icons8-content-50.png"
                alt=""
              />
              <p className={s.subTitle}>Social Media Content</p>
            </div>
            <p className={s.text}>
              Designing engaging visual content, posts, stories, and creatives
              for modern social media platforms.
            </p>
          </div>
          <div className={s.box}>
            <div className={s.inf}>
              <img
                className={s.img}
                src="/icons/icons8-portfolio-50.png"
                alt=""
              />
              <p className={s.subTitle}>Figma to Website Development</p>
            </div>
            <p className={s.text}>
              Transforming Figma designs into responsive, clean, and functional
              websites with modern layouts.
            </p>
          </div>
          <div className={s.box}>
            <div className={s.inf}>
              <img className={s.img} src="/icons/icons8-design-50.png" alt="" />
              <p className={s.subTitle}>Brand Visual Design</p>
            </div>
            <p className={s.text}>
              Building visual identity through colors, typography, banners,
              logos, and consistent brand style elements.
            </p>
          </div>
          <div className={s.box}>
            <div className={s.inf}>
              <img
                className={s.img}
                src="/icons/icons8-multimedia-64.png"
                alt=""
              />
              <p className={s.subTitle}>Multimedia Designer</p>
            </div>
            <p className={s.text}>
              Creating digital content using graphics, video, visuals, and web
              elements for modern online platforms.
            </p>
          </div>
          <div className={s.box}>
            <div className={s.inf}>
              <img
                className={s.img}
                src="/icons/icons8-video-editing-50.png"
                alt=""
              />
              <p className={s.subTitle}>Simple Video Editing</p>
            </div>
            <p className={s.text}>
              Editing short videos with music, subtitles, transitions, and
              engaging visuals for social media content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
