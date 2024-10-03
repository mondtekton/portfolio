"use client";

import { useTranslations } from "next-intl";
import Send from "./Send";
import BackgroundGradient from "./BackgroundGradient";
import Image from "next/image";
import getProjects from "@/utils/projects";
import Button from "./Button";
import scrollToSection from "@/utils/scrollToSection";

const Hero = ({ id, setCurrentIndex }) => {
  const t = useTranslations("hero");
  return (
    <div id={id} className="flex flex-col items-center justify-center gap-16">
      <div className="text-center px-5 max-w-[1050px] leading-loose">
        <p className="text-xs sm:text-sm uppercase pb-3">{t("intro")}</p>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl sm:px-5 md:px-10 lg:px-15  md:font-[500] lg:font-[600]">
          <span className="bg-gradient-to-r from-[#4568DC] to-[#B06AB3] text-transparent bg-clip-text">
            {t("mission").split(".")[0]}
          </span>
          {t("mission").split(".")[1]}
          <span className="italic bg-gradient-to-r from-[#83a4d4] to-[#b6fbff] text-transparent bg-clip-text">
            {" </code>"}
          </span>
        </p>
        <p className="p-3 mt-8 text-blue-200 text-sm font-open-sans max-w-[500px] mx-auto border-[0.5px] border-slate-800 rounded-xl">
          {t("me")}
        </p>
      </div>
      <Button
        onClick={() => {
          setCurrentIndex(3);
          scrollToSection("contact");
        }}
      >
        <p className="">{t("invitation-button")}</p>
      </Button>
    </div>
  );
};

export default Hero;
