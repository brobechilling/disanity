import React, { useState } from "react";
import Section from "@/components/common/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Vui lòng điền đầy đủ thông tin: Họ tên, Email và Lời nhắn của bạn!");
      return;
    }

    alert(`Cảm ơn ${formData.name}!\nLời nhắn của bạn đã được gửi đi thành công. Đội ngũ DiSanity sẽ liên hệ lại với bạn trong vòng 24 giờ qua địa chỉ: ${formData.email}`);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Section className="py-14 sm:py-18 lg:py-24">
      <ScrollReveal className="relative min-h-[820px] overflow-hidden rounded-[32px]" animation="slide-up">
        <img
          src="/Rectangle4445.png"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Contact Us Background"
        />
        <div className="absolute inset-0 bg-white/20" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-12 text-center sm:px-8 lg:py-16">
          <p className="max-w-xl font-beVietnam text-xl font-bold italic leading-8 text-[#A6341B]">
            “Giữ nghề là giữ hồn đất, để ký ức còn chỗ quay về.”
          </p>

          <h2 className="mt-8 font-jaro text-4xl uppercase leading-tight tracking-wide text-black sm:text-[56px]">
            TRỞ THÀNH NGƯỜI GIỮ NGHỀ
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 grid w-full gap-6 text-left sm:grid-cols-2">
            <label className="space-y-3 font-dMSans text-lg font-bold text-black">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Carter"
                className="h-[64px] w-full rounded-[50px] border border-[#A6341B]/10 bg-[#F9F9FF] px-6 py-4 font-dMSans text-base font-normal text-[#1b1717] shadow-inner outline-none transition-colors placeholder:text-[#888] focus:border-[#A6341B]"
              />
            </label>

            <label className="space-y-3 font-dMSans text-lg font-bold text-black">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="h-[64px] w-full rounded-[50px] border border-[#A6341B]/10 bg-[#F9F9FF] px-6 py-4 font-dMSans text-base font-normal text-[#1b1717] shadow-inner outline-none transition-colors placeholder:text-[#888] focus:border-[#A6341B]"
              />
            </label>

            <label className="space-y-3 font-dMSans text-lg font-bold text-black sm:col-span-2">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please type your message here..."
                rows={4}
                className="min-h-[140px] w-full resize-none rounded-[20px] border border-[#A6341B]/20 bg-[#F9F9FF] px-6 py-4 font-dMSans text-base font-normal text-[#1b1717] shadow-inner outline-none transition-colors placeholder:text-[#888] focus:border-[#A6341B]"
              />
            </label>

            <div className="sm:col-span-2 sm:text-center">
              <button
                type="submit"
                className="inline-flex h-[55px] cursor-pointer items-center justify-center rounded-[40px] bg-black px-9 font-dMSans text-lg font-bold tracking-wide text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#A6341B] active:scale-95"
              >
                Send message
              </button>
            </div>
          </form>

          <div className="my-10 h-px w-full bg-[#A6341B]/25" />

          <div className="flex max-w-md flex-col gap-3 text-center">
            <p className="cursor-pointer font-dMSans text-lg font-bold text-[#1B1717] transition-colors hover:text-[#A6341B]">
              contact@disanity.com
            </p>
            <p className="font-dMSans text-base font-semibold text-[#555]">(123) 456 - 789</p>
            <p className="font-dMSans text-base font-medium text-[#777]">
              58 Middle Point Rd, San Francisco, 94124
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
