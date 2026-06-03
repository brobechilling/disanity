"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/domain/ContactUs";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function ArtisanPage() {
  const [hoveredArtisan, setHoveredArtisan] = useState<number | null>(null);

  const artisans = [
    { id: 0, img: "/Container.png", left: 0, top: 0, title: "Container 0" },
    { id: 3, img: "/Container(3).png", left: 416, top: 0, title: "Container 3", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
    { id: 1, img: "/Container(1).png", left: 832, top: 0, title: "Container 1" },
    { id: 4, img: "/Container(4).png", left: 0, top: 415, title: "Container 4" },
    { id: 5, img: "/Container(5).png", left: 416, top: 415, title: "Container 5" },
    { id: 2, img: "/Container(2).png", left: 832, top: 415, title: "Container 2" },
  ];

  return (
    <div className="bg-[#120202] min-h-screen flex justify-center items-start">
      {/* 
        Container viewport 1440px wide by 5339px high matching Figma Artisan Page.
        This provides a pixel-perfect, highly premium centered frame.
      */}
      <ResponsiveContainer originalHeight={5339}>
        
        {/* Mockup Background Image - Wood grain texture showing rich background details */}
        <img
          src="/Image144.png"
          className="w-full h-[8232px] absolute left-0 top-[181px] max-w-none opacity-90 pointer-events-none"
          alt="image 144 background base"
        />

        {/* 1. Header (0px - 181px) */}
        <Header />

        {/* 2. Meet Our Artisans Header & Grid Section (294px - 1278px) */}
        <div className="w-[1220px] h-[984px] absolute left-[105px] top-[294px] overflow-visible">
          <p className="text-[#000] font-jaro text-[64px] leading-[46px] w-[870px] h-[46px] absolute left-[178px] top-0 text-center">
            GẶP GỠ NGHỆ NHÂN CỦA CHÚNG TÔI
          </p>
          <p className="text-[#697077] font-beVietnam text-lg leading-[30px] w-[763px] h-[60px] absolute left-[267px] top-[62px] text-center font-light">
            Chúng tôi tổ chức các sự kiện để đưa nghề truyền thống đến gần hơn với cộng đồng,
            tạo không gian gặp gỡ, trải nghiệm và cùng nhau giữ lửa làng nghề.
          </p>

          {/* Lưới 6 thẻ Nghệ nhân */}
          <div className="w-[1220px] h-[802px] absolute left-0 top-[182px] overflow-visible">
            {artisans.map((artisan, index) => {
              const isHovered = hoveredArtisan === artisan.id;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredArtisan(artisan.id)}
                  onMouseLeave={() => setHoveredArtisan(null)}
                  className="w-[388px] h-[387px] absolute rounded-[20px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300"
                  style={{
                    left: `${artisan.left}px`,
                    top: `${artisan.top}px`,
                    transform: isHovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
                  }}
                >
                  <img
                    src={artisan.img}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    alt={artisan.title}
                  />
                  
                  {/* Text Overlay for Đặng Văn Hạ inside Container(3) */}
                  {artisan.name && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300">
                      <p className="text-[#FFF] font-beVietnamPro text-[32px] font-bold leading-[38px] drop-shadow-sm">
                        {artisan.name}
                      </p>
                      <p className="text-[#FFF] font-dMSans text-lg font-medium leading-5 tracking-[0.1em] mt-1 opacity-90 uppercase">
                        {artisan.sub}
                      </p>
                    </div>
                  )}

                  {/* Standard Interactive Hover Overlay for cards without specific names */}
                  {!artisan.name && (
                    <div className={`absolute inset-0 bg-[#A6341B]/15 transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Down Arrow Graphic Icon (1304px) */}
        <svg
          width="81"
          height="25"
          viewBox="0 0 81 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[74px] h-[18px] absolute left-[686px] top-[1304px] animate-bounce pointer-events-none"
        >
          <path
            d="M3.50098 3.50085L40.501 21.4864L77.501 3.50085"
            stroke="#355D67"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* 4. Truyền Nghề Stepper Section (1486px - 2292px) */}
        <div className="w-[1242px] h-[806px] absolute left-[90px] top-[1486px] overflow-visible">
          {/* Checkbox columns left side */}
          <div className="w-[792px] h-[806px] absolute left-0 top-0">
            
            {/* Card 1: GÌN GIỮ TINH HOA */}
            <div className="w-[636px] h-[202px] absolute left-0 top-0 group">
              {/* Gold/Yellow Card */}
              <div className="bg-[#E0A03F] w-[600px] h-[166px] absolute left-[36px] top-[36px] rounded-[12px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] pl-[56px] pt-[25px] pr-8 transition-transform duration-300 group-hover:scale-[1.01] border border-black/5">
                <p className="text-[#A6341B] font-beVietnamPro text-[28px] font-extrabold uppercase tracking-wide">
                  GÌN GIỮ TINH HOA
                </p>
                <p className="text-[#505050] font-beVietnam text-base leading-[26px] mt-2 font-medium">
                  Những nghệ nhân là người bảo tồn kỹ thuật truyền thống qua nhiều thế hệ, được gìn giữ bằng ký ức nghề.
                </p>
              </div>
              
              {/* White Circle Badge with Shadow */}
              <div className="w-[72px] h-[72px] rounded-full bg-white absolute left-0 top-0 flex items-center justify-center shadow-lg z-10 border border-black/5">
                <span className="text-[#000] font-beVietnamPro text-[32px] font-bold">1</span>
              </div>
            </div>

            {/* Card 2: TRUYỀN DẠY & LAN TOẢ */}
            <div className="w-[636px] h-[202px] absolute left-[150px] top-[301px] group">
              {/* Gold/Yellow Card */}
              <div className="bg-[#E0A03F] w-[600px] h-[166px] absolute left-[36px] top-[36px] rounded-[12px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] pl-[56px] pt-[25px] pr-8 transition-transform duration-300 group-hover:scale-[1.01] border border-black/5">
                <p className="text-[#A6341B] font-beVietnamPro text-[28px] font-extrabold uppercase tracking-wide">
                  TRUYỀN DẠY &amp; LAN TOẢ
                </p>
                <p className="text-[#505050] font-beVietnam text-base leading-[26px] mt-2 font-medium">
                  Không chỉ làm nghề, họ còn mở lớp, tổ chức workshop và hướng dẫn thế hệ trẻ, là một cách cho văn hoá được tiếp nối.
                </p>
              </div>
              
              {/* White Circle Badge with Shadow */}
              <div className="w-[72px] h-[72px] rounded-full bg-white absolute left-0 top-0 flex items-center justify-center shadow-lg z-10 border border-black/5">
                <span className="text-[#000] font-beVietnamPro text-[32px] font-bold">2</span>
              </div>
            </div>

            {/* Card 3: SÁNG TẠO & THÍCH ỨNG */}
            <div className="w-[636px] h-[202px] absolute left-5 top-[604px] group">
              {/* Gold/Yellow Card */}
              <div className="bg-[#E0A03F] w-[600px] h-[166px] absolute left-[36px] top-[36px] rounded-[12px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] pl-[56px] pt-[25px] pr-8 transition-transform duration-300 group-hover:scale-[1.01] border border-black/5">
                <p className="text-[#A6341B] font-beVietnamPro text-[28px] font-extrabold uppercase tracking-wide">
                  SÁNG TẠO &amp; THÍCH ỨNG
                </p>
                <p className="text-[#505050] font-beVietnam text-base leading-[26px] mt-2 font-medium">
                  Hiện đại, nghệ nhân không ngừng đổi mới nhưng vẫn giữ cốt lõi. Đó là cách làng nghề tồn tại và phát triển bền vững.
                </p>
              </div>
              
              {/* White Circle Badge with Shadow */}
              <div className="w-[72px] h-[72px] rounded-full bg-white absolute left-0 top-0 flex items-center justify-center shadow-lg z-10 border border-black/5">
                <span className="text-[#000] font-beVietnamPro text-[32px] font-bold">3</span>
              </div>
            </div>
          </div>

          {/* Right side Text Column */}
          <div className="w-[367px] h-[456px] absolute left-[875px] top-[232px]">
            <div className="w-[367px] h-[414px] absolute left-0 top-0">
              <p className="text-[#355D67] font-jaro text-[50px] w-[272px] h-[63px] absolute left-0 top-0">
                TRUYỀN NGHỀ
              </p>
              <p className="text-[#505050] font-beVietnam text-xl leading-[30px] w-[367px] h-[330px] absolute left-0 top-[84px] text-justify font-light">
                Truyền nghề không chỉ là dạy lại một kỹ thuật, mà là trao đi cả kinh nghiệm, ký ức và tình yêu dành cho nghề.
                <br /><br />
                Mỗi thế hệ được tiếp nối là một lần làng nghề được thắp sáng thêm một lần nữa. Và chính trong quá trình ấy, giá trị truyền thống không bị lãng quên mà tiếp tục lớn lên cùng thời đại.
              </p>
            </div>
            
            {/* Discover CTA Button with scale text effect */}
            <Link
              to="/workshops/list"
              className="w-[154px] h-[23px] absolute left-0 top-[433px] flex items-center group cursor-pointer"
            >
              <p className="text-[#505050] font-beVietnamPro text-lg font-extrabold w-[101px] h-[23px] group-hover:text-[#A6341B] transition-colors">
                KHÁM PHÁ
              </p>
              <div className="bg-[#505050] w-10 h-0.5 ml-2 group-hover:bg-[#A6341B] group-hover:w-12 transition-all"></div>
            </Link>
          </div>
        </div>

        {/* 5. Visual CTA Banner Section (2424px - 3232px) */}
        <div className="w-full h-[808px] absolute left-0 top-[2424px]">
          <div className="w-full h-[808px] absolute left-0 top-0">
            <img
              src="/ImageContainer.png"
              className="w-full h-[808px] absolute left-0 top-0 max-w-none object-cover"
              alt="Image Container"
            />
          </div>
          <p className="text-[#FFF] font-oi text-[56px] leading-[66px] w-[574px] h-[66px] absolute left-[110px] top-[420px] uppercase">
            DISANITY
          </p>
          <p className="text-[#FFF] font-beVietnamPro text-lg leading-[30px] w-[600px] h-[60px] absolute left-[110px] top-[486px] font-light">
            Hãy để chuyến đi này trở thành ký ức bạn sẽ kể lại nhiều lần sau đó.
            Bắt đầu hành trình của bạn ngay hôm nay.
          </p>
          
          {/* Start Button */}
          <Link
            to="/workshops"
            className="inline-flex py-6 px-9 items-center justify-center rounded-[40px] bg-[#FFF] absolute left-[110px] top-[590px] w-[184px] h-[66px] shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="text-[#5D5A88] font-beVietnam text-lg font-bold">
              Bắt đầu
            </span>
            <div className="w-[18px] h-[18px] ml-2 overflow-hidden flex items-center justify-center relative">
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1.5 h-[13px] absolute right-0"
              >
                <path
                  d="M0.75 0.75L7.09565 7.09565L0.75 13.4413"
                  stroke="#5D5A88"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>

          {/* Contact Button (Smooth scroll to form) */}
          <Link
            to="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              const contactElem = document.getElementById("contact-section");
              if (contactElem) {
                contactElem.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex py-6 px-9 items-center justify-center rounded-[36.5px] border-[1.5px] border-[#FFF] absolute left-[328px] top-[590px] w-[260px] h-[66px] shadow-[0_4px_10px_0_rgba(20,20,43,0.04)] cursor-pointer hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="text-[#FFF] font-beVietnam text-lg font-bold text-center">
              Liên lạc với chúng tôi
            </span>
          </Link>
        </div>

        {/* 6. Partner With Us / Trở thành Nghệ Nhân Đối Tác Section (3363px - 3800px) */}
        <div className="w-[1240px] absolute left-[100px] top-[3363px] flex flex-col items-center overflow-visible">
          <p className="text-[#6C0B0B] font-jaro text-[64px] leading-[72px] w-full h-auto text-center uppercase tracking-wide">
            TRỞ THÀNH NGHỆ NHÂN ĐỐI TÁC
          </p>
          <p className="text-[#A6341B] font-beVietnamPro text-lg leading-[30px] w-[751px] h-[390px] text-justify mt-14 font-medium">
            Chúng tôi xây dựng mô hình workshop làng nghề theo hướng vận hành bài bản – doanh thu minh bạch – phát triển dài hạn. Chúng tôi tìm kiếm những nghệ nhân mong muốn:
            <br /><br />
            • Gia tăng thu nhập ổn định từ hoạt động truyền nghề.
            <br />
            • Mở rộng tệp khách hàng (giới trẻ, du lịch, doanh nghiệp, trường học).
            <br />
            • Xây dựng thương hiệu cá nhân với hồ sơ chuyên gia riêng.
            <br />
            • Bảo tồn nghề theo hướng bền vững và chuyên nghiệp.
            <br /><br />
            Dự án đảm nhận toàn bộ marketing, tổ chức và vận hành. Nghệ nhân tập trung vào chuyên môn và giá trị cốt lõi của nghề. Đây không phải hợp tác sự kiện ngắn hạn, mà là đồng hành chiến lược để phát triển làng nghề trong dài hạn.
          </p>
        </div>

        {/* 7. Reusable Form Contact Us Section (3895px - 4510px) */}
        <div id="contact-section">
          <ContactUs className="top-[3895px]" />
        </div>

        {/* 8. Reusable Shared Footer Section (4510px - 5339px) */}
        <Footer className="top-[4510px]" />

      </ResponsiveContainer>
    </div>
  );
}
