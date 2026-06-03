"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { mockUploadedImages, mockArtisanFAQs } from "@/utils/mockData";

export default function ToWorkshopChoNghNhn() {
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

  // 4. Stateful FAQ Accordion Grid
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqData = mockArtisanFAQs;

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
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* Centered high-fidelity viewport container (1440px wide by 4109px high) */}
      <ResponsiveContainer originalHeight={4109}>
        
        {/* Speckled Sand / Wood Background Texture */}
        <img
          src="/createworkshop/Image143.png"
          className="w-full h-[8232px] absolute left-0 top-[181px] max-w-none opacity-100 pointer-events-none z-0"
          alt="image 143 background texture"
        />

        {/* 1. Header (0px - 181px) */}
        <Header />

        {/* 2. Stateful Detailed Tutorial Banner (top-[181px] h-[738px] / collapsible) */}
        <div 
          className={`w-full absolute left-0 top-[181px] z-20 transition-all duration-500 overflow-hidden ${
            isTutorialMinimized ? "h-[80px]" : "h-[738px]"
          }`}
        >
          <div className="w-full h-full relative">
            {/* Background Tutorial Image */}
            <img
              src="/createworkshop/ImageContainer.png"
              className="w-full h-[738px] absolute left-0 top-0 max-w-none object-cover"
              alt="Image Container"
            />
            {/* Translucent overlay for minimized state */}
            {isTutorialMinimized && (
              <div className="absolute inset-0 bg-[#000]/60 backdrop-blur-sm z-10 flex items-center justify-between px-[110px]">
                <p className="text-[#FFF] font-beVietnamPro text-base font-bold select-none">
                  💡 Hướng dẫn tạo Workshop đã được ẩn. Bạn có thể mở lại bất cứ lúc nào.
                </p>
                <button 
                  onClick={() => setIsTutorialMinimized(false)}
                  className="px-5 py-2 rounded-full border border-[#F4CA80] text-[#F4CA80] hover:bg-[#F4CA80]/15 active:scale-95 transition-all text-xs font-bold cursor-pointer"
                >
                  Hiển thị hướng dẫn
                </button>
              </div>
            )}

            {!isTutorialMinimized && (
              <div className="absolute inset-0 z-10 px-[110px] pt-[234px]">
                <p className="text-[#FFF] font-jaro text-[56px] leading-[66px] w-[620px] h-[132px] tracking-wide select-none">
                  Hướng dẫn chi tiết cách tạo Workshop cho nghệ nhân
                </p>
                <p className="text-[#F4CA80] font-beVietnamPro text-lg leading-[30px] w-[574px] h-[90px] mt-6 select-none font-medium">
                  Hãy kể lại câu chuyện di sản và chia sẻ kỹ nghệ đặc trưng của bạn. DiSanity đồng hành cùng nghệ nhân đưa tinh hoa truyền thống tiếp cận thế hệ trẻ Việt Nam.
                </p>
                
                {/* Action buttons inside banner */}
                <div className="flex gap-4 mt-8">
                  <button 
                    onClick={() => alert("Chúng mình đã chuẩn bị sẵn tài liệu hướng dẫn chuyên sâu. Đang mở tab tài liệu mới...")}
                    className="inline-flex py-4 px-8 justify-center items-center gap-2 rounded-[40px] bg-[#F4CA80] hover:bg-[#E5BD6C] active:scale-95 transition-all cursor-pointer shadow-md text-[#A6341B] font-beVietnamPro text-base font-bold"
                  >
                    <span>Xem ngay</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                      <path d="M7 3l5 5-5 5" stroke="#A6341B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button 
                    onClick={() => setIsTutorialMinimized(true)}
                    className="inline-flex py-4 px-8 justify-center items-center gap-2 rounded-[36.5px] border-2 border-white bg-transparent hover:bg-white/10 active:scale-95 transition-all cursor-pointer text-[#FFF] font-beVietnamPro text-base font-bold"
                  >
                    <span>Tôi đã biết</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Decorative Frame Background Overlay */}
        <img
          src="/createworkshop/Rectangle4445.png"
          className="opacity-[40%] w-[1240px] h-[1374px] absolute left-[100px] top-[1222px] max-w-none pointer-events-none z-10"
          alt="Rectangle 4445 background frame decoration"
        />

        {/* 4. Active Stepper Progress Indicators (top-[1077px]) */}
        <div className="w-[900px] h-[69px] absolute left-[268px] top-[1077px] z-20">
          <div className="w-[900px] h-[69px] absolute left-0 top-0">
            {/* Background connectors lines */}
            <svg
              width="381"
              height="1"
              viewBox="0 0 381 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[381px] absolute left-[82px] top-[59px]"
            >
              <path d="M0 0.5L381 0.499967" stroke={activeStage >= 3 ? "#A6341B" : "rgba(166,52,27,0.2)"} strokeWidth="1.5" />
            </svg>
            <svg
              width="383"
              height="1"
              viewBox="0 0 383 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[383px] absolute left-[471px] top-[59px]"
            >
              <path d="M0 0.5L383 0.500033" stroke={activeStage >= 5 ? "#A6341B" : "rgba(166,52,27,0.2)"} strokeWidth="1.5" />
            </svg>

            {/* Step text links */}
            <button 
              onClick={() => setActiveStage(1)}
              className={`font-beVietnamPro text-base font-black absolute left-0 top-0.5 tracking-[0.02em] cursor-pointer transition-colors ${
                activeStage === 1 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
              }`}
            >
              Thông tin cơ bản
            </button>
            
            <button 
              onClick={() => setActiveStage(2)}
              className={`font-beVietnamPro text-base font-semibold absolute left-[215px] top-0.5 tracking-[0.02em] cursor-pointer transition-colors ${
                activeStage === 2 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
              }`}
            >
              Câu chuyện
            </button>

            <button 
              onClick={() => setActiveStage(3)}
              className={`font-beVietnam text-base font-semibold absolute left-[428px] top-0 tracking-[0.02em] cursor-pointer transition-colors ${
                activeStage === 3 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
              }`}
            >
              Hình ảnh
            </button>

            <button 
              onClick={() => setActiveStage(4)}
              className={`font-beVietnam text-base font-semibold absolute left-[640px] top-0.5 tracking-[0.02em] cursor-pointer transition-colors ${
                activeStage === 4 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
              }`}
            >
              Lịch trình
            </button>

            <button 
              onClick={() => setActiveStage(5)}
              className={`font-beVietnamPro text-base font-semibold absolute left-[828px] top-0 tracking-[0.02em] cursor-pointer transition-colors ${
                activeStage === 5 ? "text-[#A6341B]" : "text-[#A6341B]/60 hover:text-[#A6341B]"
              }`}
            >
              Hoàn tất
            </button>

            {/* Stepper active dots indicator */}
            <div className={`w-5 h-5 absolute left-[62px] top-[49px] rounded-full border-2 transition-all flex items-center justify-center ${
              activeStage >= 1 ? "bg-[#A6341B] border-[#A6341B]" : "bg-white border-[#A6341B]/20"
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>

            <div className={`w-5 h-5 absolute left-[253px] top-[49px] rounded-full border-2 transition-all flex items-center justify-center ${
              activeStage >= 2 ? "bg-[#A6341B] border-[#A6341B]" : "bg-white border-[#A6341B]/20"
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>

            <div className={`w-5 h-5 absolute left-[453px] top-[49px] rounded-full border-2 transition-all flex items-center justify-center ${
              activeStage >= 3 ? "bg-[#A6341B] border-[#A6341B]" : "bg-white border-[#A6341B]/20"
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>

            <div className={`w-5 h-5 absolute left-[668px] top-[49px] rounded-full border-2 transition-all flex items-center justify-center ${
              activeStage >= 4 ? "bg-[#A6341B] border-[#A6341B]" : "bg-white border-[#A6341B]/20"
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>

            <div className={`w-5 h-5 absolute left-[854px] top-[49px] rounded-full border-2 transition-all flex items-center justify-center ${
              activeStage >= 5 ? "bg-[#A6341B] border-[#A6341B]" : "bg-white border-[#A6341B]/20"
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* 5. Typographic Section Title Banner (top-[986px]) */}
        <div className="w-[1030px] absolute left-[205px] top-[986px] z-10">
          <p className="text-[#A6341B] font-jaro text-[64px] leading-tight select-none tracking-wide">
            Tạo Workshop Mới
          </p>
        </div>

        {/* 6. Premium Message Card Block (top-[1287px]) */}
        <div className="flex pt-8 pr-8 pb-8 pl-[68px] flex-col items-start rounded-[48px] border border-[rgba(198,92,57,0.15)] bg-black/90 shadow-[0_4px_25px_rgba(0,0,0,0.25)] w-[1050px] absolute left-[185px] top-[1287px] z-10 backdrop-blur-sm">
          <div className="flex items-start gap-4 w-[950px]">
            <div className="flex flex-col items-start gap-2 shrink-0 w-[934px]">
              <p className="text-[#F4CA80] font-beVietnamPro text-xl font-bold leading-7 select-none">
                Chia sẻ truyền thống của bạn
              </p>
              <p className="text-[#FFF] font-beVietnamPro text-base leading-[26px] w-[879px] mt-2 text-justify select-none font-light">
                Hãy kể cho thế giới nghe câu chuyện đằng sau nghề thủ công của bạn. Di sản của bạn là điều làm nên sự độc đáo cho workshop này. Du khách không chỉ tìm kiếm một sản phẩm; họ đang tìm kiếm sự kết nối với lịch sử nghệ thuật Việt Nam.
              </p>
            </div>
          </div>
        </div>

        {/* 7. Input: Tên Workshop (top-[1510px]) */}
        <div className="flex flex-col items-start gap-2 w-[1030px] absolute left-[205px] top-[1510px] z-15">
          <label className="text-[#1E293B] font-beVietnamPro text-lg font-bold leading-7 select-none">
            Tên Workshop
          </label>
          <p className="text-[#64748B] font-beVietnamPro text-sm leading-5 select-none font-medium mb-1">
            Đặt một cái tên hấp dẫn và mô tả rõ nghề thủ công của bạn.
          </p>
          <div className="w-full relative rounded-[48px] border border-[#E2E8F0] bg-white h-16 shadow-sm overflow-hidden flex items-center px-8 focus-within:border-[#A6341B]/60 transition-colors">
            <input 
              type="text"
              className="w-full bg-transparent text-[#0F172A] font-beVietnamPro text-lg focus:outline-none placeholder-gray-400 font-medium"
              placeholder="Ví dụ: Vẽ tay gốm sứ Bát Tràng truyền thống"
              value={workshopName}
              onChange={(e) => {
                setWorkshopName(e.target.value);
                setActiveStage(1);
              }}
            />
          </div>
        </div>

        {/* 8. Input: Mô tả văn hóa dropdown select (top-[1666px] / w-[531px]) */}
        <div className="flex flex-col items-start gap-2 w-[531px] absolute left-[205px] top-[1666px] z-20">
          <label className="text-[#1E293B] font-beVietnamPro text-lg font-bold leading-7 select-none">
            Mô tả văn hóa
          </label>
          
          <div className="w-full relative">
            <button 
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full rounded-[48px] border border-[#E2E8F0] bg-white h-16 shadow-sm flex items-center justify-between px-8 text-left cursor-pointer transition-colors hover:border-gray-300 focus:outline-none"
            >
              <span className="text-[#0F172A] font-beVietnamPro text-lg font-medium">
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
              <div className="absolute left-0 right-0 top-[72px] bg-white border border-[#E2E8F0] rounded-[24px] shadow-2xl py-3 z-30 flex flex-col gap-1 max-h-[220px] overflow-y-auto">
                {["Gốm sứ & Đồ đất nung", "Dệt Lụa & Thêu tay cổ truyền", "Tranh dân gian Đông Hồ", "Làm Mặt Nạ Hát Bội", "Điêu Khắc Tre & Gỗ"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleDropdownSelect(val)}
                    className="w-full px-8 py-2.5 hover:bg-[#A6341B]/5 text-left text-gray-800 font-beVietnamPro text-[15px] font-medium transition-colors cursor-pointer"
                  >
                    {val}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 9. Input: Thời lượng dự kiến slider (top-[1666px] / w-[434px]) */}
        <div className="flex flex-col items-start gap-2 w-[434px] absolute left-[801px] top-[1666px] z-15">
          <label className="text-[#1E293B] font-beVietnamPro text-lg font-bold leading-7 select-none">
            Thời lượng dự kiến
          </label>
          
          <div className="w-full relative rounded-[48px] border border-[#E2E8F0] bg-white h-16 shadow-sm flex items-center justify-between px-8 overflow-hidden">
            {/* Input display */}
            <div className="flex items-center gap-2">
              <span className="text-[#0F172A] font-beVietnamPro text-lg font-bold">
                {duration}
              </span>
              <span className="text-[#94A3B8] font-beVietnamPro text-base font-semibold select-none">
                Giờ trải nghiệm
              </span>
            </div>
            
            {/* Incrementor Buttons */}
            <div className="flex items-center gap-2">
              <button 
                type="button"
                onClick={() => { setDuration(Math.max(1, duration - 1)); setActiveStage(1); }}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#A6341B]/10 hover:text-[#A6341B] flex items-center justify-center font-bold text-gray-600 transition-colors cursor-pointer"
              >
                -
              </button>
              <button 
                type="button"
                onClick={() => { setDuration(Math.min(12, duration + 1)); setActiveStage(1); }}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#A6341B]/10 hover:text-[#A6341B] flex items-center justify-center font-bold text-gray-600 transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* 10. Heritage Story Textarea (top-[1817px]) */}
        <div className="flex flex-col items-start gap-2 w-[1030px] absolute left-[205px] top-[1817px] z-10">
          <label className="text-[#1E293B] font-beVietnamPro text-lg font-bold leading-7 select-none">
            Kể câu chuyện của bạn...
          </label>
          <p className="text-[#64748B] font-beVietnamPro text-sm leading-5 select-none font-medium mb-1">
            Cho chúng tôi biết về lịch sử của nghề này trong gia đình hoặc làng của bạn. Nó đại diện cho điều gì?
          </p>
          <div className="w-full rounded-[48px] border border-[#E2E8F0] bg-white h-[214px] shadow-sm p-8 focus-within:border-[#A6341B]/60 transition-colors overflow-hidden">
            <textarea
              className="w-full h-full bg-transparent text-[#0F172A] font-beVietnamPro text-lg focus:outline-none placeholder-gray-400 resize-none font-medium"
              placeholder="Hãy chia sẻ giá trị di sản đằng sau sản phẩm này..."
              value={heritageStory}
              onChange={(e) => {
                setHeritageStory(e.target.value);
                setActiveStage(2);
              }}
            />
          </div>
        </div>

        {/* 11. Custom Upload Images Block (top-[2120px]) */}
        <div className="flex flex-col items-start gap-3 w-[1030px] absolute left-[205px] top-[2120px] z-10">
          <label className="text-[#1E293B] font-beVietnamPro text-lg font-bold leading-7 select-none">
            Tải ảnh lên (Xưởng &amp; Sản phẩm)
          </label>
          
          <div className="flex justify-start items-center gap-6 w-full mt-2">
            {/* Upload Button */}
            <button 
              type="button"
              onClick={handleAddMockPhoto}
              className="flex flex-col justify-center items-center gap-3 rounded-[32px] border-2 border-dashed border-[#C65C39] bg-[#C65C39]/5 w-[228px] h-[228px] hover:bg-[#C65C39]/10 active:scale-95 transition-all shadow-sm cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-[#C65C39]/15 flex items-center justify-center transition-colors group-hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M12 5v14M5 12h14" stroke="#C65C39" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[#C65C39] font-beVietnamPro text-sm font-bold tracking-wide">
                Thêm ảnh
              </span>
            </button>

            {/* Display list of uploaded photo previews */}
            {uploadedImages.map((img) => (
              <div 
                key={img.id}
                className="rounded-[32px] border-3 border-[#A6341B] bg-[#E2E8F0] w-[228px] h-[228px] overflow-hidden shadow-md relative group"
              >
                <img
                  src={img.url}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={img.alt}
                />
                <button
                  type="button"
                  onClick={() => {
                    setUploadedImages(uploadedImages.filter(i => i.id !== img.id));
                    alert("Đã xóa ảnh xem trước.");
                  }}
                  className="absolute right-3 top-3 w-7 h-7 rounded-full bg-black/60 hover:bg-[#A6341B] text-white flex items-center justify-center text-xs font-bold shadow-md cursor-pointer transition-colors opacity-0 group-hover:opacity-100 duration-200"
                >
                  ✕
                </button>
                <div className="absolute inset-x-0 bottom-0 bg-black/50 py-1.5 px-3 flex justify-center text-center">
                  <span className="text-[#F4CA80] font-beVietnamPro text-[11px] font-semibold truncate w-full">
                    {img.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12. Bottom Navigation Actions Row (top-[2454px]) */}
        <div className="flex justify-between items-center border-t border-t-[rgba(198,92,57,0.15)] pt-10 w-[896px] absolute left-[272px] top-[2454px] z-10">
          {/* Back button */}
          <Link 
            to="/artisan-account"
            className="flex py-3.5 px-8 items-center gap-2.5 rounded-full border border-black hover:bg-black/5 active:scale-95 transition-all w-fit cursor-pointer shadow-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
                fill="black"
              />
            </svg>
            <span className="text-[#000] font-beVietnamPro text-base font-bold select-none text-center">
              Quay lại
            </span>
          </Link>

          {/* Submit button */}
          <button 
            type="button"
            onClick={handleFormSubmit}
            className="flex py-4 px-10 items-center gap-3 rounded-full bg-[#A6341B] hover:bg-[#8D2B16] active:scale-95 transition-all w-fit cursor-pointer shadow-[0_10px_20px_rgba(166,52,27,0.25)] text-white font-bold text-base"
          >
            <span className="select-none text-center">Tiếp tục</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        {/* 13. Interactive FAQs Accordion Grid Section (top-[2707px] h-[833px]) */}
        <div className="w-[1220px] h-[833px] absolute left-[110px] top-[2707px] z-10">
          <div className="w-full h-full relative">
            
            {/* Header titles */}
            <p className="text-[#000] font-jaro text-4xl leading-[46px] w-[500px] h-[46px] absolute left-[360px] top-0 text-center select-none tracking-wide">
              Những câu hỏi thường gặp
            </p>
            <p className="text-[#3E3E3E] font-beVietnamPro text-base leading-[26px] w-[700px] h-[60px] absolute left-[260px] top-[62px] text-center select-none font-medium opacity-80">
              Dưới đây là những câu hỏi thường gặp khi nghệ nhân đối tác bắt đầu đăng ký khởi tạo lịch trình workshop di sản mới trên nền tảng của DiSanity.
            </p>

            {/* Golden Hotline Support Banner */}
            <div className="w-[480px] h-[50px] absolute left-[370px] top-[140px] z-20">
              <div className="flex py-2.5 px-8 justify-center items-center gap-[5px] rounded-full bg-[#D4A017]/90 backdrop-blur-sm border border-[#D4A017] shadow-md w-full h-full select-none">
                <p className="text-[#FFF] font-beVietnamPro text-base font-bold text-center">
                  📞 Mọi sự cố xin vui lòng liên hệ: 03324233282
                </p>
              </div>
            </div>

            {/* Expandable FAQs Cards Area (Grid block starting top-[234px]) */}
            <div className="w-full absolute left-0 top-[234px] grid grid-cols-2 gap-x-8 gap-y-6">
              
              {faqData.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    onClick={() => {
                      setOpenFaqIndex(isOpen ? null : index);
                      setActiveStage(5); // completed interactive test
                    }}
                    className={`rounded-[20px] border border-[#A6341B]/40 bg-[#F4CA80]/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-start relative overflow-hidden ${
                      isOpen ? "ring-2 ring-[#A6341B]/60" : ""
                    }`}
                    style={{ minHeight: isOpen ? "220px" : "110px" }}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <p className="text-[#000] font-beVietnamPro text-[17px] font-bold leading-6 flex-grow">
                        {faq.question}
                      </p>
                      
                      <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center shrink-0 transition-transform duration-200">
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M3 6l5 5 5-5" stroke="#373737" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Collapsible content */}
                    <div 
                      className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? "max-h-[140px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0 pointer-events-none"
                      }`}
                    >
                      <p className="text-[#3E3E3E] font-beVietnamPro text-sm leading-[22px] font-medium text-justify border-t border-[#A6341B]/15 pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* 14. Footer (top-[3719px] - top-[4109px]) */}
        <Footer className="top-[3287px]" />

      </ResponsiveContainer>
    </div>
  );
}
