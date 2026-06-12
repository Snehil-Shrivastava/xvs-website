"use client";

import { useState, useEffect, Suspense } from "react";
import {
  useRouter,
  useSearchParams,
  usePathname,
  ReadonlyURLSearchParams,
} from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  Video,
  Calendar as CalendarIcon,
  Globe,
  Minus,
  Plus,
  Send,
  Loader2,
} from "lucide-react";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isBefore,
  startOfDay,
  addMinutes,
  isSameMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  isAfter,
} from "date-fns";
import Image from "next/image";

import xvslogo from "@/public/svg/xvs-logo-svg.svg";

type DayAvailability = {
  date: string;
  slots: { time: string; available: boolean }[];
};

function ScheduleModalInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  const isModalOpen = searchParams.get("category") === "schedule-meeting";

  // Core State
  const [step, setStep] = useState<1 | 2>(1);
  const [mobileStep, setMobileStep] = useState<"date" | "time">("date"); // NEW: Tracks mobile view split
  const [currentMonth, setCurrentMonth] = useState<Date>(() =>
    startOfMonth(addDays(new Date(), 1)),
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(30);
  const [timeZone, setTimeZone] = useState<string>("");
  const [tzAbbr, setTzAbbr] = useState<string>("");

  // API State
  const [availability, setAvailability] = useState<DayAvailability[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Step 2 Form State
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    notes: "",
    industry: "",
    company: "",
    website: "",
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Initialize selected date and timezone on mount
  useEffect(() => {
    const tomorrow = startOfDay(addDays(new Date(), 1));
    setSelectedDate(tomorrow);
    setCurrentMonth(startOfMonth(tomorrow));

    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const abbr = new Date()
      .toLocaleTimeString("en-us", { timeZoneName: "short" })
      .split(" ")[2];
    setTzAbbr(abbr || "");
  }, []);

  // Fetch Availability from API
  useEffect(() => {
    if (!isModalOpen || !timeZone) return;

    const fetchAvailability = async () => {
      setIsLoadingSlots(true);
      try {
        // Fetch slightly wider than the current month to ensure edge days render correctly
        const start = startOfMonth(currentMonth).toISOString();
        const end = endOfMonth(
          addDays(endOfMonth(currentMonth), 7),
        ).toISOString();

        const res = await fetch(
          `/api/get-availability?startDate=${start}&endDate=${end}&duration=${duration}&timezone=${encodeURIComponent(timeZone)}`,
        );
        const data = await res.json();

        if (data.availability) {
          setAvailability(data.availability);
        }
      } catch (error) {
        console.error("Failed to fetch slots:", error);
      } finally {
        setIsLoadingSlots(false);
      }
    };

    fetchAvailability();
    // Reset selected time when duration changes because the slots map changes
    setSelectedTime(null);
  }, [currentMonth, duration, timeZone, isModalOpen]);

  if (!isModalOpen) return null;

  // --- Handlers ---
  const handleClose = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("category");
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });

    // Reset state after slight delay for animation smoothness
    setTimeout(() => {
      setStep(1);
      setMobileStep("date");
      setSelectedTime(null);
      setFormData({
        name: "",
        contact: "",
        email: "",
        notes: "",
        industry: "",
        company: "",
        website: "",
      });
    }, 300);
  };

  const handleSchedule = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        date: format(selectedDate!, "yyyy-MM-dd"),
        time: selectedTime,
        duration,
        name: formData.name,
        email: formData.email,
        phone: formData.contact,
        message: formData.notes,
        industry: formData.industry,
        company: formData.company,
        website: formData.website,
        timezone: timeZone,
      };

      const res = await fetch("/api/book-slot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Event Scheduled successfully! Confirmation emails sent.");
        handleClose();
      } else {
        alert(`Error: ${data.error || "Failed to book appointment."}`);
      }
    } catch (error) {
      console.error(error);
      alert("A network error occurred while booking the appointment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Calendar Logic ---
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday start
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

  const today = currentMonth // only compute when we have a real date
    ? new Date()
    : null;

  const isPrevMonthDisabled = today
    ? isBefore(startOfMonth(currentMonth), startOfMonth(today)) ||
      isSameMonth(currentMonth, today)
    : true;

  const maxBookingDate = today ? startOfDay(addMonths(today, 1)) : null;

  const isNextMonthDisabled = maxBookingDate
    ? isBefore(maxBookingDate, startOfMonth(addMonths(currentMonth, 1)))
    : false;

  // --- Helpers ---
  const formatStep2DateStr = () => {
    if (!selectedDate || !selectedTime) return "";
    const [hours, minutes] = selectedTime.split(":").map(Number);
    const sDate = new Date(selectedDate);
    sDate.setHours(hours, minutes);
    const eDate = addMinutes(sDate, duration);

    return `${format(sDate, "h:mm a")} - ${format(eDate, "h:mm a")}, ${format(sDate, "EEEE, MMM d, yyyy")} ${tzAbbr}`;
  };

  const getDayAvailability = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return availability.find((a) => a.date === dateStr);
  };

  const currentSelectedDayData = selectedDate
    ? getDayAvailability(selectedDate)
    : null;
  // Keep all slots so we can show the disabled ones
  const allTimeSlots = currentSelectedDayData?.slots || [];

  const isStep1Valid = selectedDate !== null && selectedTime !== null;
  const isStep2Valid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.notes.trim() !== "";

  return (
    <div className="fixed inset-0 z-9999 overflow-y-auto bg-black/20 backdrop-blur-lg custom-scroll font-poppins select-none pointer-events-none">
      <div className="flex min-h-full max-md:h-full items-center justify-center p-4 max-md:p-0 md:p-6">
        {/* Scrollbar Customization Scoped Style */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background-color: #f7983999; border-radius: 10px; }
      `,
          }}
        />

        {/* Outer Border wrapper for Sci-Fi cut corners */}
        <div className="relative w-full md:max-w-290 p-px shadow-2xl modal-clip pointer-events-auto max-md:h-full">
          {/* Main Modal Container */}
          <div className="bg-linear-[-25deg,rgba(247,152,57,0.3)_0%,rgba(121,97,73,0.3)_20%,rgba(44,44,44,0.756)_40%,rgba(29,29,29,0.734)_100%] backdrop-blur-md w-full h-full flex flex-col max-md:px-8 max-md:pt-8 max-md:pb-8 md:p-12 modal-clip">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-8 right-8 text-white hover:text-brand-orange transition-colors z-10 cursor-pointer"
            >
              <X className="w-8 h-8 font-light" strokeWidth={1.5} />
            </button>

            {/* Header */}
            <div className="flex max-sm:flex-col items-center gap-8 max-sm:gap-6 mb-10 max-sm:mb-2 sm:max-md:mb-0">
              <div className="font-bold text-4xl tracking-tighter flex items-center">
                <Image src={xvslogo} alt="xvs logo" />
              </div>
              <div className="w-px h-12 bg-zinc-700 max-sm:hidden"></div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-xl max-sm:text-sm font-medium tracking-wide max-sm:text-center">
                  xVS Creations
                </span>
                <span className="text-brand-cream text-3xl max-sm:text-lg font-bold tracking-wide max-sm:text-center">
                  Book a Free Consultation
                </span>
              </div>
            </div>

            <hr className="bg-zinc-700 opacity-20 max-sm:my-2 sm:max-md:my-6 md:hidden" />

            {/* --- STEP 1 --- */}
            {step === 1 && (
              <div className="flex flex-col md:flex-row max-md:mt-2 max-md:h-full">
                {/* Left Column: Calendar */}
                <div
                  className={`w-full md:w-auto pr-0 md:pr-10 md:border-r border-zinc-700/50 flex flex-col justify-between ${mobileStep === "time" ? "hidden md:flex" : "flex"}`}
                >
                  <div>
                    <h2 className="text-white text-lg max-sm:text-sm max-sm:mt-2 font-semibold mb-6 max-sm:mb-4 max-md:text-center">
                      Select a Date & Time
                    </h2>

                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-6 max-sm:mb-4 px-2 sm:max-md:w-110 sm:max-md:mx-auto">
                      <button
                        onClick={() =>
                          setCurrentMonth(
                            addDays(startOfMonth(currentMonth), -1),
                          )
                        }
                        disabled={isPrevMonthDisabled || isLoadingSlots}
                        className="text-white hover:text-brand-orange disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <div className="text-brand-orange font-medium flex items-center gap-2 max-sm:text-sm">
                        {isLoadingSlots && (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        )}
                        {format(currentMonth, "MMMM yyyy")}
                      </div>
                      <button
                        disabled={isLoadingSlots || isNextMonthDisabled}
                        onClick={() =>
                          setCurrentMonth(addDays(endOfMonth(currentMonth), 1))
                        }
                        className="text-white hover:text-brand-orange disabled:opacity-30"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-y-4 max-md:gap-y-2 gap-x-2 text-center text-sm max-md:text-[12px] max-sm:w-75 sm:max-md:w-100 max-md:mx-auto">
                      {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                        <div key={day} className="text-white font-medium mb-2">
                          {day}
                        </div>
                      ))}
                      {calendarDays.map((day, idx) => {
                        const isCurrentMonth = isSameMonth(day, currentMonth);
                        const dayAvailability = getDayAvailability(day);
                        const hasSlots = dayAvailability?.slots.some(
                          (s) => s.available,
                        );

                        // Block day if it's in the past/today, or if API returned no slots for it
                        const isPast = isBefore(
                          day,
                          startOfDay(addDays(new Date(), 1)),
                        );
                        // @ts-expect-error maxBookingData
                        const isTooFar = isAfter(day, maxBookingDate);
                        const blocked =
                          isPast || isTooFar || (!isLoadingSlots && !hasSlots);

                        const selected =
                          selectedDate && isSameDay(day, selectedDate);

                        return (
                          <button
                            key={idx}
                            disabled={
                              !isCurrentMonth || blocked || isLoadingSlots
                            }
                            onClick={() => {
                              setSelectedDate(day);
                              setSelectedTime(null);
                            }}
                            className={`w-9 h-9 max-md:w-6 max-md:h-6 mx-auto flex items-center justify-center rounded-full transition-all duration-200
                            ${!isCurrentMonth ? "invisible" : ""} 
                            ${blocked ? "text-zinc-600 cursor-not-allowed" : "text-zinc-300 hover:bg-zinc-700/50 hover:text-white"}
                            ${selected && !blocked ? "bg-brand-orange text-white font-bold hover:bg-brand-orange scale-105" : ""}
                          `}
                          >
                            {format(day, "d")}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timezone Info */}
                  <div className="mt-8 max-sm:mt-0 pt-4">
                    <div className="text-brand-orange mb-2 font-medium">
                      Time zone
                    </div>
                    <div className="flex items-center text-white gap-2">
                      <Globe className="w-4 h-4 text-white" />
                      <span className="text-sm">{timeZone}</span>
                    </div>
                  </div>

                  <div className="md:hidden mt-8">
                    <button
                      disabled={!selectedDate}
                      onClick={() => setMobileStep("time")}
                      className="w-full bg-brand-orange hover:bg-brand-orange-light disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-3 rounded flex items-center justify-center gap-2 font-medium transition-colors"
                    >
                      Select Time <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Time Slots */}
                <div
                  className={`w-full md:w-auto max-md:h-full md:flex-1 pl-0 md:pl-10 mt-10 max-md:mt-0 md:mt-0 flex flex-col relative ${mobileStep === "date" ? "hidden md:flex" : "flex"}`}
                >
                  {/* Duration & Details */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 text-white">
                      <Clock className="w-4 h-4" />
                      <span className="text-base max-md:text-xs">
                        {duration} min
                      </span>
                      <div className="flex gap-2 ml-1">
                        <button
                          disabled={isLoadingSlots}
                          onClick={() =>
                            setDuration((prev) => Math.max(30, prev - 15))
                          }
                          className="bg-brand-orange text-white rounded-full p-0.5 hover:bg-brand-orange transition-colors disabled:opacity-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <button
                          disabled={isLoadingSlots}
                          onClick={() => setDuration((prev) => prev + 15)}
                          className="bg-brand-orange text-white rounded-full p-0.5 hover:bg-brand-orange transition-colors disabled:opacity-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-white text-base max-md:text-xs">
                      <Video className="w-4 h-4" />
                      <span>
                        Web conferencing details provided upon confirmation.
                      </span>
                    </div>
                  </div>

                  <hr className="border-zinc-700/50 mb-6" />

                  {/* Slots Area */}
                  {selectedDate ? (
                    <>
                      <h3 className="text-white text-lg max-md:text-sm font-medium mb-4">
                        {format(selectedDate, "EEEE, MMM d")}
                      </h3>

                      {isLoadingSlots ? (
                        <div className="flex flex-col items-center justify-center h-48 text-zinc-400 gap-3">
                          <Loader2 className="w-6 h-6 animate-spin text-brand-orange" />
                          <span className="text-sm">
                            Loading availability...
                          </span>
                        </div>
                      ) : (
                        // <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-70 pr-2 custom-scroll mb-16 max-md:mb-1">
                        <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-70 pr-2 custom-scroll mb-16 max-md:mb-1 max-md:max-h-[35vh] max-md:min-h-0">
                          {allTimeSlots.length > 0 ? (
                            allTimeSlots.map((slot) => (
                              <button
                                key={slot.time}
                                disabled={!slot.available}
                                onClick={() => setSelectedTime(slot.time)}
                                className={`py-2 px-4 rounded border transition-all duration-200 text-base font-medium
            ${
              !slot.available
                ? "border-zinc-700/50 text-zinc-600 cursor-not-allowed bg-zinc-800/30"
                : selectedTime === slot.time
                  ? "border-brand-orange bg-brand-orange/80 text-white shadow-[0_0_10px_rgba(249,115,22,0.2)]"
                  : "border-brand-orange/30 text-orange-400 hover:border-brand-orange/80 hover:text-orange-300"
            }
          `}
                              >
                                {slot.time}
                              </button>
                            ))
                          ) : (
                            <div className="col-span-2 text-zinc-400 text-sm py-4">
                              No slots generated for this date.
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-zinc-500 text-sm mt-4">
                      Please select a date from the calendar.
                    </div>
                  )}

                  {/* Next Step Button */}
                  <div className="mt-auto md:mt-0 max-md:py-2 md:absolute md:bottom-0 md:right-0 max-md:flex max-md:items-center max-md:justify-between">
                    <button
                      onClick={() => setMobileStep("date")}
                      className="md:hidden mb-6 max-md:mb-0 text-white hover:text-white flex items-center text-sm font-medium transition-colors w-fit max-md:bg-brand-orange px-6 max-md:px-4 py-2.5 rounded max-md:text-sm"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" /> Back
                    </button>
                    <button
                      disabled={!isStep1Valid || isLoadingSlots}
                      onClick={() => setStep(2)}
                      className="w-auto md:w-auto bg-brand-orange hover:bg-brand-orange-light disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 max-md:px-4 py-2.5 rounded flex items-center justify-center gap-2 font-medium transition-colors max-md:text-sm"
                    >
                      Almost there <Send className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* --- STEP 2 --- */}
            {step === 2 && (
              <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300 max-md:mt-2.5">
                {/* Meeting Summary Header */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 max-md:mb-6 text-white text-sm max-md:text-[12px]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> <span>{duration} min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4" />{" "}
                    <span>
                      Web conferencing details provided upon confirmation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />{" "}
                    <span>{formatStep2DateStr()}</span>
                  </div>
                </div>

                <h2 className="text-white text-xl max-md:text-sm font-medium mb-6 max-md:mb-4">
                  Enter Details
                </h2>

                {/* Form Grid */}
                <div className="space-y-5 pb-1 grow overflow-y-auto pr-2 custom-scroll max-md:min-h-0 max-md:max-h-[35vh]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-brand-orange text-sm max-md:text-[10px]">
                        Name*
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white text-black px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:opacity-70 max-md:text-[12px]"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-brand-orange text-sm max-md:text-[10px]">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        disabled={isSubmitting}
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        className="w-full bg-white text-black px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:opacity-70 max-md:text-[12px]"
                        placeholder="+91-9999999999"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-brand-orange text-sm max-md:text-[10px]">
                      Email*
                    </label>
                    <input
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white text-black px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:opacity-70 max-md:text-[12px]"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-brand-orange text-sm max-md:text-[10px]">
                      Please share anything that will help prepare for our
                      meeting.*
                    </label>
                    <textarea
                      required
                      rows={3}
                      disabled={isSubmitting}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full bg-white text-black px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none disabled:opacity-70"
                      placeholder="Please let us know what you would like to discuss during this meeting."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-brand-orange text-sm max-md:text-[10px]">
                        Industry
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full bg-white text-black px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:opacity-70 max-md:text-[12px]"
                        placeholder="Your industry"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-brand-orange text-sm max-md:text-[10px]">
                        Company
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-white text-black px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:opacity-70 max-md:text-[12px]"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-brand-orange text-sm max-md:text-[10px]">
                        Website
                      </label>
                      <input
                        type="url"
                        disabled={isSubmitting}
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="w-full bg-white text-black px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange disabled:opacity-70 max-md:text-[12px]"
                        placeholder="Your website"
                      />
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex items-center justify-between mt-8 max-md:mt-auto pt-4 max-md:py-2 max-sm:text-sm">
                  <button
                    disabled={isSubmitting}
                    onClick={() => setStep(1)}
                    className="bg-brand-orange hover:bg-brand-orange/70 text-white px-8 max-sm:px-4 py-2.5 rounded flex items-center justify-center font-medium transition-colors disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                  <button
                    disabled={!isStep2Valid || isSubmitting}
                    onClick={handleSchedule}
                    className="bg-brand-orange hover:bg-brand-orange-light disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 max-sm:px-4 py-2.5 rounded flex items-center justify-center gap-2 font-medium transition-colors min-w-45"
                  >
                    {isSubmitting ? (
                      <>
                        Scheduling...{" "}
                        <Loader2 className="w-4 h-4 ml-1 animate-spin" />
                      </>
                    ) : (
                      <>
                        Schedule Event <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="modal-border-left absolute -top-px -left-px -z-1 bg-white/50 w-3/5 h-[70%] modal-border-tl max-md:hidden" />
          <div className="modal-border-right absolute -bottom-px -right-px -z-1 bg-white/50 w-full h-[90%] modal-border-br max-md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default function ScheduleMeetingModal() {
  return (
    <Suspense fallback={null}>
      <ScheduleModalInner />
    </Suspense>
  );
}
