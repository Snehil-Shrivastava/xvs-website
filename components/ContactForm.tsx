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
      <form onSubmit={handleSubmit} className="flex flex-col gap-12 pb-15">
        {/* Name Field */}
        <div className="flex flex-col gap-3 text-2xl max-sm:text-base">
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
          <div className="flex flex-col gap-3 text-2xl max-sm:text-base">
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

          <div className="flex flex-col gap-3 text-2xl max-sm:text-base">
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
        <div className="flex flex-col gap-3 text-2xl max-sm:text-base">
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

        <div className="relative flex justify-end items-center mt-6 pb-2 pr-8 w-full h-18">
          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative flex items-center gap-3 z-10 transition-transform active:scale-95 cursor-pointer disabled:opacity-50"
          >
            <span className="text-3xl font-bold text-[#E89335] tracking-wide group-hover:text-[#ffaa4e] transition-colors">
              {status === "loading" ? "Sending..." : "Send"}
            </span>
            <SendHorizontal
              fill="#f79839"
              stroke="#282828"
              strokeOpacity={0.7}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
