"use client";
import { useTranslations } from "next-intl";
import BackgroundGradient from "./BackgroundGradient";
import SectionHeader from "./SectionHeader";
import teckStack from "@/utils/techStack";

const TechStack = ({ id }) => {
  const t = useTranslations("tech-stack");

  return (
    <section id={id} className="w-full mt-20 mb-5">
      <SectionHeader title={t("some-tech")} />
      <p className="mb-14"></p>
      <div className="px-12 sm:px-14 md:px-16 lg:px-20 max-w-[480px] sm:max-w-[850px] lg:max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 sm:gap-12">
          {teckStack.map((project, index) => (
            <BackgroundGradient
              key={index}
              applyBlur={true}
              gradientClass={
                "bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 "
              }
              blurOpacityClass={"opacity-40"}
              blurClass={"blur-[5px]"}
              containerClass={"p-[1px]"}
            >
              <div key={index} className="bg-[#1e2030] p-6">
                <div className=" p-4 rounded-xl overflow-hidden border mb-5 border-slate-700 bg-gradient-to-r from-[#1e2030] to-[#161824]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className={`rounded-xl w-full h-full  object-cover`}
                  />
                </div>

                <div className="">
                  <h3 className="text-2xl text-slate-200">{project.name}</h3>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
