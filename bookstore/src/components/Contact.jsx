import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    reset(); // clear the form after submission
  };

  return (
    <div className="min-h-screen bg-black-900 flex items-center justify-center px-4 border-rose-200">
      <div className="bg-gray shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-sm text-red-500">Name is required</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-sm text-red-500">Email is required</p>}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-md outline-none resize-none"
              {...register("message", { required: true })}
            />
            {errors.message && <p className="text-sm text-red-500">Message is required</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
