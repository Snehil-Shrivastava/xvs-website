"use client";

import { SendHorizontal } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4/5 w-4/5 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-12 pb-15 md:max-xl:pb-0"
      >
        {/* Name Field */}
        <div className="flex flex-col gap-3 text-2xl max-sm:text-base sm:max-xl:text-xl">
          <label
            htmlFor="name"
            className="text-gray-100 text-lg max-sm:text-sm tracking-wide"
          >
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

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col gap-3 text-2xl max-sm:text-base sm:max-xl:text-xl">
            <label
              htmlFor="email"
              className="text-gray-100 text-lg max-sm:text-sm tracking-wide"
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

          <div className="flex flex-col gap-3 text-2xl max-sm:text-base sm:max-xl:text-xl">
            <label
              htmlFor="phone"
              className="text-gray-100 text-lg max-sm:text-sm tracking-wide"
            >
              Contact*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91-887-887-887"
              className="w-full bg-transparent border-b border-neutral-600 pb-3 text-gray-200 placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-3 text-2xl max-sm:text-base sm:max-xl:text-xl">
          <label
            htmlFor="message"
            className="text-gray-100 text-lg max-sm:text-sm tracking-wide"
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

        {/* Status messages */}
        {status === "success" && (
          <p className="text-green-400 text-sm">
            Message sent! We&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm">{errorMsg}</p>
        )}

        <div className="relative flex justify-end items-center mt-6 pb-2 pr-8 w-full h-18 font-calSans">
          {/* <button
            type="submit"
            disabled={status === "loading"}
            className="group relative flex items-center gap-3 z-10 transition-transform active:scale-95 cursor-pointer disabled:opacity-50 bg-brand-orange hover:bg-brand-orange-light rounded-md px-5 py-1.5"
          >
            <span className="text-3xl text-white tracking-wide group-hover:text-white transition-colors">
              {status === "loading" ? "Sending..." : "Send"}
            </span>
            <SendHorizontal
              fill="#f79839"
              stroke="#ffffff"
              strokeOpacity={0.7}
            />
          </button> */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`group max-md:w-full cursor-pointer`}
          >
            <span
              className="text-brand-orange hover:text-white bg-neutral-900/40 px-8 max-md:px-4 md:max-lg:px-6 py-2 max-sm:py-0.5 sm:max-md:py-1.5 md:max-lg:py-2 lg:max-xl:py-2.5 backdrop-blur-xs btn-clip flex items-center gap-2 max-sm:text-[8px] sm:max-md:text-[10px] md:max-lg:text-sm max-md:justify-center"
              style={{
                background:
                  "radial-gradient(circle,rgba(247, 152, 57, 0.2) 0%, rgba(255, 173, 64, 0.15) 18%, rgba(100, 100, 100, 0.5) 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="max-md:text-lg md:max-lg:text-sm lg:max-xl:text-xl text-3xl tracking-wider transition-colors">
                Send
              </span>
              <SendHorizontal
                // fill="#f79839"
                // stroke="#f79839"
                strokeOpacity={0.7}
                className="transition-colors lg:max-xl:w-5 max-lg:w-4"
              />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
