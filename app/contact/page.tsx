"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import HeroNavbar from "@/components/HeroNavbar";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div>
    
      <section className="relative h-[100vh] lg:h-[100vh] md:h-[70vh] sm-[60vh] flex items-center overflow-hidden">
        <HeroNavbar />
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop"
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0  z-10" />
        <div className="relative z-20 text-left text-white px-4 md:px-8 lg:px-12 xl:px-16">
        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-white text-left"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-brown text-left"
          >
          Thank you so much for
          your interest in
          working together
          </motion.h1>
          
        </div>
      </section>


      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
           
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6 md:mb-8 text-brown">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    className="bg-white text-black"
                    placeholder="Enter your name"
                    required
                  />
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    className="bg-white text-black"
                     placeholder="Email address"
                    required
                  />
                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  className="bg-white text-black"
                  placeholder="Subject"
                  required
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  className="bg-white text-black"
                  placeholder="Message"
                  required
                />
                {submitStatus === "success" && (
                  <div className="p-4 bg-gray-800 text-black rounded-md">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-gray-800 text-black rounded-md">
                    Something went wrong. Please try again.
                  </div>
                )}
                <Button type="submit" disabled={isSubmitting} className="bg-brown text-white">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-brown">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brown rounded-lg">
                    <MapPin className="w-6 h-6 text-white bg-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Address
                    </h3>
                    <p className="text-black">
                      New York, NY, United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brown rounded-lg">
                    <Phone className="w-6 h-6 text-white bg-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-black hover:text-gray-400 transition-colors"
                    >
                      +123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brown rounded-lg">
                    <Mail className="w-6 h-6 text-white bg-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@photographer.com"
                      className="text-black hover:text-gray-400 transition-colors"
                    >
                      info@photographer.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brown rounded-lg">
                    <Clock className="w-6 h-6 text-white bg-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      Working Hours
                    </h3>
                    <p className="text-black">
                      Mon-Fri: 9AM-6PM<br />
                      Sat: 10AM-4PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

