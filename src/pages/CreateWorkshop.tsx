"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import CheckoutFAQSection from "@/components/domain/CheckoutFAQSection";
import { mockUploadedImages, mockArtisanFAQs } from "@/utils/mockData";

const artisanFaqs = mockArtisanFAQs.map((faq) => ({
  q: faq.question,
  a: faq.answer,
}));

export default function CreateWorkshop() {
  const navigate = useNavigate();

  // 1. Stateful Tutorial Banner Dismissal
  const [isTutorialMinimized, setIsTutorialMinimized] = useState(false);

  // 2. Interactive Stepper Stages
  const [activeStage, setActiveStage] = useState(1); // 1: Thông tin cơ bản, 2: Câu chuyện, 3: Hình ảnh, 4: Lịch trình, 5: Hoàn tất

  // 3. Stateful Form Fields
  const [workshopName, setWorkshopName] = useState("");
  const [category, setCategory] = useState("Gốm sứ & Đồ đất nung");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [duration, setDuration] = useState(3);
  const [heritageStory, setHeritageStory] = useState("");

  // Custom interactive mock images list
  const [uploadedImages, setUploadedImages] = useState(mockUploadedImages);

  // Handlers
  const handleDropdownSelect = (val: string) => {
    setCategory(val);
    setIsDropdownOpen(false);
    setActiveStage(2); // advance stage naturally
  };

  const handleAddMockPhoto = () => {
    alert("Hệ thống tải ảnh lên đang được kết nối với thiết bị của bạn. Vui lòng chọn ảnh chất lượng cao để tăng tỷ lệ duyệt bài.");
    setActiveStage(3); // advance stage naturally
  };

  const handleFormSubmit = () => {
    if (!workshopName) {
      alert("Vui lòng nhập Tên Workshop trước khi tiếp tục!");
      return;
    }
    alert(`Chúc mừng! Workshop di sản "${workshopName}" đã được khởi tạo thành công và đang được chuyển tới hội đồng thẩm định DiSanity!`);
    navigate("/artisan-account");
  };

  return (
    <PageShell background="createWorkshop">
      <SiteHeader />

      {/* 1. Stateful Detailed Tutorial Banner */}
      <Section width="screen" gutter="none" className="relative z-20">
        <div className="relative mx-auto h-[738px] w-[1440px] max-w-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 z-20 w-full overflow-hidden transition-all duration-500 ${
              isTutorialMinimized ? "h-[80px]" : "h-[738px]"
            }`}
          >
            <div className="relative h-full w-full">
              {/* Background Tutorial Image */}
              <img
                src="/createworkshop/ImageContainer.png"
                className="absolute left-0 top-0 h-[738px] w-full max-w-none object-cover"
                alt="Image Container"
              />

              {/* Translucent overlay for minimized state */}
              {isTutorialMinimized && (
                <div className="absolute inset-0 z-10 flex items-center justify-between bg-[#000]/60 px-[110px] backdrop-blur-sm">
                  <p className="select-none font-beVietnamPro text-base font-bold text-[#FFF]">
                    💡 Hướng dẫn tạo Workshop đã được ẩn. Bạn có thể mở lại bất cứ lúc nào.
                  </p>
                  <button
                    onClick={() => setIsTutorialMinimized(false)}
                    className="cursor-pointer rounded-full border border-[#F4CA80] px-5 py-2 text-xs font-bold text-[#F4CA80] transition-all hover:bg-[#F4CA80]/15 active:scale-95"
                  >
                    Hiển thị hướng dẫn
                  </button>
                </div>
              )}

              {!isTutorialMinimized && (
                <div className="absolute inset-0 z-10 px-[110px] pt-[234px]">
                  <p className="h-[132px] w-[620px] select-none font-jaro text-[56px] leading-[66px] tracking-wide text-[#FFF]">
                    Hướng dẫn chi tiết cách tạo Workshop cho nghệ nhân
                  </p>
                  <p className="mt-6 h-[90px] w-[574px] select-none font-beVietnamPro text-lg font-medium leading-[30px] text-[#F4CA80]">
                    Hãy kể lại câu chuyện di sản và chia sẻ kỹ nghệ đặc trưng của bạn. DiSanity đồng hành cùng nghệ nhân đưa tinh hoa truyền thống tiếp cận thế hệ trẻ Việt Nam.
                  </p>

                  {/* Action buttons inside banner */}
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => alert("Chúng mình đã chuẩn bị sẵn tài liệu hướng dẫn chuyên sâu. Đang mở tab tài liệu mới...")}
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[40px] bg-[#F4CA80] px-8 py-4 font-beVietnamPro text-base font-bold text-[#A6341B] shadow-md transition-all hover:bg-[#E5BD6C] active:scale-95"
                    >
                      <span>Xem ngay</span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                        <path d="M7 3l5 5-5 5" stroke="#A6341B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <button
                      onClick={() => setIsTutorialMinimized(true)}
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[36.5px] border-2 border-white bg-transparent px-8 py-4 font-beVietnamPro text-base font-bold text-[#FFF] transition-all hover:bg-white/10 active:scale-95"
                    >
                      <span>Tôi đã biết</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section width="screen" gutter="none" className="relative z-10">
        <div className="relative mx-auto h-[1690px] w-[1440px] max-w-full">
          {/* Decorative Frame Background Overlay */}
          <img
            src="/createworkshop/Rectangle4445.png"
            className="pointer-events-none absolute left-[100px] top-[303px] z-10 h-[1374px] w-[1240px] max-w-none opacity-[40%]"
            alt="Rectangle 4445 background frame decoration"
          />

          {/* Active Stepper Progress Indicators */}
          <div className="absolute left-[268px] top-[158px] z-20 h-[69px] w-[900px]">
            <div className="absolute left-0 top-0 h-[69px] w-[900px]">
              {/* Background connectors lines */}
              <svg
                width="381"
                height="1"
                viewBox="0 0 381 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[82px] top-[59px] w-[381px]"
              >
                <path d="M0 0.5L381 0.499967" stroke={activeStage >= 3 ? "#A6341B" : "rgba(166,52,27,0.2)"} strokeWidth="1.5" />
              </svg>
              <svg
                width="383"
                height="1"
                viewBox="0 0 383 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[471px] top-[59px] w-[383px]"
              >
                <path d="M0 0.5L383 0.500033" stroke={activeStage >= 5 ? "#A6341B" : "rgba(166,52,27,0.2)"} strokeWidth="1.5" />
              </svg>

              {/* Step text links */}
              <button
                onClick={() => setActiveStage(1)}
                className={`absolute left-0 top-0.5 cursor-pointer font-beVietnamPro text-base font-black tracking-[0.02em] transition-colors ${
                  activeStage === 1 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
                }`}
              >
                Thông tin cơ bản
              </button>

              <button
                onClick={() => setActiveStage(2)}
                className={`absolute left-[215px] top-0.5 cursor-pointer font-beVietnamPro text-base font-semibold tracking-[0.02em] transition-colors ${
                  activeStage === 2 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
                }`}
              >
                Câu chuyện
              </button>

              <button
                onClick={() => setActiveStage(3)}
                className={`absolute left-[428px] top-0 cursor-pointer font-beVietnamPro text-base font-semibold tracking-[0.02em] transition-colors ${
                  activeStage === 3 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
                }`}
              >
                Hình ảnh
              </button>

              <button
                onClick={() => setActiveStage(4)}
                className={`absolute left-[640px] top-0.5 cursor-pointer font-beVietnamPro text-base font-semibold tracking-[0.02em] transition-colors ${
                  activeStage === 4 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
                }`}
              >
                Lịch trình
              </button>

              <button
                onClick={() => setActiveStage(5)}
                className={`absolute left-[828px] top-0 cursor-pointer font-beVietnamPro text-base font-semibold tracking-[0.02em] transition-colors ${
                  activeStage === 5 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
                }`}
              >
                Hoàn tất
              </button>

              {/* Stepper active dots indicator */}
              <div className={`absolute left-[62px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                activeStage >= 1 ? "border-[#A6341B] bg-[#A6341B]" : "border-[#A6341B]/20 bg-white"
              }`}>
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <div className={`absolute left-[253px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                activeStage >= 2 ? "border-[#A6341B] bg-[#A6341B]" : "border-[#A6341B]/20 bg-white"
              }`}>
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <div className={`absolute left-[453px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                activeStage >= 3 ? "border-[#A6341B] bg-[#A6341B]" : "border-[#A6341B]/20 bg-white"
              }`}>
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <div className={`absolute left-[668px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                activeStage >= 4 ? "border-[#A6341B] bg-[#A6341B]" : "border-[#A6341B]/20 bg-white"
              }`}>
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <div className={`absolute left-[854px] top-[49px] flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                activeStage >= 5 ? "border-[#A6341B] bg-[#A6341B]" : "border-[#A6341B]/20 bg-white"
              }`}>
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
            </div>
          </div>

          {/* Typographic Section Title Banner */}
          <div className="absolute left-[205px] top-[67px] z-10 w-[1030px]">
            <p className="select-none font-jaro text-[64px] leading-tight tracking-wide text-[#A6341B]">
              Tạo Workshop Mới
            </p>
          </div>

          {/* Premium Message Card Block */}
          <div className="absolute left-[185px] top-[368px] z-10 flex w-[1050px] flex-col items-start rounded-[48px] border border-[rgba(198,92,57,0.15)] bg-black/90 pb-8 pl-[68px] pr-8 pt-8 shadow-[0_4px_25px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            <div className="flex w-[950px] items-start gap-4">
              <div className="flex w-[934px] shrink-0 flex-col items-start gap-2">
                <p className="select-none font-beVietnamPro text-xl font-bold leading-7 text-[#F4CA80]">
                  Chia sẻ truyền thống của bạn
                </p>
                <p className="mt-2 w-[879px] select-none text-justify font-beVietnamPro text-base font-light leading-[26px] text-[#FFF]">
                  Hãy kể cho thế giới nghe câu chuyện đằng sau nghề thủ công của bạn. Di sản của bạn là điều làm nên sự độc đáo cho workshop này. Du khách không chỉ tìm kiếm một sản phẩm; họ đang tìm kiếm sự kết nối với lịch sử nghệ thuật Việt Nam.
                </p>
              </div>
            </div>
          </div>

          {/* Input: Tên Workshop */}
          <div className="absolute left-[205px] top-[591px] z-20 flex w-[1030px] flex-col items-start gap-2">
            <label className="select-none font-beVietnamPro text-lg font-bold leading-7 text-[#1E293B]">
              Tên Workshop
            </label>
            <p className="mb-1 select-none font-beVietnamPro text-sm font-medium leading-5 text-[#64748B]">
              Đặt một cái tên hấp dẫn và mô tả rõ nghề thủ công của bạn.
            </p>
            <div className="relative flex h-16 w-full items-center overflow-hidden rounded-[48px] border border-[#E2E8F0] bg-white px-8 shadow-sm transition-colors focus-within:border-[#A6341B]/60">
              <input
                type="text"
                className="w-full bg-transparent font-beVietnamPro text-lg font-medium text-[#0F172A] placeholder-gray-400 focus:outline-none"
                placeholder="Ví dụ: Vẽ tay gốm sứ Bát Tràng truyền thống"
                value={workshopName}
                onChange={(e) => {
                  setWorkshopName(e.target.value);
                  setActiveStage(1);
                }}
              />
            </div>
          </div>

          {/* Input: Mô tả văn hóa dropdown select */}
          <div className="absolute left-[205px] top-[747px] z-30 flex w-[531px] flex-col items-start gap-2">
            <label className="select-none font-beVietnamPro text-lg font-bold leading-7 text-[#1E293B]">
              Mô tả văn hóa
            </label>

            <div className="relative w-full">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex h-16 w-full cursor-pointer items-center justify-between rounded-[48px] border border-[#E2E8F0] bg-white px-8 text-left shadow-sm transition-colors hover:border-gray-300 focus:outline-none"
              >
                <span className="font-beVietnamPro text-lg font-medium text-[#0F172A]">
                  {category}
                </span>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Custom Interactive Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 right-0 top-[72px] z-30 flex max-h-[220px] flex-col gap-1 overflow-y-auto rounded-[24px] border border-[#E2E8F0] bg-white py-3 shadow-2xl">
                  {["Gốm sứ & Đồ đất nung", "Dệt Lụa & Thêu tay cổ truyền", "Tranh dân gian Đông Hồ", "Làm Mặt Nạ Hát Bội", "Điêu Khắc Tre & Gỗ"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleDropdownSelect(val)}
                      className="w-full cursor-pointer px-8 py-2.5 text-left font-beVietnamPro text-[15px] font-medium text-gray-800 transition-colors hover:bg-[#A6341B]/5"
                    >
                      {val}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Input: Thời lượng dự kiến slider */}
          <div className="absolute left-[801px] top-[747px] z-20 flex w-[434px] flex-col items-start gap-2">
            <label className="select-none font-beVietnamPro text-lg font-bold leading-7 text-[#1E293B]">
              Thời lượng dự kiến
            </label>

            <div className="relative flex h-16 w-full items-center justify-between overflow-hidden rounded-[48px] border border-[#E2E8F0] bg-white px-8 shadow-sm">
              {/* Input display */}
              <div className="flex items-center gap-2">
                <span className="font-beVietnamPro text-lg font-bold text-[#0F172A]">
                  {duration}
                </span>
                <span className="select-none font-beVietnamPro text-base font-semibold text-[#94A3B8]">
                  Giờ trải nghiệm
                </span>
              </div>

              {/* Incrementor Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { setDuration(Math.max(1, duration - 1)); setActiveStage(1); }}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 font-bold text-gray-600 transition-colors hover:bg-[#A6341B]/10 hover:text-[#A6341B]"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => { setDuration(Math.min(12, duration + 1)); setActiveStage(1); }}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 font-bold text-gray-600 transition-colors hover:bg-[#A6341B]/10 hover:text-[#A6341B]"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Heritage Story Textarea */}
          <div className="absolute left-[205px] top-[898px] z-20 flex w-[1030px] flex-col items-start gap-2">
            <label className="select-none font-beVietnamPro text-lg font-bold leading-7 text-[#1E293B]">
              Kể câu chuyện của bạn...
            </label>
            <p className="mb-1 select-none font-beVietnamPro text-sm font-medium leading-5 text-[#64748B]">
              Cho chúng tôi biết về lịch sử của nghề này trong gia đình hoặc làng của bạn. Nó đại diện cho điều gì?
            </p>
            <div className="h-[214px] w-full overflow-hidden rounded-[48px] border border-[#E2E8F0] bg-white p-8 shadow-sm transition-colors focus-within:border-[#A6341B]/60">
              <textarea
                className="h-full w-full resize-none bg-transparent font-beVietnamPro text-lg font-medium text-[#0F172A] placeholder-gray-400 focus:outline-none"
                placeholder="Hãy chia sẻ giá trị di sản đằng sau sản phẩm này..."
                value={heritageStory}
                onChange={(e) => {
                  setHeritageStory(e.target.value);
                  setActiveStage(2);
                }}
              />
            </div>
          </div>

          {/* Custom Upload Images Block */}
          <div className="absolute left-[205px] top-[1201px] z-20 flex w-[1030px] flex-col items-start gap-3">
            <label className="select-none font-beVietnamPro text-lg font-bold leading-7 text-[#1E293B]">
              Tải ảnh lên (Xưởng &amp; Sản phẩm)
            </label>

            <div className="mt-2 flex w-full items-center justify-start gap-6">
              {/* Upload Button */}
              <button
                type="button"
                onClick={handleAddMockPhoto}
                className="group flex h-[228px] w-[228px] cursor-pointer flex-col items-center justify-center gap-3 rounded-[32px] border-2 border-dashed border-[#C65C39] bg-[#C65C39]/5 shadow-sm transition-all hover:bg-[#C65C39]/10 active:scale-95"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C65C39]/15 transition-colors group-hover:scale-105">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    <path d="M12 5v14M5 12h14" stroke="#C65C39" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-beVietnamPro text-sm font-bold tracking-wide text-[#C65C39]">
                  Thêm ảnh
                </span>
              </button>

              {/* Display list of uploaded photo previews */}
              {uploadedImages.map((img) => (
                <div
                  key={img.id}
                  className="group relative h-[228px] w-[228px] overflow-hidden rounded-[32px] border-3 border-[#A6341B] bg-[#E2E8F0] shadow-md"
                >
                  <img
                    src={img.url}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={img.alt}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setUploadedImages(uploadedImages.filter((i) => i.id !== img.id));
                      alert("Đã xóa ảnh xem trước.");
                    }}
                    className="absolute right-3 top-3 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-bold text-white opacity-0 shadow-md transition-colors duration-200 hover:bg-[#A6341B] group-hover:opacity-100"
                  >
                    ✕
                  </button>
                  <div className="absolute inset-x-0 bottom-0 flex justify-center bg-black/50 px-3 py-1.5 text-center">
                    <span className="w-full truncate font-beVietnamPro text-[11px] font-semibold text-[#F4CA80]">
                      {img.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation Actions Row */}
          <div className="absolute left-[272px] top-[1535px] z-20 flex w-[896px] items-center justify-between border-t border-t-[rgba(198,92,57,0.15)] pt-10">
            {/* Back button */}
            <Link
              to="/artisan-account"
              className="flex w-fit cursor-pointer items-center gap-2.5 rounded-full border border-black px-8 py-3.5 shadow-sm transition-all hover:bg-black/5 active:scale-95"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
                  fill="black"
                />
              </svg>
              <span className="select-none text-center font-beVietnamPro text-base font-bold text-[#000]">
                Quay lại
              </span>
            </Link>

            {/* Submit button */}
            <button
              type="button"
              onClick={handleFormSubmit}
              className="flex w-fit cursor-pointer items-center gap-3 rounded-full bg-[#A6341B] px-10 py-4 font-beVietnamPro text-base font-bold text-white shadow-[0_10px_20px_rgba(166,52,27,0.25)] transition-all hover:bg-[#8D2B16] active:scale-95"
            >
              <span className="select-none text-center">Tiếp tục</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </Section>

      <CheckoutFAQSection
        faqs={artisanFaqs}
        description="Dưới đây là những câu hỏi thường gặp khi nghệ nhân đối tác bắt đầu đăng ký khởi tạo lịch trình workshop di sản mới trên nền tảng của DiSanity."
        showHotline
        hotlineText="Mọi sự cố xin vui lòng liên hệ: 03324233282"
        onToggle={() => setActiveStage(5)}
        className="relative z-10 pb-[170px] pt-[90px]"
      />

      <SiteFooter />
    </PageShell>
  );
}
