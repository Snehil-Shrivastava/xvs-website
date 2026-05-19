"use client";

import { SendHorizontal } from "lucide-react";
import Form from "next/form";

const ContactForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      message: formData.get("message"),
    };

    // Add your API call or Server Action logic here
    console.log("Form submitted:", data);
  };
  return (
    <div className="max-w-4/5 w-4/5 mx-auto">
      <Form action={handleSubmit} className="flex flex-col gap-12 pb-15">
        {/* Name Field */}
        <div className="flex flex-col gap-3 text-2xl">
          <label htmlFor="name" className="text-gray-100 text-lg tracking-wide">
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full bg-transparent border-b border-neutral-600 pb-3 text-gray-200 placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors"
            autoComplete="off"
          />
        </div>

        {/* Email & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col gap-3 text-2xl">
            <label
              htmlFor="email"
              className="text-gray-100 text-lg tracking-wide"
            >
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="johnedoe@doe.com"
              className="w-full bg-transparent border-b border-neutral-600 pb-3 text-gray-200 placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-3 text-2xl">
            <label
              htmlFor="contact"
              className="text-gray-100 text-lg tracking-wide"
            >
              Contact*
            </label>
            <input
              id="contact"
              name="contact"
              type="tel"
              required
              placeholder="+91-887-887-887"
              className="w-full bg-transparent border-b border-neutral-600 pb-3 text-gray-200 placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-3 text-2xl">
          <label
            htmlFor="message"
            className="text-gray-100 text-lg tracking-wide"
          >
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={1}
            placeholder="Drop your message"
            className="w-full bg-transparent border-b border-neutral-600 pb-3 text-gray-200 placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors resize-none overflow-hidden"
            autoComplete="off"
          />
        </div>

        {/* Submit Area with Custom Border Accent */}
        <div className="relative flex justify-end items-center mt-6 pb-2 pr-8 w-full h-18">
          {/* Decorative Sci-Fi Corner Border */}
          {/* <svg
            className="absolute bottom-0 right-0 w-[80%] h-full pointer-events-none"
            viewBox="0 0 300 100"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,99 L 280,99 L 299,80 L 299,0"
              stroke="url(#fadeGradient)"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient
                id="fadeGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative flex items-center gap-3 z-10 transition-transform active:scale-95 cursor-pointer"
          >
            <span className="text-3xl font-bold text-[#E89335] tracking-wide group-hover:text-[#ffaa4e] transition-colors">
              Send
            </span>
            <SendHorizontal
              fill="#f79839"
              stroke="#282828"
              strokeOpacity={0.7}
            />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
