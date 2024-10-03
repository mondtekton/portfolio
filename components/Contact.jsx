"use client";
import { sendForm, init } from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import MessageBox from "./MessageBox";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [showBox, setShowBox] = useState(false);
  const [hasSucceed, setHasSucceed] = useState(null);

  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_ID;

  const formRef = useRef(null);
  const t = useTranslations("contact-comp");

  useEffect(() => {
    init(publicKey);
  }, []);

  return (
    <section id="contact" className="my-16">
      <SectionHeader title={t("section-title")} />
      <p className="mb-14"></p>
      <div className="p-12 sm:p-14 md:p-16 lg:p-7">
        <div className="max-w-[400px] sm:max-w-[550px] border border-slate-700 p-10 sm:p-12 bg-gradient-to-r from-[#1e2030] to-[#161824] rounded-3xl shadow-lg shadow-purple-900/50  mx-auto">
          <p className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            {t("title")}
          </p>
          <form
            id="contact-us"
            onSubmit={async (e) => {
              e.preventDefault();

              try {
                await sendForm(serviceId, templateId, "#contact-us");
                if (hasSucceed != true) setHasSucceed(true);
                setShowBox(true);
              } catch (error) {
                if (hasSucceed != false) setHasSucceed(false);
                setShowBox(true);
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-8 text-slate-300"
          >
            <input
              id="from_name"
              name="from_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={t("form-label-name")}
              className="rounded-lg px-4 py-3 bg-[#2a2d3e] placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
            />
            <input
              id="from_email"
              name="from_email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={t("form-label-email")}
              className="rounded-lg px-4 py-3 bg-[#2a2d3e] placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300"
            />
            <input
              id="from_telephone"
              name="from_telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              type="tel"
              placeholder={t("form-label-phone")}
              className="rounded-lg px-4 py-3 bg-[#2a2d3e] placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
            />
            <textarea
              id="from_message"
              name="from_message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("form-label-message")}
              className="col-span-1 sm:col-span-2 rounded-lg px-4 py-3 bg-[#2a2d3e] placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 resize-none"
            />
            <Button
              type={"submit"}
              className={"col-span-1 sm:col-span-2 mt-4 font-semibold"}
            >
              {t("form-label-submit")}
            </Button>
          </form>
          <MessageBox
            isOpen={showBox}
            hasSucceed={hasSucceed}
            duration={3000}
            onClose={() => {
              setEmail("");
              setMessage("");
              setTelephone("");
              setName("");
              setShowBox(false);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
