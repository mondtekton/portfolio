"use client";
import { useTranslations } from "next-intl";
import BackgroundGradient from "./BackgroundGradient";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

const Projects = ({ projects, id }) => {
  const t = useTranslations("projects-comp");

  return (
    <section id={id} className="w-full">
      <SectionHeader title={t("recent-projects")} />
      <p className="mb-14"></p>
      <div className="px-12 sm:px-14 md:px-16 lg:px-20 max-w-[480px] sm:max-w-[850px] lg:max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 sm:gap-12">
          {projects.map((project, index) => (
            <BackgroundGradient
              key={index}
              applyBlur={true}
              blurOpacityClass={"opacity-50"}
              blurClass={"blur-md"}
              containerClass={"p-[1px]"}
            >
              <div key={index} className="bg-[#1e2030] p-6">
                <div className=" p-4 rounded-xl overflow-hidden border mb-5 border-slate-700 bg-gradient-to-r from-[#1e2030] to-[#161824]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className={`rounded-xl w-full h-full aspect-square ${
                      index % 2 === 0 ? "rotate-6" : "-rotate-6"
                    }     object-cover`}
                  />
                </div>

                <div className="">
                  <h3 className="text-2xl font-bold text-slate-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mt-2">{project.desc}</p>
                  <Button
                    onClick={() => window.open(project.link, "_blank")}
                    className={"w-full mt-5"}
                  >
                    {t("project-live-site-button")}
                  </Button>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
