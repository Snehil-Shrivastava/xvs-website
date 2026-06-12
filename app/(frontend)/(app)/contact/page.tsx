"use client";

import { useEffect } from "react";
import ContactPage from "@/page/ContactPage";

const Contact = () => {
  useEffect(() => {
    const t = setTimeout(() => window.scrollTo(0, 0), 0);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="h-350 max-md:h-280 md:max-lg:h-260 lg:max-1440p:h-320">
      <ContactPage />
    </div>
  );
};

export default Contact;
