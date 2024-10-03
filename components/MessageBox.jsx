import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const MessageBox = ({
  title,
  message,
  isOpen,
  onClose,
  duration,
  hasSucceed,
}) => {
  const [showDialog, setShowDialog] = useState(isOpen);
  const t = useTranslations("message-box");

  useEffect(() => {
    if (isOpen) {
      setShowDialog(true);
      const timer = setTimeout(() => {
        setShowDialog(false);
        if (onClose) onClose(); // Corrected case
      }, duration || 5000); // Set a default duration of 5000ms

      return () => clearTimeout(timer);
    } else {
      setShowDialog(false); // Ensure dialog closes when isOpen changes
    }
  }, [isOpen, onClose, duration]); // Added duration to dependencies

  if (!showDialog) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative bg-gray-900 text-white rounded-lg shadow-2xl border border-gray-700 p-8 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {title ? title : hasSucceed ? t("success") : t("failure")}
        </h2>

        <p className="mb-6 text-center">
          {message
            ? message
            : title
            ? ""
            : hasSucceed
            ? t("success-message")
            : t("failure-message")}
        </p>

        <button
          className="relative z-10 w-full py-2 px-4 text-lg font-semibold rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 border border-gray-500 hover:border-blue-500 hover:from-gray-800 hover:via-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-300 ease-in-out"
          onClick={() => {
            setShowDialog(false);
            if (onClose) onClose();
          }}
        >
          {t("close-box")}
        </button>
        <div className="absolute inset-0 w-full h-full rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.4)] z-0"></div>
      </div>
    </div>
  );
};

export default MessageBox;
