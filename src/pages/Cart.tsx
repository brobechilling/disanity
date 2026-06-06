"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import CheckoutFAQSection from "@/components/domain/CheckoutFAQSection";
import { mockCartItems, mockHeroSlides, mockFAQs } from "@/utils/mockData";

export default function Cart() {
  const navigate = useNavigate();
  // Stateful Cart Items initialized using standard mock data
  const [cartItems, setCartItems] = useState(mockCartItems);

  // Active step tracker state
  const [activeStep, setActiveStep] = useState("cart"); // "cart", "info", "payment"

  // Hero Banner Slide Index state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroSlides = mockHeroSlides;

  // Helper functions
  const handleQtyChange = (id: number, val: number) => {
    const safeQty = Number.isFinite(val) && val > 0 ? Math.floor(val) : 1;
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, qty: safeQty } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(prev => (prev === index ? null : index));
  };

  // Math Calculations for pricing blocks
  const subtotal = 2000000; // Mock subtotal from mockup
  const discountRate = 0.8; // 80% discount matching original "-1.600.000đ" on "2.000.000đ" subtotal
  
  // Calculate pricing based on items in cart
  const hasItems = cartItems.length > 0;
  const currentSubtotal = hasItems ? subtotal : 0;
  const currentDiscount = hasItems ? -1600000 : 0;
  const currentTotal = hasItems ? 400000 : 0;

  const faqsData = mockFAQs;

  return (
    <PageShell background="cart">
      <SiteHeader />

      <main className="overflow-hidden">
        <Section width="screen" gutter="none" className="mt-[70px]">
          <div className="relative mx-auto h-[239px] w-[1440px] max-w-full overflow-visible">

        {/* 2. Page Title */}
        <div className="absolute left-[265px] top-0 z-10 flex w-[926px] flex-col items-center shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          <p className="w-[992px] text-center font-jaro text-[50px] uppercase leading-[72px] tracking-wide text-[#A6341B]">
            XÁC NHẬN GIỎ HÀNG
          </p>
        </div>

        {/* 3. Interactive Progress Step Tracker (370px) */}
        <div className="absolute left-[290px] top-[120px] z-10 h-[69px] w-[877px]">
          {/* Progress Connector Lines */}
          <div className="absolute left-[37px] top-[59px] w-[381px] h-[1px] bg-[#A6341B]/30">
            <div className={`h-full bg-[#A6341B] transition-all duration-300 ${activeStep !== "cart" ? "w-full" : "w-0"}`}></div>
          </div>
          <div className="absolute left-[436px] top-[59px] w-[373px] h-[1px] bg-[#A6341B]/30">
            <div className={`h-full bg-[#A6341B] transition-all duration-300 ${activeStep === "payment" ? "w-full" : "w-0"}`}></div>
          </div>

          {/* Step 1: Giỏ hàng */}
          <button 
            onClick={() => setActiveStep("cart")}
            className="absolute left-0 top-0 text-left outline-none cursor-pointer group"
          >
            <p className={`font-beVietnamPro text-base font-black tracking-[0.02em] transition-colors ${activeStep === "cart" ? "text-[#A6341B]" : "text-[#A6341B]/60 group-hover:text-[#A6341B]"}`}>
              Giỏ hàng
            </p>
            <div className={`w-5 h-5 rounded-full absolute left-[9px] top-[49px] border-2 transition-all flex items-center justify-center ${activeStep === "cart" ? "border-[#A6341B] bg-[#A6341B]" : "border-[#A6341B] bg-white"}`}>
              {activeStep === "cart" && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
            </div>
          </button>

          {/* Step 2: Thông tin khách hàng */}
          <button 
            onClick={() => setActiveStep("info")}
            className="absolute left-[347px] top-0 text-left outline-none cursor-pointer group"
          >
            <p className={`font-beVietnamPro text-base font-semibold tracking-[0.02em] transition-colors ${activeStep === "info" ? "text-[#A6341B] font-bold" : "text-[#A6341B]/60 group-hover:text-[#A6341B]"}`}>
              Thông tin khách hàng
            </p>
            <div className={`w-5 h-5 rounded-full absolute left-[71px] top-[49px] border-2 transition-all flex items-center justify-center ${activeStep === "info" ? "border-[#A6341B] bg-[#A6341B]" : "border-[#A6341B]/50 bg-white"}`}>
              {activeStep === "info" && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
            </div>
          </button>

          {/* Step 3: Thanh toán */}
          <button 
            onClick={() => setActiveStep("payment")}
            className="absolute left-[783px] top-0 text-left outline-none cursor-pointer group"
          >
            <p className={`font-beVietnamPro text-base font-semibold tracking-[0.02em] transition-colors ${activeStep === "payment" ? "text-[#A6341B] font-bold" : "text-[#A6341B]/60 group-hover:text-[#A6341B]"}`}>
              Thanh toán
            </p>
            <div className={`w-5 h-5 rounded-full absolute left-[26px] top-[49px] border-2 transition-all flex items-center justify-center ${activeStep === "payment" ? "border-[#A6341B] bg-[#A6341B]" : "border-[#A6341B]/50 bg-white"}`}>
              {activeStep === "payment" && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
            </div>
          </button>
        </div>
          </div>
        </Section>

        {/* 4. Interactive Hero Slider Banner (493px - 1008px) */}
        <Section width="screen" gutter="none" className="mt-[24px]">
          <div className="relative mx-auto h-[515px] w-[1440px] max-w-full overflow-visible">
        <div className="absolute left-[102px] top-0 z-10 h-[515px] w-[1237px] overflow-hidden rounded-[24px] border border-[#A6341B]/10 shadow-2xl group">
          <div className="w-full h-full relative">
            {/* Banner Background Image */}
            <img
              src={heroSlides[currentSlide].img}
              className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-103"
              alt="Hero slide banner"
            />
            {/* Dark/Warm vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"></div>
          </div>

          {/* Floating Slide Text Overlay */}
          <div className="w-[956px] h-[120px] absolute left-[140px] top-[180px] z-20 flex flex-col items-center text-center">
            <p className="font-dFVNFreckleFace text-[52px] leading-tight tracking-wide text-[#F4CA80] drop-shadow-md">
              {heroSlides[currentSlide].title}
            </p>
            <p className="text-[#FFF] font-beVietnamPro text-[22px] font-bold tracking-[0.05em] mt-3 drop-shadow-sm uppercase">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>

          {/* Navigation Controls Left / Right Arrows */}
          <button 
            onClick={handlePrevSlide}
            className="w-[44px] h-[44px] absolute left-[550px] top-[430px] z-20 rounded-full bg-black/45 hover:bg-black/75 flex items-center justify-center cursor-pointer transition-all active:scale-90 border border-white/20"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 rotate-180"
            >
              <path
                d="M8.75 24.5L19.25 14L8.75 3.5"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          <button 
            onClick={handleNextSlide}
            className="w-[44px] h-[44px] absolute left-[610px] top-[430px] z-20 rounded-full bg-[#A6341B] hover:bg-[#8B2C16] flex items-center justify-center cursor-pointer transition-all active:scale-90 shadow-md border border-white/10"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M8.75 24.5L19.25 14L8.75 3.5"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
          </div>
        </Section>

        {/* 5. Cart Items Section (1097px - 1650px) */}
        <Section width="screen" gutter="none" className="mt-[60px]">
          <div className="relative mx-auto h-[810px] w-[1440px] max-w-full overflow-visible">
        {/* Top line indicator */}
        <div className="absolute left-[160px] top-0 z-10 h-[1.5px] w-[1120px] bg-[#8B4513]/40"></div>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="absolute left-[160px] top-[82px] z-10 flex w-[1120px] flex-col items-center justify-center rounded-[24px] border border-black/5 bg-white/40 py-16 shadow-inner backdrop-blur-md">
            <span className="text-6xl">🛒</span>
            <p className="text-black font-beVietnamPro text-2xl font-bold mt-4">
              Giỏ hàng của bạn đang trống!
            </p>
            <p className="text-gray-500 font-beVietnamPro text-sm mt-1">
              Hãy quay lại mục Workshop để tìm kiếm những trải nghiệm văn hóa thú vị nhé.
            </p>
            <Link 
              to="/workshops/list"
              className="mt-6 bg-[#A6341B] hover:bg-[#8B2C16] text-white font-beVietnamPro text-sm font-bold py-3 px-8 rounded-full transition-colors active:scale-95 shadow-md"
            >
              Khám Phá Workshops
            </Link>
          </div>
        ) : (
          cartItems.map((item, index) => {
            // Calculate absolute top position based on item index to ensure consistent formatting
            const itemTop = index === 0 ? 29 : 294;
            return (
              <div 
                key={item.id} 
                className="absolute left-[160px] z-10 h-[216px] w-[1120px] transition-all duration-300"
                style={{ top: `${itemTop}px` }}
              >
                {/* Product Image */}
                <div className="absolute left-0 top-0 h-[216px] w-[200px] shrink-0 overflow-hidden rounded-[15px] border border-black/10 shadow-sm">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                </div>

                {/* Second Column: Title & Price & Qty Dropdown */}
                <div className="absolute left-[250px] top-0 flex h-[216px] w-[280px] flex-col justify-between py-1">
                  <div>
                    <p className="font-jaro text-3xl leading-none tracking-wide text-[#A6341B]">
                      {item.title}
                    </p>
                    <p className="text-[#1F2937] font-beVietnamPro text-lg font-bold mt-3.5 tracking-[0.02em]">
                      {item.unitPriceText}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex flex-col gap-2 mt-auto mb-2">
                    <p className="text-[#1F2937] font-beVietnamPro text-xs font-bold tracking-[0.02em]">
                      Trọn gói
                    </p>
                    {/* Circle indicators */}
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map(dot => (
                        <div key={dot} className="w-6 h-6 rounded-full bg-[#9A9A9A] border border-white/80 shadow-sm"></div>
                      ))}
                    </div>
                  </div>

                  {/* SL input */}
                  <label className="flex h-10 w-[132px] items-center gap-2 rounded-[6px] border border-[#1F2937] bg-[#FFF] px-3 font-beVietnamPro text-sm font-semibold text-[#1F2937]">
                    <span className="shrink-0">SL:</span>
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value, 10))}
                      className="min-w-0 flex-1 bg-transparent text-center outline-none"
                    />
                  </label>
                </div>

                {/* Third Column: Description Details */}
                <div className="absolute left-[560px] top-[15px] h-[183px] w-[315px] leading-tight">
                  <p className="text-black font-beVietnamPro text-base font-bold leading-[29px]">
                    Mô tả:
                  </p>
                  <ul className="text-[#3E3E3E] font-beVietnamPro text-xs space-y-1.5 mt-2 font-medium">
                    <li>-Thể loại: {item.genre}</li>
                    <li>-Loại hình: {item.type}</li>
                    <li>-Địa điểm: {item.location}</li>
                    <li>-Nghệ nhân: {item.artisan}</li>
                    <li>-Thời lượng: {item.duration}</li>
                  </ul>
                </div>

                {/* Fourth Column: Price Value & Removal Trigger & Button */}
                <div className="absolute left-[890px] top-0 flex h-[216px] w-[230px] flex-col items-end justify-between py-1">
                  
                  {/* Remove Item Button */}
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="flex items-center gap-2 text-[#374151] hover:text-[#A6341B] transition-colors cursor-pointer outline-none group"
                  >
                    <svg
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-5 group-hover:scale-105 transition-transform"
                    >
                      <path
                        d="M1.33028 5.9537V17.4937C1.33028 18.1757 1.58039 18.8163 2.01731 19.2759C2.45221 19.7368 3.05744 19.9984 3.69086 19.9995H12.5528C13.1864 19.9984 13.7916 19.7368 14.2264 19.2759C14.6633 18.8163 14.9134 18.1757 14.9134 17.4937V5.9537C15.7819 5.72317 16.3447 4.88411 16.2285 3.9929C16.1121 3.10188 15.353 2.43535 14.4543 2.43516H12.0562V1.84968C12.059 1.35733 11.8643 0.88456 11.5158 0.53675C11.1672 0.189122 10.6937 -0.0044519 10.2014 -0.00042674H6.04228C5.54993 -0.0044519 5.07643 0.189122 5.07643 0.936339H10.2014C10.4454 0.93213 10.6807 1.02672 10.8536 1.19889C11.0267 1.37087 11.1226 1.6058 11.1195 1.84968V2.43516H5.12418V1.84968ZM1.78933 3.37193H14.4543C14.92 3.37193 15.2974 3.74938 15.2974 4.21502C15.2974 4.68066 14.92 5.05811 14.4543 5.05811H1.78933C1.3237 5.05811 0.946246 4.68066 0.946246 4.21502C0.946246 3.74938 1.3237 3.37193 1.78933 3.37193Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-beVietnamPro text-xs font-semibold">Remove Item</span>
                  </button>

                  {/* Giá: 200.000₫ */}
                  <p className="text-black font-beVietnamPro text-[20px] font-bold tracking-[0.05em] mt-2 text-right">
                    Giá: {(item.price * item.qty).toLocaleString("vi-VN")}₫
                  </p>

                  {/* Đặt vé ngay CTA button */}
                  <button className="cursor-pointer text-nowrap flex py-2 px-6 justify-center items-center rounded-[12px] border border-[#A6341B] bg-[#D4A017] hover:bg-[#C29115] active:scale-95 transition-all text-white font-beVietnamPro text-[14px] font-bold shadow-md">
                    Đặt vé ngay
                  </button>
                </div>
              </div>
            );
          })
        )}

        {/* Dynamic separating rules */}
        <div className="absolute left-[160px] top-[276px] z-10 h-[1.5px] w-[1120px] bg-[#8B4513]/40"></div>
        <div className="absolute left-[160px] top-[541px] z-10 h-[1.5px] w-[1120px] bg-[#8B4513]/40"></div>

        {/* 6. Pricing and Checkout Block (1679px - 1900px) */}
        <div className="absolute left-[160px] top-[572px] z-10 flex w-[1120px] flex-col px-2.5">
          {/* Left Block: Invoice Summary Text */}
          <div className="flex w-full flex-col gap-2.5">
            <p className="flex w-full items-center justify-between font-jaro text-4xl uppercase leading-tight text-[#A6341B]">
              <span>Tổng giá trị đơn hàng:</span>
              <span className="text-3xl font-black text-black">
                {currentSubtotal.toLocaleString("vi-VN")}đ
              </span>
            </p>
            <p className="mt-1 flex w-full items-center justify-between font-jaro text-4xl uppercase leading-tight text-[#A6341B]">
              <span>Discount:</span>
              <span className="text-right text-3xl font-bold text-red-600">
                {currentDiscount.toLocaleString("vi-VN")}đ
              </span>
            </p>
          </div>

          {/* Right Block: Final cost and Step Button */}
          <div className="mt-1 text-center">
            <p className="flex w-full items-center justify-between font-jaro text-[32px] font-black text-[#A6341B]">
              Chi phí: <span className="text-[#000] ml-2">{currentTotal.toLocaleString("vi-VN")}đ</span>
            </p>

            {/* Bước tiếp theo CTA button */}
            <button 
              onClick={() => {
                if (cartItems.length === 0) {
                  alert("Giỏ hàng của bạn đang trống!");
                  return;
                }
                navigate("/checkout/info");
              }}
              className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 text-nowrap rounded-full bg-[#A6341B] px-8 py-3 font-beVietnamPro text-base font-bold text-white shadow-md transition-all hover:bg-[#8B2C16] active:scale-95 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 overflow-hidden transition-transform duration-200 group-hover:-translate-y-0.5"
              >
                <path
                  d="M10.7946 20.4583C10.8821 21.3931 11.7108 22.08 12.6456 21.9924C13.2811 21.9329 13.8297 21.5225 14.0662 20.9297L19.8964 6.31273C20.2443 5.44066 19.8193 4.45173 18.9472 4.10388C18.5428 3.94259 18.092 3.94259 17.6876 4.10388L3.07063 9.93411C2.19856 10.282 1.77359 11.2709 2.12143 12.143C2.35789 12.7358 2.90649 13.1462 3.54197 13.2057L10.1736 13.8267L10.7946 20.4583ZM18.1383 5.86201L12.548 19.8773L11.8267 12.1736L4.12299 11.4523L18.1383 5.86201Z"
                  fill="white"
                />
              </svg>
              <span>Bước tiếp theo</span>
            </button>
          </div>
        </div>

          </div>
        </Section>

        <CheckoutFAQSection
          faqs={faqsData}
          showHotline
          defaultExpandedIndex={null}
          className="mt-[85px]"
        />

        <div className="hidden">
          <p className="text-[#000] font-jaro text-4xl leading-[46px] w-[500px] text-center uppercase tracking-wide">
            Những câu hỏi thường gặp
          </p>
          <p className="text-[#3E3E3E] font-beVietnamPro text-base leading-[30px] w-[596px] mt-4 text-center font-medium">
            Dưới đây là những câu hỏi thường gặp khi khách hàng đang trong quá trình xác nhận giỏ hàng, điền thông tin cá nhân và thanh toán.
          </p>

          {/* FAQs Accordion Grid */}
          <div className="grid grid-cols-2 gap-6 w-full mt-10 overflow-visible">
            {faqsData.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className={`rounded-[15px] border border-[#A6341B] bg-[#F4CA80] p-6 flex flex-col justify-start cursor-pointer hover:shadow-lg hover:scale-[1.005] transition-all duration-300 min-h-[142px] ${isExpanded ? "h-auto shadow-md" : "h-[142px] overflow-hidden shadow-sm"}`}
                >
                  <div className="flex justify-between items-center w-full gap-4">
                    <p className="text-[#000] font-beVietnamPro text-lg font-bold leading-tight">
                      {faq.q}
                    </p>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors">
                      <svg
                        width="24"
                        height="13"
                        viewBox="0 0 24 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
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

                  {/* Expandable answer */}
                  <div className={`transition-all duration-300 ease-in-out ${isExpanded ? "mt-4 opacity-100 max-h-[500px]" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    <p className="text-[#3E3E3E] font-beVietnamPro text-sm leading-relaxed border-t border-[#A6341B]/20 pt-4 text-justify font-medium">
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
    </PageShell>
  );
}
