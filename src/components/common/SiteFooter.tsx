import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const aboutLinks = [
  "Message from The Founder",
  "Stories and Timeline",
  "KOTO International",
  "KOTO Team",
  "Key Partners",
  "Strategic Partners",
];

const foundationLinks = [
  "Training Centre",
  "Training Programme",
  "Admission",
  "Her Turn Programme",
  "Social Enterprise",
  "Events",
];

export default function SiteFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) {
      alert("Vui lòng nhập Email của bạn!");
      return;
    }
    alert(`Cảm ơn bạn đã đăng ký! Bản tin DiSanity sẽ được gửi định kỳ tới địa chỉ email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#6c0b0b] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.1fr] lg:px-8">
        <div className="space-y-5">
          <img src="/Image2.png" className="h-14 w-auto object-contain" alt="DiSanity" />
          <p className="max-w-sm font-beVietnamPro text-sm leading-6 text-white/75">
            DiSanity là cách chơi chữ giữa 'Di Sản' và 'Sanity', mang ý nghĩa di sản sống và còn hiện diện trong đời sống hiện đại.
          </p>
          <div className="flex gap-3 text-[#f4ca80]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#f4ca80]/40 p-2 transition-colors hover:bg-white/10" aria-label="Facebook">
              <span className="grid h-[18px] w-[18px] place-items-center text-xs font-bold">f</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#f4ca80]/40 p-2 transition-colors hover:bg-white/10" aria-label="Instagram">
              <span className="grid h-[18px] w-[18px] place-items-center text-xs font-bold">ig</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#f4ca80]/40 p-2 transition-colors hover:bg-white/10" aria-label="YouTube">
              <span className="grid h-[18px] w-[18px] place-items-center text-xs font-bold">yt</span>
            </a>
          </div>
        </div>

        <FooterColumn title="ABOUT US" links={aboutLinks} />
        <FooterColumn title="DISANITY FOUNDATION" links={foundationLinks} />

        <div className="space-y-5">
          <h2 className="font-roboto text-xl font-bold tracking-wide">NEWSLETTER</h2>
          <p className="font-beVietnamPro text-sm leading-6 text-white/75">
            Nhận cập nhật về workshop, nghệ nhân và các câu chuyện di sản.
          </p>
          <form onSubmit={handleSubscribe} className="flex max-w-sm rounded-full bg-white p-1 shadow-md">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              className="min-w-0 flex-1 bg-transparent px-4 font-roboto text-sm text-[#171717] outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f4ca80] text-[#6c0b0b] transition-transform hover:scale-105"
              aria-label="Subscribe"
            >
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h2 className="mb-5 font-roboto text-xl font-bold tracking-wide">{title}</h2>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <span
            key={link}
            className="font-roboto text-sm leading-6 text-white/75 transition-colors hover:text-[#f4ca80]"
          >
            {link}
          </span>
        ))}
      </div>
    </div>
  );
}
