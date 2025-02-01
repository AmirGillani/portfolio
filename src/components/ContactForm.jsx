import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

export default function ContactForm() {
  const containerVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const [isSending, setIsSending] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Clear individual error when the user starts typing again
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // clear error for the specific field
      }));
    }
  }

  function validate() {
    const newErrors = { name: "", email: "", message: "" }; // Initialize a new error object

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors); // Update errors state
    } else {
      setErrors({}); // Clear errors if no validation issues

      setIsSending(true);

      emailjs
        .send(
          "service_nfekqrg",
          "template_1lmvsap",
          formData,
          "hwFr-jaUR3fCLmLn2"
        )
        .then((response) => {
          toast.success("Email sent successfully !!!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
      <motion.h2
        className="my-8 text-4xl font-semibold tracking-tighter"
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        variants={containerVarient}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <motion.input
            type="text"
            value={formData.name}
            name="name"
            id="name"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            placeholder="Please enter name"
            variants={itemVarient}
          />
          {errors.name && (
            <motion.p
              className="text-sm text-pink-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {errors.name}
            </motion.p>
          )}
        </div>
        <div className="mb-4">
          <motion.input
            type="text"
            value={formData.email}
            name="email"
            id="email"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            placeholder="Please enter email"
            variants={itemVarient}
          />
          {errors.email && (
            <motion.p
              className="text-sm text-pink-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {errors.email}
            </motion.p>
          )}
        </div>
        <div className="mb-4">
          <motion.textarea
            value={formData.message}
            name="message"
            id="message"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            placeholder="Please enter Message"
            rows={4}
            variants={itemVarient}
          />
          {errors.message && (
            <motion.p
              className="text-sm text-pink-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {errors.message}
            </motion.p>
          )}
        </div>
        <motion.button
          className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
          type="submit"
          variants={itemVarient}
        >
          {isSending ? "Sending .." : "Send"}
        </motion.button>
      </motion.form>
    </div>
  );
}
