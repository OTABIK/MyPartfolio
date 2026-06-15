import s from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={s.skills}>
      <div className={s.container}>
        <div className={s.icon}>
          <div className={s.circle}>
            <svg
              className={s.svg}
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65ZM13 65C13 93.7188 36.2812 117 65 117C93.7188 117 117 93.7188 117 65C117 36.2812 93.7188 13 65 13C36.2812 13 13 36.2812 13 65Z"
                fill="url(#paint0_linear_587_786)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_587_786"
                  x1="3.40116"
                  y1="12.2641"
                  x2="130.606"
                  y2="21.9712"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FD6F00" />
                  <stop offset="1" stop-color="#E46400" />
                </linearGradient>
              </defs>
            </svg>
            <img
              className={s.img}
              src="/public/icons/icons8-html5-50.png"
              alt="basil_figma"
            />
          </div>

          <div className={s.info}>
            <h3 className={s.percents}>100%</h3>
            <p className={s.text}>HTML5</p>
          </div>
        </div>

        <div className={s.icon}>
          <div className={s.circle}>
            <svg
              className={s.svg}
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65ZM13 65C13 93.7188 36.2812 117 65 117C93.7188 117 117 93.7188 117 65C117 36.2812 93.7188 13 65 13C36.2812 13 13 36.2812 13 65Z"
                fill="url(#paint0_linear_587_786)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_587_786"
                  x1="3.40116"
                  y1="12.2641"
                  x2="130.606"
                  y2="21.9712"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD6F00" />
                  <stop offset="1" stop-color="#E46400" />
                </linearGradient>
              </defs>
            </svg>
            <img
              className={s.img}
              src="/public/icons/icons8-css3-50.png"
              alt="basil_figma"
            />
          </div>
          <div className={s.info}>
            <h3 className={s.percents}>100%</h3>
            <p className={s.text}>CSS3</p>
          </div>
        </div>
        <div className={s.icon}>
          <div className={s.circle}>
            <svg
              className={s.svg}
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
            >
              {/* Серое кольцо */}
              <circle
                cx="65"
                cy="65"
                r="58.5"
                fill="none"
                stroke="#3A3A3A"
                strokeWidth="13"
              />

              {/* Оранжевые 56% */}
              <circle
                cx="65"
                cy="65"
                r="58.5"
                fill="none"
                stroke="#FD6F00"
                strokeWidth="13"
                strokeLinecap="round"
                transform="rotate(65 65 65)"
                strokeDasharray="206 368"
              />
            </svg>
            <img
              className={s.img}
              src="/public/icons/icons8-javascript-logo-50.png"
              alt="basil_figma"
            />
          </div>
          <div className={s.info}>
            <h3 className={s.percents}>56%</h3>
            <p className={s.text}>Java Script</p>
          </div>
        </div>
        <div className={s.icon}>
          <div className={s.circle}>
            <svg
              className={s.svg}
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
            >
              {/* Серое кольцо */}
              <circle
                cx="65"
                cy="65"
                r="58.5"
                fill="none"
                stroke="#3A3A3A"
                strokeWidth="13"
              />

              {/* Оранжевые 56% */}
              <circle
                cx="65"
                cy="65"
                r="58.5"
                fill="none"
                stroke="#FD6F00"
                strokeWidth="13"
                strokeLinecap="round"
                transform="rotate(90 65 65)"
                strokeDasharray="184 368"
              />
            </svg>
            <img
              className={s.img}
              src="/public/icons/icons8-microsoft-excel-50.png"
              alt="basil_figma"
            />
          </div>
          <div className={s.info}>
            <h3 className={s.percents}>50%</h3>
            <p className={s.text}>Microsoft Excel</p>
          </div>
        </div>
        <div className={s.icon}>
          <div className={s.circle}>
            <svg
              className={s.svg}
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
            >
              {/* Серое кольцо */}
              <circle
                cx="65"
                cy="65"
                r="58.5"
                fill="none"
                stroke="#3A3A3A"
                strokeWidth="13"
              />

              {/* Оранжевые 56% */}
              <circle
                cx="65"
                cy="65"
                r="58.5"
                fill="none"
                stroke="#FD6F00"
                strokeWidth="13"
                strokeLinecap="round"
                transform="rotate(320 65 65)"
                strokeDasharray="313 368"
              />
            </svg>
            <img
              className={s.img}
              src="/public/icons/capcut.png"
              alt="basil_figma"
            />
          </div>
          <div className={s.info}>
            <h3 className={s.percents}>85%</h3>
            <p className={s.text}>CapCut</p>
          </div>
        </div>
        <div className={s.icon}>
          <div className={s.circle}>
            <svg
              className={s.svg}
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
            >
              {/* Серое кольцо */}
              <circle
                cx="65"
                cy="65"
                r="58.5"
                fill="none"
                stroke="#3A3A3A"
                strokeWidth="13"
              />

              {/* Оранжевые 56% */}
              <circle
                cx="65"
                cy="65"
                r="58.5"
                fill="none"
                stroke="#FD6F00"
                strokeWidth="13"
                strokeLinecap="round"
                transform="rotate(320 65 65)"
                strokeDasharray="313 368"
              />
            </svg>

            <img
              className={s.img}
              src="/public/icons8-canva-100.png"
              alt="basil_figma"
            />
          </div>
          <div className={s.info}>
            <h3 className={s.percents}>85%</h3>
            <p className={s.text}>Canva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
