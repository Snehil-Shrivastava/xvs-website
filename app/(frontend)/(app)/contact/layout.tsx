import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | xVS Creations",
  description:
    "Get in touch with xVS Creations — your creative partner for branding, UI/UX, web design, motion graphics & digital experiences. Let's build something amazing together.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact xVS Creations",
  url: "https://xvscreations.com/contact",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SchemaMarkup schema={schema} />
      {children}
    </>
  );
};

export default ContactLayout;
