import React, { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactUs({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className={`w-[1240px] h-[978px] absolute left-[110px] ${className || "top-[5476px]"} overflow-visible`}>
      <ScrollReveal className="w-full h-full relative" animation="slide-up">
      {/* Background Graphic Image overlay */}
      <img
        src="/Rectangle4445.png"
        className="opacity-[40%] w-[1240px] h-[978px] absolute left-0 top-0 object-cover rounded-[32px] pointer-events-none"
        alt="Contact Us Background"
      />

      {/* Main Content Wrapper */}
      <div className="w-[1140px] h-[825px] absolute left-[50px] top-[110px] overflow-visible">
        
        {/* Quote Block */}
        <p className="text-[#A6341B] font-beVietnam text-[20px] font-bold italic leading-[30px] w-[502px] h-[60px] absolute left-[319px] top-0 text-center">
          “Giữ nghề là giữ hồn đất, để ký ức còn chỗ quay về.”
        </p>

        {/* Contact Form Wrapper with state handling */}
        <form 
          onSubmit={handleSubmit}
          className="w-[556px] h-[408px] absolute left-[292px] top-[120px] overflow-visible z-10"
        >
          {/* 1. Name Input Box */}
          <div className="w-[266px] h-[102px] absolute left-0 top-0">
            <label className="text-[#000] font-dMSans text-lg font-bold leading-[18px] w-[51px] h-[18px] absolute left-2 top-0">
              Name
            </label>
            <div className="flex justify-center items-center w-[266px] h-[72px] absolute left-0 top-[30px]">
              <div className="shrink-0 w-[266px] h-[72px] relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Carter"
                  className="rounded-[50px] bg-[#F9F9FF] border border-[#A6341B]/10 w-[266px] h-[72px] absolute left-0 top-0 px-6 py-4 outline-none text-[#1b1717] font-dMSans text-base placeholder-[#888] shadow-inner focus:border-[#A6341B] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* 2. Email Input Box */}
          <div className="w-[266px] h-[102px] absolute left-[290px] top-0">
            <label className="text-[#000] font-dMSans text-lg font-bold leading-[18px] w-12 h-[18px] absolute left-2 top-0">
              Email
            </label>
            <div className="flex justify-center items-center w-[266px] h-[72px] absolute left-0 top-[30px]">
              <div className="shrink-0 w-[266px] h-[72px] relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="rounded-[50px] bg-[#F9F9FF] border border-[#A6341B]/10 w-[266px] h-[72px] absolute left-0 top-0 px-6 py-4 outline-none text-[#1b1717] font-dMSans text-base placeholder-[#888] shadow-inner focus:border-[#A6341B] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* 3. Message Area Box */}
          <div className="w-[556px] h-[172px] absolute left-0 top-[134px]">
            <label className="text-[#000] font-dMSans text-lg font-bold leading-[18px] w-[77px] h-[18px] absolute left-2 top-0">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please type your message here..."
              rows={4}
              className="rounded-[20px] border border-[#A6341B]/20 bg-[#F9F9FF] w-[556px] h-[120px] absolute left-0 top-[30px] px-6 py-4 outline-none text-[#1b1717] font-dMSans text-base placeholder-[#888] shadow-inner resize-none focus:border-[#A6341B] transition-colors"
            />
          </div>

          {/* 4. Action Submit Button */}
          <button 
            type="submit"
            className="cursor-pointer inline-flex py-4 px-9 justify-center items-center rounded-[40px] bg-[#6C0B0B] hover:bg-[#A6341B] hover:scale-105 active:scale-95 text-white font-dMSans text-lg font-bold tracking-wide w-[200px] h-[55px] absolute left-[178px] top-[342px] transition-all duration-200 shadow-md"
          >
            Send message
          </button>
        </form>

        <div className="opacity-[25%] bg-[#A6341B] w-[1140px] h-px absolute left-0 top-[578px]"></div>

        {/* 5. Contact Details Section at Bottom */}
        <div className="w-[360px] h-[196px] absolute left-[390px] top-[629px] z-10 flex flex-col gap-3 text-center">
          <p className="text-[#1B1717] font-dMSans text-lg font-bold hover:text-[#A6341B] transition-colors cursor-pointer">
            contact@disanity.com
          </p>
          <p className="text-[#555] font-dMSans text-base font-semibold">
            (123) 456 - 789
          </p>
          <p className="text-[#777] font-dMSans text-base font-medium">
            58 Middle Point Rd, San Francisco, 94124
          </p>

          {/* Social Icons with interactive hover effects */}
          <div className="flex gap-4 justify-center mt-3">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-[5px] bg-[#E7E6F2] hover:bg-[#A6341B] text-[#666] hover:text-white transition-all cursor-pointer">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="currentColor">
                <path d="M6.37296 18V9.78936H9.26765L9.70104 6.5895H6.37288V4.54653C6.37288 3.6201 6.64305 2.98879 8.0385 2.98879L9.81819 2.98799V0.126072C9.51038 0.0871459 8.45386 0 7.22488 0C4.65886 0 2.90212 1.49118 2.90212 4.22972V6.5895H0V9.78936H2.90212V17.9999H6.37296V18Z" />
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-[5px] bg-[#E7E6F2] hover:bg-[#A6341B] text-[#666] hover:text-white transition-all cursor-pointer">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="currentColor">
                <path d="M18 1.734v.032l-.008.005-.008.005-.005.005-.005.003-.005.005-.005.005-.008.003-.016.008c-.135.09-.257.282-.403.477s-.26.386-.356.577c-.097.189-.143.298-.146.301l-.003.003-.003.005-.005.005-.008.008-.016.008a2.5 2.5 0 0 1-.227.113c-.055.033-.101.071-.156.103a.5.5 0 0 1-.081.054c-.21.048-.437.116-.68.202s-.48.178-.718.286c-.238.108-.383.176-.435.205s-.051.016-.054.019c-.003.003-.019.019-.038.038a3.5 3.5 0 0 1-.295.253 6.5 6.5 0 0 1-.68.477c-.385.244-.766.452-1.074.607s-.49.208-.567.249a2.5 2.5 0 0 1-.26.113l-.146.06c-.05.022-.1.033-.13.033h-.146v.008c-.384-.038-.727-.084-1.03-.138s-.62-.132-.937-.224a10.5 10.5 0 0 1-1.074-.388L0 12.934v.033h.008L.024 13l.016.005.016.008.016.005.016.005.008.005.008.003a2.5 2.5 0 0 1 .156.113c.097.059.191.108.307.162l.146.06c.312.155.687.308 1.125.46s.854.262 1.25.313c.39.054.696.084.779.09v.008H5.145v-.008h1.055v.008l.576-.057c.384-.038.728-.084 1.031-.138s.618-.13 1.32-.321a6.5 6.5 0 0 0 1.03-.321c.304-.113.61-.237.902-.351s.503-.23.716-.321c.213-.092.358-.162.435-.19v-.008h-.081l-.081-.057c-.01-.005-.057-.038-.146-.103s-.184-.13-.284-.202a10.5 10.5 0 0 1-.503-.388l-.138-.113c-.097-.081-.19-.19-.284-.304s-.173-.243-.243-.374a2.5 2.5 0 0 1-.114-.227l-.06-.146c-.02-.05-.03-.1-.03-.13a.5.5 0 0 1-.008-.081v-.113a10.5 10.5 0 0 0 .138-1.031c.022-.303.033-.574.033-.815 0-.24-.02-.444-.06-.61s-.073-.356-.146-.57c-.073-.213-.18-.415-.316-.607a6.5 6.5 0 0 0-.503-.68l-.138-.146a2.5 2.5 0 0 1-.113-.227l-.06-.146v-.162h.081l.454.097c.303.065.592.143.868.235l.438.146.049.016.024.008.016.008.016.008.016.008.016.008.033.005h.032v-.032l-.008-.003-.008-.005-.003-.005-.005-.003-.005-.005-.005-.005-.008-.003-.008-.005-.005-.005-.003-.005-.005-.005-.008-.003-.008-.016c-.08-.162-.15-.324-.22-.486s-.11-.3-.11-.4l-.005-.081.024-.024.024-.024c.18-.182.366-.356.56-.526s.402-.321.608-.486c.203-.165.306-.368.304-.61s-.012-.472-.033-.774a10.5 10.5 0 0 0-.122-1.002 6.5 6.5 0 0 0-.308-.902 2.5 2.5 0 0 1-.122-.26c-.035-.07-.075-.14-.122-.21a.5.5 0 0 1-.033-.081v-.113h.844l.344.062a6.5 6.5 0 0 0 .868.178 10.5 10.5 0 0 0 1.002.138 2.5 2.5 0 0 1 .26.033c.07.01.14.02.21.033a.5.5 0 0 1 .081.005v.032Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-[5px] bg-[#E7E6F2] hover:bg-[#A6341B] text-[#666] hover:text-white transition-all cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                <path d="M0 1.99134C0 1.41413 0.202708 0.937939 0.608108 0.56277C1.01351 0.187584 1.54055 0 2.18919 0C2.82626 0 3.34169 0.184693 3.73552 0.554112C4.14092 0.935065 4.34363 1.43145 4.34363 2.04329C4.34363 2.5974 4.14672 3.05915 3.7529 3.42857C3.3475 3.80952 2.81467 4 2.15444 4H2.13707C1.49999 4 0.984562 3.80952 0.590734 3.42857C0.196905 3.04762 0 2.56854 0 1.99134ZM0.225869 17.1429V5.57576H4.08301V17.1429H0.225869ZM6.22008 17.1429H10.0772V10.684C10.0772 10.2799 10.1236 9.96824 10.2162 9.74891C10.3784 9.35641 10.6245 9.02452 10.9546 8.75324C11.2847 8.48195 11.6988 8.34632 12.1969 8.34632C13.4942 8.34632 14.1429 9.21788 14.1429 10.961V17.1429H18V10.5108C18 8.8023 17.5946 7.50649 16.7838 6.62337C15.973 5.74026 14.9015 5.2987 13.5695 5.2987C12.0753 5.2987 10.9112 5.93939 10.0772 7.22078V7.25541H10.0598L10.0772 7.22078V5.57576H6.22008C6.24324 5.94516 6.25483 7.09378 6.25483 9.02164C6.25483 10.9495 6.24324 13.6565 6.22008 17.1429Z" />
              </svg>
            </a>
          </div>

        </div>

      </div>

      {/* Title Header relative top overlay */}
      <p className="text-[#000] font-jaro text-[56px] leading-[62px] w-[755px] h-[62px] absolute left-[252px] top-12 text-center uppercase tracking-wide">
        TRỞ THÀNH NGƯỜI GIỮ NGHỀ
      </p>

      </ScrollReveal>
    </div>
  );
}
