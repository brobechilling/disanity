"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import CheckoutFAQSection from "@/components/domain/CheckoutFAQSection";

export default function CustomerInfoPage() {
  const navigate = useNavigate();

  // Stateful Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    message: ""
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Stateful modal for checking out / payment step
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Vui lòng điền đầy đủ Họ tên, Email và Số điện thoại!");
      return;
    }
    // Success flow modal
    setShowPaymentSuccess(true);
  };

  const faqsData = [
    {
      q: "Điền thông tin địa chỉ sau sáp nhập hay địa chỉ cũ",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut."
    },
    {
      q: "Tôi có thể thay đổi thông tin thanh toán sau khi đặt chỗ không?",
      a: "Sau khi đơn hàng đã hoàn tất thanh toán thành công, bạn không thể thay đổi thông tin thanh toán trực tiếp. Tuy nhiên, bạn có thể liên hệ với số Hotline hỗ trợ để được nhân viên hỗ trợ cập nhật thủ công thông tin hóa đơn đỏ VAT nếu cần."
    },
    {
      q: "Tôi có thể hủy workshop và nhận hoàn tiền không?",
      a: "Vé workshop di sản có thể được hỗ trợ hủy và hoàn tiền 100% khi yêu cầu được gửi trước giờ diễn ra workshop tối thiểu 48 tiếng. Các yêu cầu hủy muộn hơn sẽ không thể hoàn tiền nhưng có thể dời lịch sang buổi kế tiếp."
    },
    {
      q: "Có ưu đãi cho nhóm hoặc đặt nhiều vé không?",
      a: "DiSanity luôn có chính sách chiết khấu rất tốt từ 10% - 15% cho các đoàn khách đi nhóm từ 5 người trở lên, hoặc đặt combo từ 2 workshop di sản cùng lúc. Liên hệ hotline để nhận mã ưu đãi đoàn thể."
    },
    {
      q: "Thanh toán thất bại nhưng tiền đã trừ thì phải làm sao?",
      a: "Trường hợp tài khoản ngân hàng của bạn đã bị trừ tiền nhưng giao dịch hiển thị thất bại, vui lòng liên hệ Hotline 03324233282 ngay lập tức, cung cấp biên lai chuyển khoản ngân hàng (bill chuyển tiền) để hệ thống kích hoạt vé thủ công."
    },
    {
      q: "Tôi có thể xuất hóa đơn cho công ty không?",
      a: "Hoàn toàn có thể. Vui lòng ghi chú mã số thuế, tên công ty và địa chỉ doanh nghiệp chính xác tại khung 'Để lại lời nhắn...' để bộ phận kế toán của DiSanity hỗ trợ xuất hóa đơn điện tử e-VAT kịp thời."
    }
  ];

  return (
    <PageShell background="customerInfo">
      <SiteHeader />

      <main className="overflow-hidden">
        {/* 1. Page Typography Title Area, Checkout Step Timeline Tracker, and subtitle */}
        <Section width="screen" gutter="none" className="mt-[47px]">
          <div className="relative mx-auto h-[475px] w-[1440px] max-w-full overflow-visible">

        {/* 2. Page Typography Title Area */}
        <div className="absolute left-[266px] top-0 z-10 flex w-[926px] flex-col items-center shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          <p className="w-[992px] text-center font-jaro text-[50px] uppercase leading-[72px] tracking-wide text-[#A6341B]">
            XÁC NHẬN THÔNG TIN KHÁCH HÀNG
          </p>
        </div>

        {/* 3. Progress Checkout Step Timeline Tracker (top-[347px]) */}
        <div className="absolute left-[291px] top-[120px] z-10 h-[69px] w-[877px]">
          {/* Progress Connector Lines */}
          <div className="absolute left-[37px] top-[59px] h-[1px] w-[381px] bg-[#A6341B]">
            <div className="h-full w-full bg-[#A6341B]"></div>
          </div>
          <div className="absolute left-[436px] top-[59px] h-[1px] w-[373px] bg-[#A6341B]/30"></div>

          {/* Step 1: Giỏ hàng */}
          <Link 
            to="/cart"
            className="group absolute left-0 top-0 cursor-pointer text-left outline-none"
          >
            <p className="font-beVietnamPro text-base font-semibold text-[#A6341B]/70 transition-colors group-hover:text-[#A6341B]">
              Giỏ hàng
            </p>
            <div className="absolute left-[17px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#A6341B] bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-[#A6341B]"></div>
            </div>
          </Link>

          {/* Step 2: Thông tin khách hàng */}
          <div className="absolute left-[338px] top-0 cursor-default text-left">
            <p className="font-beVietnamPro text-base font-black tracking-[0.02em] text-[#A6341B]">
              Thông tin khách hàng
            </p>
            <div className="absolute left-[80px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#A6341B] bg-[#A6341B] shadow-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
            </div>
          </div>

          {/* Step 3: Thanh toán */}
          <div className="absolute left-[783px] top-0 text-left opacity-60">
            <p className="font-beVietnamPro text-base font-semibold text-[#A6341B]/50">
              Thanh toán
            </p>
            <div className="absolute left-[26px] top-[49px] h-5 w-5 rounded-full border-2 border-[#A6341B]/30 bg-white"></div>
          </div>
        </div>

        {/* 4. Subtitles & Cursive Raleway description */}
        <p className="absolute left-[394px] top-[220px] z-10 h-[45px] w-[655px] text-center font-jaro text-[28px] uppercase tracking-wide text-[#000]">
          vui lòng điền đầy đủ các thông tin dưới đây
        </p>
        <p className="absolute left-[420px] top-[290px] z-10 h-[27px] w-[600px] text-nowrap text-center font-raleway text-lg font-semibold italic leading-[27px] text-[#777]">
          Just enter your details below!
        </p>

        {/* 5 Cursive golden circles under subtitle */}
          </div>
        </Section>

        {/* 2. Stateful Form Area with Translucent Background Overlay Rectangle4445 */}
        <Section width="screen" gutter="none" className="mt-[-125px]">
          <div className="relative mx-auto h-[500px] w-[1440px] max-w-full overflow-visible">
          
          {/* Translucent overlay backdrop */}
          <img
            src="/thongtinkhachhang/Rectangle4445.png"
            className="absolute left-0 top-0 h-[500px] w-full max-w-none border-y border-[#A6341B]/15 object-cover opacity-[65%] pointer-events-none"
            alt="Rectangle 4445 backdrop overlay"
          />

          <form 
            onSubmit={handleFormSubmit}
            className="absolute left-[250px] top-10 h-[420px] w-[940px]"
          >
            {/* Input block 1: Họ và Tên */}
            <div className="absolute left-0 top-0 flex h-[75px] w-[440px] items-center rounded-[20px] border border-black/5 bg-[#FFF] px-5 shadow-sm transition-all hover:border-[#A6341B]/30">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                Họ và Tên:
              </span>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
              />
            </div>

            {/* Input block 2: Email */}
            <div className="absolute left-[500px] top-0 flex h-[75px] w-[440px] items-center rounded-[20px] border border-black/5 bg-[#FFF] px-5 shadow-sm transition-all hover:border-[#A6341B]/30">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                Email:
              </span>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
              />
            </div>

            {/* Input block 3: Số Điện Thoại */}
            <div className="absolute left-0 top-[102px] flex h-[75px] w-[440px] items-center rounded-[20px] border border-black/5 bg-[#FFF] px-5 shadow-sm transition-all hover:border-[#A6341B]/30">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                SDT:
              </span>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
              />
            </div>

            {/* Input block 4: Quốc tịch */}
            <div className="absolute left-[500px] top-[102px] flex h-[75px] w-[440px] items-center rounded-[20px] border border-black/5 bg-[#FFF] px-5 shadow-sm transition-all hover:border-[#A6341B]/30">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                Quốc tịch:
              </span>
              <input
                type="text"
                required
                value={formData.nationality}
                onChange={(e) => handleInputChange("nationality", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
              />
            </div>

            {/* Input block 7: Textarea Để lại lời nhắn */}
            <div className="absolute left-0 top-[204px] flex h-[120px] w-[940px] flex-col rounded-[20px] border border-black/5 bg-[#FFF] p-5 shadow-sm transition-all hover:border-[#A6341B]/30">
              <span className="text-[#000] font-raleway text-lg font-bold mb-2 select-none">
                Để lại lời nhắn...
              </span>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={3}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base w-full flex-grow focus:ring-0 placeholder-gray-400 resize-none"
                placeholder="Bạn có ghi chú gì đặc biệt cho ban tổ chức workshop không? (ví dụ: Xuất hóa đơn VAT, Yêu cầu ngôn ngữ tiếng Anh...)"
              />
            </div>

            {/* Submit CTA Button "Bước tiếp theo" */}
            <button 
              type="submit"
              className="group absolute left-[330px] top-[362px] flex h-[60px] w-[280px] cursor-pointer items-center justify-center gap-3 text-nowrap rounded-[20px] border border-black/5 bg-[#A6341B] px-8 py-2.5 shadow-lg transition-all hover:bg-[#8B2C16] active:scale-98"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-6 h-6 overflow-hidden transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M10.7946 20.4578C10.8821 21.3926 11.7108 22.0795 12.6456 21.992C13.2811 21.9325 13.8297 21.522 14.0662 20.9292L19.8964 6.31224C20.2443 5.44017 19.8193 4.45124 18.9472 4.1034C18.5428 3.9421 18.092 3.9421 17.6876 4.1034L3.07063 9.93362C2.19856 10.2815 1.77359 11.2704 2.12143 12.1425C2.35789 12.7353 2.90649 13.1457 3.54197 13.2052L10.1736 13.8262L10.7946 20.4578ZM18.1383 5.86152L12.548 19.8768L11.8267 12.1731L4.12299 11.4518L18.1383 5.86152Z"
                  fill="white"
                />
              </svg>
              <p className="text-[#FFF] font-montserrat text-lg font-medium">
                Bước tiếp theo
              </p>
            </button>
          </form>
          </div>
        </Section>

        <CheckoutFAQSection
          faqs={faqsData}
          defaultExpandedIndex={null}
          showHotline
          className="mt-[62px]"
        />
        <div className="hidden">
          <p className="w-[500px] text-center font-jaro text-4xl uppercase leading-[46px] tracking-wide text-[#000]">
            Những câu hỏi thường gặp
          </p>
          <p className="mt-4 w-[596px] text-center font-dMSans text-base font-medium leading-[30px] text-[#3E3E3E]">
            Dưới đây là những câu hỏi thường gặp khi khách hàng đang trong quá trình xác nhận giỏ hàng, điền thông tin cá nhân và thanh toán.
          </p>

          {/* Golden Hotline Banner - Centered below subtitle with balanced margin */}
          <div className="mt-6 mb-2 flex h-[50px] w-[461px] cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#A6341B] px-8 py-3 shadow-md transition-all hover:bg-[#8B2C16]">
            <span className="font-beVietnamPro text-base font-bold tracking-wide text-[#FFF]">
              Mọi sự cố xin vui lòng liên hệ: 03324233282
            </span>
          </div>

          {/* FAQs Accordion Grid */}
          <div className="mt-8 grid w-full grid-cols-2 gap-6 overflow-visible">
            {faqsData.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className={`flex min-h-[142px] cursor-pointer flex-col justify-start rounded-[15px] border border-[#A6341B] bg-[#F4CA80] p-6 transition-all duration-300 hover:scale-[1.005] hover:shadow-lg ${isExpanded ? "h-auto shadow-md" : "h-[142px] overflow-hidden shadow-sm"}`}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <p className="font-beVietnamPro text-lg font-bold leading-tight text-[#000]">
                      {faq.q}
                    </p>
                    
                    {/* Collapsible arrow indicator */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/40">
                      <svg
                        width="24"
                        height="13"
                        viewBox="0 0 24 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-2 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "-rotate-90"}`}
                      >
                        <path
                          d="M1.2002 1.2002L11.7002 11.4085L22.2002 1.2002"
                          stroke="#373737"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable description body */}
                  <div className={`transition-all duration-300 ease-in-out ${isExpanded ? "mt-4 max-h-[500px] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>
                    <p className="border-t border-[#A6341B]/20 pt-4 text-justify font-dMSans text-sm leading-relaxed text-[#3E3E3E]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-[120px]">
          <SiteFooter />
        </div>
      </main>

      {/* Dynamic Payment Success Confirmation Backdrop Modal */}
      {showPaymentSuccess && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
          <div className="bg-white rounded-[28px] w-[500px] p-8 border-2 border-[#A6341B]/30 shadow-2xl relative flex flex-col items-center text-center">
            
            {/* Terracotta Check Icon */}
            <div className="w-16 h-16 rounded-full bg-[#A6341B]/15 flex items-center justify-center mb-5 animate-bounce">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A6341B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 className="text-[#A6341B] font-dFVNFreckleFace text-3xl tracking-wide uppercase mb-3">
              Thông tin hợp lệ!
            </h3>
            
            <p className="text-[#1F2937] font-beVietnamPro text-base leading-relaxed mb-6 font-medium px-4">
              Cảm ơn <strong>{formData.name}</strong>. Thông tin cá nhân của bạn đã được kiểm duyệt hợp lệ. Hãy tiến hành thanh toán ở bước tiếp theo.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={() => {
                  setShowPaymentSuccess(false);
                  navigate("/checkout/success");
                }}
                className="bg-[#A6341B] hover:bg-[#8B2C16] text-white font-beVietnamPro font-bold py-3 px-6 rounded-full cursor-pointer transition-all active:scale-95 shadow-md w-full"
              >
                Tiến hành thanh toán
              </button>
              
              <button
                onClick={() => setShowPaymentSuccess(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-beVietnamPro font-bold py-2.5 px-6 rounded-full cursor-pointer transition-all w-full"
              >
                Quay lại sửa thông tin
              </button>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
