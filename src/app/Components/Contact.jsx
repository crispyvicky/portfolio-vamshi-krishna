import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-11/12 max-w-6xl mx-auto flex flex-col items-center my-20 pt-28 px-4"
    >
      <h2 className="text-black font-extrabold text-3xl sm:text-4xl text-center mb-4">
        Let’s Design Together
      </h2>

      <p className="text-center text-base sm:text-lg md:text-2xl font-semibold max-w-2xl mt-2">
        We turn imagination into action — crafting ideas, learning, and growing
        side by side.
      </p>

      {/* Form Section */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-2/3">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 border p-3 sm:p-4 rounded-xl text-base outline-none"
        />

        <button className="bg-[#BA22A3D9] text-white p-3 sm:p-4 rounded-xl font-semibold w-full sm:w-auto">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Contact;
