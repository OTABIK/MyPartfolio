import { useState } from "react";
import s from "./Portfolio.module.css";
import PortfolioDispl from "./PortfolioDispl";
const tabsData = {
  Websites: [
    {
      src: "/public/projects.img/AeroVision.png",
      href: "https://aero-vision-kappa.vercel.app/",
      name: "AeroVision",
    },
    {
      src: "/public/projects.img/Plants.png",
      href: "https://plants-gamma-six.vercel.app/",
      name: "Plants",
    },
    {
      src: "/public/projects.img/Positivus.png",
      href: "https://otabik.github.io/Positivus/Positivus/",
      name: "Positivus",
    },
    {
      src: "/public/projects.img/WDpro.png",
      href: "https://otabik.github.io/WD-Projects/WD%20Project/",
      name: "WD Project",
    },
    {
      src: "/public/projects.img/houseVop.png",
      href: "https://otabik.github.io/HouseVOP_OTABIK/",
      name: "House VOP",
    },
    {
      src: "/public/projects.img/visualD.png",
      href: "https://otabik.github.io/Visual_Designer.otabek/",
      name: "Visual Designer",
    },
  ],
  "Canva Projects": [
    {
      src: "/public/projects.img/1.png",
      href: "https://canva.link/plebogek5g4pf2l",
      name: "House Menu",
    },
    {
      src: "/public/projects.img/photo_2026-02-23_22-51-11.jpg",
      href: "https://canva.link/b5d83mpr7t9tdl3",
      name: "Silvea",
    },
    {
      src: "/public/projects.img/Дизайн без названия (41).png",
      href: "https://canva.link/sjq6wqankyytvav",
      name: "Silvea",
    },
    // {
    //   src: "/public/projects.img/Дизайн без названия (48).png",
    //   href: "https://canva.link/2pzz8v85ajrrdcw",
    //   name: "Silvea",
    // },
    {
      src: "/public/projects.img/Beige and Black Minimalist Project Deck Presentation.png",
      href: "https://canva.link/vdsemqpcizm2f4t",
      name: "Urban Cup",
    },
    {
      src: "/public/projects.img/Interesting Animals of the Planet.png",
      href: "https://canva.link/e18ciukku16t1n1",
      name: "Presentation",
    },
  ],
  "Web Mobiles": [
    {
      src: "/public/projects.img/HV.png",
      href: "https://otabik.github.io/HouseVOP_OTABIK/",
      name: "House VOP",
    },
    {
      src: "/public/projects.img/photo_2_2026-06-04_19-08-22.jpg",
      href: "https://otabik.github.io/Positivus/Positivus/",
      name: "Positivus",
    },
    {
      src: "/public/projects.img/AV.png",
      href: "https://aero-vision-kappa.vercel.app/",
      name: "AeroVision",
    },
    {
      src: "/public/projects.img/photo_4_2026-06-04_19-08-22.jpg",
      href: "https://plants-gamma-six.vercel.app/",
      name: "Plants",
    },
    {
      src: "/public/projects.img/VD.png",
      href: "https://otabik.github.io/Visual_Designer.otabek/",
      name: "Visual Designer",
    },
  ],
};
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Websites");

  return (
    <div id="portfolio" className={s.portfolio}>
      <div className={s.container}>
        <h2 className={s.title}>Portfolio</h2>
        <div className={s.block}>
          {Object.keys(tabsData).map((tab) => (
            <button
              key={tab}
              className={`${s.btn} ${activeTab === tab ? s.active : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={s.box}>
          {tabsData[activeTab].map(({ src, href, name }) => (
            <div className={s.card}>
              <img key={src} className={s.img} src={src} alt="preview" />

              <a className={s.link} target="_blank" href={href}>
                {name}
              </a>
            </div>
          ))}
        </div>
        <PortfolioDispl />
      </div>
    </div>
  );
};

export default Portfolio;
