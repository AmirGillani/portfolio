import React, { useState } from "react";

import { toast } from "react-toastify";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function validate() {
    if (!formData.name) errors.name = "Name is required";

    if (!formData.message) errors.message = "Message is required";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is not valid";
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      setIsSending(true);

      //I HAVE REGISTERED MY ACCOUNT AND ALLOWED EMAILJS TO MY EMAIL BEFORE USING THIS METHOD

      emailjs
        .send(
          // SERVICE KEY
          "service_nfekqrg",
          // TEMPLATE KEY
          "template_1lmvsap",
          // PAYLOAD
          formData,
          // PUBLIC KEY
          "hwFr-jaUR3fCLmLn2"
        )
        .then((responce) => {
          console.log(responce.status);
          toast.success("Email sent successfully !!!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
      {/* <Toaster /> */}
      <h2 className="my-8 text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={formData.name}
            name="name"
            id="name"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            placeholder="Please enter name"
          />

          {errors.name && (
            <p className="text-sm text-pink-500">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            value={formData.email}
            name="email"
            id="email"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            placeholder="Please enter email"
          />

          {errors.email && (
            <p className="text-sm text-pink-500">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            type="message"
            value={formData.message}
            name="message"
            id="message"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            placeholder="Please enter Message"
            rows={4}
          />

          {errors.message && (
            <p className="text-sm text-pink-500">{errors.message}</p>
          )}
        </div>
        <button
          className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
          type="submit"
        >
          {isSending ? "Sending .." : "Send"}
        </button>
      </form>
    </div>
  );
}
