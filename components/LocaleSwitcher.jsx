"use client";
import { useState, ChangeEvent, ReactNode, useTransition } from "react";
import Button from "./Button";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";

const LocaleSwitcher = ({ className }) => {
  const [currentLocale, setCurrentLocale] = useState("en");

  // const locales = ["en", "fr"];

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSwitch(locale) {
    const nextLocale = locale;
    startTransition(() => {
      router.push(`/${nextLocale}`);
    });
  }

  return (
    <Button
      className={
        "uppercase fixed top-[110px] right-7 sm:top-10 sm:right-8 md:right-14 lg:right-24 z-50 " +
        " " +
        (className ? className : "")
      }
      borderRadiusClass={"rounded-full"}
      childrenContainerClass={""}
      onClick={() => {
        const locale = currentLocale === "en" ? "fr" : "en";
        onSwitch(locale);
        setCurrentLocale(locale);
      }}
    >
      {currentLocale}
    </Button>
  );
};

export default LocaleSwitcher;
