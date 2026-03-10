import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ProjectData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);

  const sendData = async (projectData: ProjectData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const projectData: ProjectData = {
      name: (formData.get("name") || "") as string,
      email: (formData.get("email") || "") as string,
      subject: (formData.get("subject") || "") as string,
      message: (formData.get("message") || "") as string,
    };

    const result = await sendData(projectData);

    if (result) {
      toast.success("Successfully Submitted!");
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus(null), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="border border-[#00ffbb]/20 bg-[#0f1115] p-4 md:p-8 rounded-2xl backdrop-blur-lg max-w-3xl mx-auto mb-10 shadow-2xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Send us a Message
      </h2>
      <p className="text-gray-400 mt-2 mb-3 md:mb-8">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form className="space-y-3 md:space-y-3 " onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="flex flex-col gap-1 md:gap-2">
            <label className="text-sm font-semibold text-gray-300">
              Your Name *
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full bg-black border border-zinc-800 rounded-xl p-2 md:p-4 text-white focus:outline-none focus:border-[#00ffbb] transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <label className="text-sm font-semibold text-gray-300">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full bg-black border border-zinc-800 rounded-xl p-2 md:p-4 text-white focus:outline-none focus:border-[#00ffbb] transition-all"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 md:gap-2">
          <label className="text-sm font-semibold text-gray-300">
            Subject *
          </label>
          <input
            name="subject"
            type="text"
            placeholder="What is this regarding?"
            className="w-full bg-black border border-zinc-800 rounded-xl p-2 md:p-4 text-white focus:outline-none focus:border-[#00ffbb] transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-1 md:gap-2">
          <label className="text-sm font-semibold text-gray-300">
            Your Message *
          </label>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            className="w-full h-22 md:h-36 bg-black border border-zinc-800 rounded-xl p-2 md:p-4 text-white focus:outline-none focus:border-[#00ffbb] transition-all resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#00ffbb] hover:bg-[#00cc96] disabled:bg-zinc-700 text-black font-bold py-2 md:py-4 rounded-xl flex items-center justify-center gap-1 md:gap-2 text-sm md:text-lg transition-all active:scale-[0.98]"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
