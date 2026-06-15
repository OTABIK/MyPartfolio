import s from "./PortfolioDispl.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const tabsData = {
  Websites: [
    {
      id: 1,
      src: "/Beige and Black Minimalist Project Deck Presentation.png",
      href: "https://aero-vision-kappa.vercel.app/",
      name: "AeroVision",
    },
    {
      id: 2,
      src: ".img/Plants.png",
      href: "https://plants-gamma-six.vercel.app/",
      name: "Plants",
    },
    {
      id: 3,
      src: ".img/Positivus.png",
      href: "https://otabik.github.io/Positivus/Positivus/",
      name: "Positivus",
    },
    {
      id: 4,
      src: ".img/WDpro.png",
      href: "https://otabik.github.io/WD-Projects/WD%20Project/",
      name: "WD Project",
    },
    {
      id: 6,
      src: ".img/houseVop.png",
      href: "https://otabik.github.io/HouseVOP_OTABIK/",
      name: "House VOP",
    },
    {
      id: 7,
      src: ".img/visualD.png",
      href: "https://otabik.github.io/Visual_Designer.otabek/",
      name: "Visual Designer",
    },
  ],
  "Canva Projects": [
    {
      id: 1,
      src: ".img/1.png",
      href: "https://canva.link/plebogek5g4pf2l",
      name: "House Menu",
    },
    {
      id: 2,
      src: ".img/photo_2026-02-23_22-51-11.jpg",
      href: "https://canva.link/b5d83mpr7t9tdl3",
      name: "Silvea",
    },
    {
      id: 3,
      src: ".img/Дизайн без названия (41).png",
      href: "https://canva.link/sjq6wqankyytvav",
      name: "Silvea",
    },
    // {
    //   src: ".img/Дизайн без названия (48).png",
    //   href: "https://canva.link/2pzz8v85ajrrdcw",
    //   name: "Silvea",
    // },
    {
      id: 4,
      src: ".img/Beige and Black Minimalist Project Deck Presentation.png",
      href: "https://canva.link/vdsemqpcizm2f4t",
      name: "Urban Cup",
    },
    {
      id: 6,
      src: ".img/Interesting Animals of the Planet.png",
      href: "https://canva.link/e18ciukku16t1n1",
      name: "Presentation",
    },
  ],
  "Web Mobiles": [
    {
      id: 1,
      src: ".img/HV.png",
      href: "https://otabik.github.io/HouseVOP_OTABIK/",
      name: "House VOP",
    },
    {
      id: 2,
      src: ".img/photo_2_2026-06-04_19-08-22.jpg",
      href: "https://otabik.github.io/Positivus/Positivus/",
      name: "Positivus",
    },
    {
      id: 3,
      src: ".img/AV.png",
      href: "https://aero-vision-kappa.vercel.app/",
      name: "AeroVision",
    },
    {
      id: 4,
      src: ".img/photo_4_2026-06-04_19-08-22.jpg",
      href: "https://plants-gamma-six.vercel.app/",
      name: "Plants",
    },
    {
      id: 6,
      src: ".img/VD.png",
      href: "https://otabik.github.io/Visual_Designer.otabek/",
      name: "Visual Designer",
    },
  ],
};
const PortfolioDispl = () => {
  const swiperRef = useRef(null);

  const [activeTab, setActiveTab] = useState("Websites");
  return (
    <div className={s.portfolioDispl}>
      <div className={s.container}>
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
        <Swiper
          className={s.mySwiper}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          breakpoints={{
            // 640: { slidesPerView: 2 },
            945: { slidesPerView: 2 },
          }}
          modules={[Autoplay, Pagination]}
        >
          {tabsData[activeTab].map((tabsData) => (
            <SwiperSlide key={tabsData.id} className={s.swiperSlide}>
              <div className={s.card}>
                <img className={s.img} src={tabsData.src} alt="preview" />

                <a className={s.link} target="_blank" href={tabsData.href}>
                  {tabsData.name}
                </a>
              </div>
            </SwiperSlide>
          ))}
          {/* <div className={s.box}>{ id, src, href, name }</div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioDispl;
