"use client";

import { useTranslations } from "next-intl";

const Nav = ({
  action0,
  action1,
  action2,
  action3,
  currentIndex,
  setCurrentIndex,
}) => {
  const t = useTranslations();

  const getCurrentStyle = (index) =>
    currentIndex === index
      ? "bg-black/70 border border-blue-600"
      : "hover:border hover:border-blue-500";

  const sections = ["about", "projects", "competences", "contact"];

  return (
    <div className="bg-gradient-to-r hover:bg-gradient-to-l from-[#12c2e98f] via-[#c471ed8f] to-[#f163aa8f] p-[1px] rounded-[20px] sm:rounded-3xl duration-300 fixed top-10 z-50">
      <div className="bg rounded-[20px] sm:rounded-3xl">
        <div className="flex  items-center justify-center gap-2 md:gap-3 px-3 md:px-4 md:py-3  py-[10px]  bg-white/[0.02]  rounded-[20px] sm:rounded-3xl text-sm sm:text-base">
          <button
            onClick={() => {
              setCurrentIndex(0);
              if (action0 !== undefined && action0 !== null)
                action0(sections[0]);
            }}
            className={`px-2 md:px-4 py-1 rounded-full ${getCurrentStyle(0)}`}
          >
            {t(sections[0])}
          </button>
          <button
            className={`px-3 md:px-4 py-1 rounded-full ${getCurrentStyle(1)}`}
            onClick={() => {
              setCurrentIndex(1);
              if (action1 !== undefined && action1 !== null)
                action1(sections[1]);
            }}
          >
            {t(sections[1])}
          </button>
          <button
            className={`px-3 md:px-4 py-1 rounded-full ${getCurrentStyle(2)}`}
            onClick={() => {
              setCurrentIndex(2);
              if (action2 !== undefined && action2 !== null)
                action2(sections[2]);
            }}
          >
            {t(sections[2])}
          </button>
          <button
            className={`px-3 py-1 md:px-4 rounded-full ${getCurrentStyle(3)}`}
            onClick={() => {
              setCurrentIndex(3);
              if (action3 !== undefined && action3 !== null)
                action3(sections[3]);
            }}
          >
            {t(sections[3])}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
