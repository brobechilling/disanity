"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function CustomerInfoPage() {
  const navigate = useNavigate();

  // Stateful Form Data
  const [formData, setFormData] = useState({
    name: "Cappy Dương",
    email: "cappydương@disanity.vn",
    phone: "0987 654 321",
    nationality: "Việt Nam",
    passportId: "B1234567",
    address: "Hà Nội, Việt Nam",
    message: ""
  });

  // FAQ Accordion State (Item 0 expanded by default)
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
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Centered high-fidelity viewport container (1440px wide by 2739px high)
        matching the approved coordinates schema perfectly.
      */}
      <ResponsiveContainer originalHeight={2872}>
        
        {/* Mockup wood base background texture */}
        <img
          src="/thongtinkhachhang/Image143.png"
          className="w-full h-[8232px] absolute left-0 top-[181px] max-w-none opacity-100 pointer-events-none"
          alt="image 143 background base"
        />

        {/* 1. Shared Header Section (0px - 181px) */}
        <Header />

        {/* 2. Page Typography Title Area */}
        <div className="flex flex-col items-center shadow-[0_1px_1px_rgba(0,0,0,0.05)] w-[926px] absolute left-[266px] top-[203px] z-10">
          <p className="text-[#A6341B] font-jaro text-[60px] leading-[72px] w-[992px] text-center uppercase tracking-wide">
            XÁC NHẬN THÔNG TIN KHÁCH HÀNG
          </p>
        </div>

        {/* 3. Progress Checkout Step Timeline Tracker (top-[347px]) */}
        <div className="w-[877px] h-[69px] absolute left-[291px] top-[347px] z-10">
          {/* Progress Connector Lines */}
          <div className="absolute left-[37px] top-[59px] w-[381px] h-[1px] bg-[#A6341B]">
            <div className="h-full bg-[#A6341B] w-full"></div>
          </div>
          <div className="absolute left-[436px] top-[59px] w-[373px] h-[1px] bg-[#A6341B]/30"></div>

          {/* Step 1: Giỏ hàng */}
          <Link 
            to="/cart"
            className="absolute left-0 top-0 text-left outline-none cursor-pointer group"
          >
            <p className="font-beVietnamPro text-base font-semibold text-[#A6341B]/70 group-hover:text-[#A6341B] transition-colors">
              Giỏ hàng
            </p>
            <div className="w-5 h-5 rounded-full absolute left-[17px] top-[49px] border-2 border-[#A6341B] bg-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A6341B]"></div>
            </div>
          </Link>

          {/* Step 2: Thông tin khách hàng */}
          <div className="absolute left-[338px] top-0 text-left cursor-default">
            <p className="font-beVietnamPro text-base font-black text-[#A6341B] tracking-[0.02em]">
              Thông tin khách hàng
            </p>
            <div className="w-5 h-5 rounded-full absolute left-[80px] top-[49px] border-2 border-[#A6341B] bg-[#A6341B] flex items-center justify-center shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>

          {/* Step 3: Thanh toán */}
          <div className="absolute left-[783px] top-0 text-left opacity-60">
            <p className="font-beVietnamPro text-base font-semibold text-[#A6341B]/50">
              Thanh toán
            </p>
            <div className="w-5 h-5 rounded-full absolute left-[26px] top-[49px] border-2 border-[#A6341B]/30 bg-white"></div>
          </div>
        </div>

        {/* 4. Subtitles & Cursive Raleway description */}
        <p className="text-[#000] font-jaro text-[32px] w-[655px] h-[45px] absolute left-[394px] top-[469px] z-10 text-center uppercase tracking-wide">
          vui lòng điền đầy đủ các thông tin dưới đây
        </p>
        <p className="text-[#777] font-raleway text-lg font-semibold leading-[27px] w-[600px] h-[27px] absolute left-[420px] top-[517px] z-10 italic text-center text-nowrap">
          Just enter your details below!
        </p>

        {/* 5 Cursive golden circles under subtitle */}
        <div className="w-[350px] h-[50px] absolute left-[548px] top-[565px] z-10">
          <div className="w-[50px] h-[50px] absolute left-0 top-0 rounded-full bg-[#F4CA80] border border-[#A6341B]/15 shadow-sm"></div>
          <div className="w-[50px] h-[50px] absolute left-[75px] top-0 rounded-full bg-[#F4CA80] border border-[#A6341B]/15 shadow-sm"></div>
          <div className="w-[50px] h-[50px] absolute left-[150px] top-0 rounded-full bg-[#F4CA80] border border-[#A6341B]/15 shadow-sm"></div>
          <div className="w-[50px] h-[50px] absolute left-[225px] top-0 rounded-full bg-[#F4CA80] border border-[#A6341B]/15 shadow-sm"></div>
          <div className="w-[50px] h-[50px] absolute left-[300px] top-0 rounded-full bg-[#F4CA80] border border-[#A6341B]/15 shadow-sm"></div>
        </div>

        {/* 5. Stateful Form Area with Translucent Background Overlay Rectangle4445 */}
        <div className="w-full h-[628px] absolute left-0 top-[690px] z-10">
          
          {/* Translucent overlay backdrop */}
          <img
            src="/thongtinkhachhang/Rectangle4445.png"
            className="opacity-[65%] w-full h-[628px] absolute left-0 top-0 max-w-none pointer-events-none object-cover border-y border-[#A6341B]/15"
            alt="Rectangle 4445 backdrop overlay"
          />

          <form 
            onSubmit={handleFormSubmit}
            className="w-[1153px] h-[536px] absolute left-[133px] top-14"
          >
            {/* Input block 1: Họ và Tên */}
            <div className="rounded-[20px] bg-[#FFF] w-[354px] h-[75px] absolute left-0 top-0 shadow-sm border border-black/5 hover:border-[#A6341B]/30 transition-all flex items-center px-5">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                Họ và Tên:
              </span>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
                placeholder="Nhập họ tên"
              />
            </div>

            {/* Input block 2: Email */}
            <div className="rounded-[20px] bg-[#FFF] w-[354px] h-[75px] absolute left-[401px] top-0 shadow-sm border border-black/5 hover:border-[#A6341B]/30 transition-all flex items-center px-5">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                Email:
              </span>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
                placeholder="email@domain.com"
              />
            </div>

            {/* Input block 3: Số Điện Thoại */}
            <div className="rounded-[20px] bg-[#FFF] w-[354px] h-[75px] absolute left-[799px] top-0 shadow-sm border border-black/5 hover:border-[#A6341B]/30 transition-all flex items-center px-5">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                SDT:
              </span>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
                placeholder="Nhập số điện thoại"
              />
            </div>

            {/* Input block 4: Quốc tịch */}
            <div className="rounded-[20px] bg-[#FFF] w-[354px] h-[75px] absolute left-0 top-[102px] shadow-sm border border-black/5 hover:border-[#A6341B]/30 transition-all flex items-center px-5">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                Quốc tịch:
              </span>
              <input
                type="text"
                required
                value={formData.nationality}
                onChange={(e) => handleInputChange("nationality", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
                placeholder="Ví dụ: Việt Nam"
              />
            </div>

            {/* Input block 5: ID / Passport */}
            <div className="rounded-[20px] bg-[#FFF] w-[354px] h-[75px] absolute left-[401px] top-[102px] shadow-sm border border-black/5 hover:border-[#A6341B]/30 transition-all flex items-center px-5">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                ID:
              </span>
              <input
                type="text"
                required
                value={formData.passportId}
                onChange={(e) => handleInputChange("passportId", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
                placeholder="CCCD hoặc Số Hộ Chiếu"
              />
            </div>

            {/* Input block 6: Địa chỉ */}
            <div className="rounded-[20px] bg-[#FFF] w-[354px] h-[75px] absolute left-[799px] top-[102px] shadow-sm border border-black/5 hover:border-[#A6341B]/30 transition-all flex items-center px-5">
              <span className="text-[#000] font-raleway text-lg font-bold mr-2 shrink-0 select-none">
                Địa chỉ:
              </span>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base flex-grow focus:ring-0 placeholder-gray-400"
                placeholder="Tỉnh/Thành phố xóm thôn"
              />
            </div>

            {/* Input block 7: Textarea Để lại lời nhắn */}
            <div className="rounded-[20px] bg-[#FFF] w-[1153px] h-[194px] absolute left-0 top-[216px] shadow-sm border border-black/5 hover:border-[#A6341B]/30 transition-all p-5 flex flex-col">
              <span className="text-[#000] font-raleway text-lg font-bold mb-2 select-none">
                Để lại lời nhắn...
              </span>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                className="bg-transparent border-none outline-none font-raleway font-semibold text-black text-base w-full flex-grow focus:ring-0 placeholder-gray-400 resize-none"
                placeholder="Bạn có ghi chú gì đặc biệt cho ban tổ chức workshop không? (ví dụ: Xuất hóa đơn VAT, Yêu cầu ngôn ngữ tiếng Anh...)"
              />
            </div>

            {/* Submit CTA Button "Bước tiếp theo" */}
            <button 
              type="submit"
              className="cursor-pointer text-nowrap flex py-2.5 px-8 justify-center items-center gap-3 rounded-[20px] bg-[#A6341B] hover:bg-[#8B2C16] active:scale-98 transition-all w-[329px] h-[67px] absolute left-[423px] top-[469px] shadow-lg border border-black/5 group"
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

        {/* 7. Stateful FAQs Section (1380px) with Support Hotline incorporated */}
        <div className="w-[1220px] absolute left-[111px] top-[1380px] z-10 overflow-visible flex flex-col items-center">
          <p className="text-[#000] font-jaro text-4xl leading-[46px] w-[500px] text-center uppercase tracking-wide">
            Những câu hỏi thường gặp
          </p>
          <p className="text-[#3E3E3E] font-dMSans text-base leading-[30px] w-[596px] mt-4 text-center font-medium">
            Dưới đây là những câu hỏi thường gặp khi khách hàng đang trong quá trình xác nhận giỏ hàng, điền thông tin cá nhân và thanh toán.
          </p>

          {/* Golden Hotline Banner - Centered below subtitle with balanced margin */}
          <div className="flex py-3 px-8 justify-center items-center rounded-full bg-[#D4A017] hover:bg-[#C29115] shadow-md border border-white/10 w-[461px] h-[50px] transition-all cursor-pointer mt-6 mb-2">
            <span className="text-[#FFF] font-beVietnamPro text-base font-bold tracking-wide">
              Mọi sự cố xin vui lòng liên hệ: 03324233282
            </span>
          </div>

          {/* FAQs Accordion Grid */}
          <div className="grid grid-cols-2 gap-6 w-full mt-8 overflow-visible">
            {faqsData.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className={`rounded-[15px] border border-[#A6341B] bg-[#F4CA80] p-6 flex flex-col justify-start cursor-pointer hover:shadow-lg hover:scale-[1.005] transition-all duration-300 min-h-[142px] ${isExpanded ? "h-auto shadow-md" : "h-[142px] overflow-hidden shadow-sm"}`}
                >
                  <div className="flex justify-between items-center w-full gap-4">
                    <p className="text-[#000] font-beVietnamPro text-lg font-bold leading-tight">
                      {faq.q}
                    </p>
                    
                    {/* Collapsible arrow indicator */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors">
                      <svg
                        width="24"
                        height="13"
                        viewBox="0 0 24 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : "-rotate-90"}`}
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
                  <div className={`transition-all duration-300 ease-in-out ${isExpanded ? "mt-4 opacity-100 max-h-[500px]" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    <p className="text-[#3E3E3E] font-dMSans text-sm leading-relaxed border-t border-[#A6341B]/20 pt-4 text-justify">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. Shared Footer at bottom (top-[2050px] - top-[2872px]) */}
        <Footer className="top-[2050px]" />

      </ResponsiveContainer>

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
    </div>
  );
}
