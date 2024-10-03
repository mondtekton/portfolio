const getProjects = (t /*The translation function */) => {
  return [
    {
      title: "GymTopia",
      desc: t("gymtopia"),
      link: "https://gymtopia.vercel.app/",
      image: "/assets/gymtopia.png",
    },
    {
      title: "Promptopia",
      desc: t("promptopia"),
      link: "https://promptopia-zone.vercel.app/",
      image: "/assets/promptopia.png",
    },
    {
      title: "Chat Gemini",
      desc: t("chat-gemini"),
      link: "https://gemini-talk.netlify.app/",
      image: "/assets/chat-gemini.png",
    },
    {
      title: "Transcribo",
      desc: t("transcribo"),
      link: "",
      image: "/assets/coding3.png",
    },
    ,
    {
      title: "Movies Sky",
      desc: t("movies-sky"),
      link: "https://movies-sky.netlify.app/",
      image: "/assets/movies-sky.png",
    },
    ,
  ];
};

export default getProjects;
