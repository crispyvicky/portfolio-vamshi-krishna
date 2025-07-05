"use client";
import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xeokwarb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
        onSubmit={sendForm}
        className="mt-8 w-full max-w-xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border p-3 rounded-xl text-base outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="border p-3 rounded-xl text-base outline-none"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="border p-3 rounded-xl text-base outline-none"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="border p-3 rounded-xl text-base outline-none resize-none"
        />

        <button
          type="submit"
          className="bg-[#BA22A3D9] text-white p-3 rounded-xl font-semibold transition hover:opacity-90"
        >
          {loading ? "Sending..." : sent ? "Message Sent ✅" : "Send Message"}
        </button>
      </form>

      {sent && (
        <p className="text-green-600 mt-4 font-semibold">
          Your message has been sent successfully!
        </p>
      )}
      {error && (
        <p className="text-red-500 mt-4 font-semibold">
          Oops! Something went wrong. Try again later.
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
