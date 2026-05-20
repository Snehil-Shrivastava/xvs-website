import SectionHeading from "@/components/SectionHeading";

import "@/app/styles.css";
import ContactForm from "@/components/ContactForm";
import { Heart } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div className="w-450 max-w-450 relative">
        <div className="absolute inset-0 bg-neutral-600 contact-clip-container" />
        <div className="bg-background relative z-5 contact-clip-content flex flex-col justify-center">
          <SectionHeading
            headingText="connect"
            buttonText="contact"
            buttonIcon={
              <Heart stroke="none" fill="#f79839" className="scale-80" />
            }
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
