"use client";
import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <div
      id="contact"
      className="w-11/12 max-w-6xl mx-auto flex flex-col items-center my-20 pt-28 px-4"
    >
      <h2 className="text-black font-extrabold text-3xl sm:text-4xl text-center mb-4">
        Let’s Drive Innovation Together
      </h2>

      <p className="text-center text-base sm:text-lg md:text-2xl font-semibold max-w-2xl mt-2">
        Whether you're a learner, innovator, or collaborator — reach out and be
        part of the journey shaping the future of education.
      </p>

      <form
        action="https://formspree.io/f/xeokwarb"
        method="POST"
        onSubmit={() => setSent(true)}
        className="mt-8 w-full max-w-xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-3 rounded-xl text-base outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-3 rounded-xl text-base outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          className="border p-3 rounded-xl text-base outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="border p-3 rounded-xl text-base outline-none resize-none"
        />

        <button
          type="submit"
          className="bg-[#BA22A3D9] text-white p-3 rounded-xl font-semibold transition hover:opacity-90"
        >
          {sent ? "Message Sent ✅" : "Send Message"}
        </button>
      </form>

      {sent && (
        <p className="text-green-600 mt-4 font-semibold">
          Your message has been sent successfully!
        </p>
      )}

      <p className="text-sm text-gray-500 mt-3 text-center max-w-lg">
        VisionTech is committed to building empowered minds — one message at a
        time.
      </p>
    </div>
  );
};

export default Contact;
