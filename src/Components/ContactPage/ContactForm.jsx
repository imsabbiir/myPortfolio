"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
    package: "",
    date: new Date().toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }),
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.service) {
      newErrors.service = "Select a service";
    }

    if (!formData.package) {
      newErrors.package = "Select a package";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
        service: "",
        package: "",
        date: new Date().toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }),
      });

      setErrors({});
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <div className="mt-10">
      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="w-fit flex-1 flex subBoxBg p-4 lg:p-0"
        >
          <div className="m-auto w-full max-w-md py-8 lg:p-8 space-y-3">
            
            {/* NAME */}
            <div>
              <label className="text-sm text-[#777]">_name:</label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#202025] border border-[#3b3b3b] rounded-lg py-2 px-3 text-white outline-none"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-[#777]">_email:</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#202025] border border-[#3b3b3b] rounded-lg py-2 px-3 text-white outline-none"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* SERVICE */}
            <div>
              <label className="text-sm text-[#777]">_select:</label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className={`w-full bg-[#202025] border border-[#3b3b3b] rounded-lg py-2 px-3 ${
                  formData.service ? "text-white" : "text-gray-400"
                }`}
              >
                <option value="">Select Service</option>
                <option value="frontend">Front-end Development</option>
                <option value="wordpress">WordPress Services</option>
                <option value="microsoft">Microsoft Office</option>
              </select>
              {errors.service && (
                <p className="text-red-400 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            {/* PACKAGE */}
            <div>
              <label className="text-sm text-[#777]">_package:</label>
              <select
                value={formData.package}
                onChange={(e) =>
                  setFormData({ ...formData, package: e.target.value })
                }
                className={`w-full bg-[#202025] border border-[#3b3b3b] rounded-lg py-2 px-3 ${
                  formData.package ? "text-white" : "text-gray-400"
                }`}
              >
                <option value="">Select Package</option>
                <option value="custom">Custom</option>
                <option value="hourly">Hourly</option>
                <option value="full">Full Time</option>
              </select>
              {errors.package && (
                <p className="text-red-400 text-xs mt-1">{errors.package}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-[#777]">_message:</label>
              <textarea
                rows={4}
                placeholder="your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-[#202025] border border-[#3b3b3b] rounded-lg py-2 px-3 text-white outline-none resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button className="bg-[#ffc107] px-4 py-2 rounded-lg text-xs hover:bg-[#ffcb31] transition-colors text-black cursor-pointer">
              submit-message
            </button>
          </div>
        </form>

        {/* RIGHT SIDE (unchanged) */}
        <section className="flex flex-1 boxBg p-6 lg:p-8 overflow-y-auto min-h-75">
          <div className="m-auto w-full max-w-lg">
            <div className="flex gap-4 md:gap-6 text-[13px] md:text-sm leading-relaxed overflow-x-auto">
              <div className="text-right opacity-30 select-none hidden sm:block">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div className="text-[#aaa]" key={i}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="font-mono whitespace-pre-wrap break-all md:break-normal text-[#ccc]">
                <p>
                  <span className="text-[#C98BDF]">const</span>{" "}
                  <span className="text-[#4D5BCE]">button</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-[#4D5BCE]">document</span>.
                  <span className="text-[#4D5BCE]">querySelector</span>(
                  <span className="text-[#FEA55F]">'#sendBtn'</span>);
                </p>
                <br className="hidden md:block" />
                <p>
                  <span className="text-[#C98BDF]">const</span>{" "}
                  <span className="text-[#4D5BCE]">message</span>{" "}
                  <span className="text-white">=</span> {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-[#4D5BCE]">name</span>:{" "}
                  <span className="text-[#FEA55F]">"{formData.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#4D5BCE]">email</span>:{" "}
                  <span className="text-[#FEA55F]">"{formData.email}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#4D5BCE]">service</span>:{" "}
                  <span className="text-[#FEA55F]">"{formData.service}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#4D5BCE]">package</span>:{" "}
                  <span className="text-[#FEA55F]">"{formData.package}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#4D5BCE]">message</span>:{" "}
                  <span className="text-[#FEA55F]">"{formData.message}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#4D5BCE]">date</span>:{" "}
                  <span className="text-[#FEA55F]">"{formData.date}"</span>
                </p>
                <p>{"}"}</p>
                <br className="hidden md:block" />
                <p>
                  <span className="text-[#4D5BCE]">button</span>.
                  <span className="text-[#4D5BCE]">addEventListener</span>(
                  <span className="text-[#FEA55F]">'click'</span>, (){" "}
                  <span className="text-[#C98BDF]">{`=>`}</span> {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-[#4D5BCE]">form</span>.
                  <span className="text-[#4D5BCE]">send</span>(
                  <span className="text-[#4D5BCE]">message</span>);
                </p>
                <p>{"})"}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;