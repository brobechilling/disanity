"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import ContactUs from "@/components/domain/ContactUs";

const artisans = [
  { id: 0, img: "/Container.png", left: 0, top: 0, title: "Container 0", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he"},
  { id: 3, img: "/Container(2).png", left: 416, top: 0, title: "Container 3", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 1, img: "/Container(1).png", left: 832, top: 0, title: "Container 1", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 4, img: "/Container(4).png", left: 0, top: 415, title: "Container 4", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 5, img: "/Container(5).png", left: 416, top: 415, title: "Container 5", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
  { id: 2, img: "/Container(2).png", left: 832, top: 415, title: "Container 2", name: "Đặng Văn Hạ", sub: "nghệ nhân tò he" },
];

export default function ArtisanPage() {
  const [hoveredArtisan, setHoveredArtisan] = useState<number | null>(null);

  return (
    <PageShell background="artisans">
      <SiteHeader />

      <main className="overflow-hidden">
        {/* 1. Meet Our Artisans Header & Grid Section */}
        <Section width="wide" className="mt-[113px]">
          <div className="relative mx-auto h-[1052px] w-[1320px] max-w-full overflow-visible">
            <p className="absolute left-[225px] top-0 h-[46px] w-[870px] text-center font-jaro text-[64px] leading-[46px] text-[#000]">
              GẶP GỠ NGHỆ NHÂN CỦA CHÚNG TÔI
            </p>
            <p className="absolute left-[279px] top-[62px] h-[60px] w-[763px] text-center font-beVietnam text-lg font-light leading-[30px] text-[#697077]">
              Chúng tôi tổ chức các sự kiện để đưa nghề truyền thống đến gần hơn với cộng đồng,
              tạo không gian gặp gỡ, trải nghiệm và cùng nhau giữ lửa làng nghề.
            </p>

            <div className="absolute left-0 top-[182px] h-[870px] w-[1320px] overflow-visible">
              {artisans.map((artisan, index) => {
                const isHovered = hoveredArtisan === artisan.id;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredArtisan(artisan.id)}
                    onMouseLeave={() => setHoveredArtisan(null)}
                    className="absolute h-[420px] w-[420px] cursor-pointer overflow-hidden rounded-[20px] shadow-[0_8px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
                    style={{
                      left: `${Math.round((artisan.left / 416) * 450)}px`,
                      top: `${Math.round((artisan.top / 415) * 450)}px`,
                      transform: isHovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
                    }}
                  >
                    <img
                      src={artisan.img}
                      className={`h-full w-full object-cover transition-transform duration-500 ${
                        isHovered ? "scale-105" : "scale-100"
                      }`}
                      alt={artisan.title}
                    />

                    {artisan.name && (
                      <div
                        className={`pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/45 to-black/10 p-8 transition-opacity duration-300 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <p className="font-beVietnamPro text-[32px] font-bold leading-[38px] text-[#FFF] drop-shadow-sm">
                          {artisan.name}
                        </p>
                        <p className="mt-1 font-dMSans text-lg font-medium uppercase leading-5 tracking-[0.1em] text-[#FFF] opacity-90">
                          {artisan.sub}
                        </p>
                      </div>
                    )}

                    {!artisan.name && (
                      <div className={`pointer-events-none absolute inset-0 bg-black/35 transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* 2. Down Arrow Graphic Icon */}
        <Section className="mt-[26px]">
          <svg
            width="81"
            height="25"
            viewBox="0 0 81 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-[18px] w-[74px] animate-bounce pointer-events-none"
          >
            <path
              d="M3.50098 3.50085L40.501 21.4864L77.501 3.50085"
              stroke="#355D67"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Section>

        <Section width="wide" className="mt-[157px]">
          <div className="relative mx-auto h-[806px] w-[1242px] max-w-full overflow-visible">
            {/* Checkbox columns left side */}
            <div className="absolute left-0 top-0 h-[806px] w-[792px]">
              <div className="group absolute left-0 top-0 h-[202px] w-[636px]">
                {/* Gold/Yellow Card */}
                <div className="absolute left-[36px] top-[36px] h-[166px] w-[600px] rounded-[12px] border border-black/5 bg-[#E0A03F] pt-[25px] pr-8 pl-[56px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-[1.01]">
                  <p className="font-beVietnamPro text-[28px] font-extrabold uppercase tracking-wide text-[#A6341B]">
                    GÌN GIỮ TINH HOA
                  </p>
                  <p className="mt-2 font-beVietnam text-base font-medium leading-[26px] text-[#505050]">
                    Những nghệ nhân là người bảo tồn kỹ thuật truyền thống qua nhiều thế hệ, được gìn giữ bằng ký ức nghề.
                  </p>
                </div>

                {/* White Circle Badge with Shadow */}
                <div className="absolute left-0 top-0 z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-black/5 bg-white shadow-lg">
                  <span className="font-beVietnamPro text-[32px] font-bold text-[#000]">1</span>
                </div>
              </div>

              <div className="group absolute left-[150px] top-[301px] h-[202px] w-[636px]">
                {/* Gold/Yellow Card */}
                <div className="absolute left-[36px] top-[36px] h-[166px] w-[600px] rounded-[12px] border border-black/5 bg-[#E0A03F] pt-[25px] pr-8 pl-[56px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-[1.01]">
                  <p className="font-beVietnamPro text-[28px] font-extrabold uppercase tracking-wide text-[#A6341B]">
                    TRUYỀN DẠY &amp; LAN TOẢ
                  </p>
                  <p className="mt-2 font-beVietnam text-base font-medium leading-[26px] text-[#505050]">
                    Không chỉ làm nghề, họ còn mở lớp, tổ chức workshop và hướng dẫn thế hệ trẻ, là một cách cho văn hoá được tiếp nối.
                  </p>
                </div>

                {/* White Circle Badge with Shadow */}
                <div className="absolute left-0 top-0 z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-black/5 bg-white shadow-lg">
                  <span className="font-beVietnamPro text-[32px] font-bold text-[#000]">2</span>
                </div>
              </div>

              <div className="group absolute left-5 top-[604px] h-[202px] w-[636px]">
                {/* Gold/Yellow Card */}
                <div className="absolute left-[36px] top-[36px] h-[166px] w-[600px] rounded-[12px] border border-black/5 bg-[#E0A03F] pt-[25px] pr-8 pl-[56px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-[1.01]">
                  <p className="font-beVietnamPro text-[28px] font-extrabold uppercase tracking-wide text-[#A6341B]">
                    SÁNG TẠO &amp; THÍCH ỨNG
                  </p>
                  <p className="mt-2 font-beVietnam text-base font-medium leading-[26px] text-[#505050]">
                    Hiện đại, nghệ nhân không ngừng đổi mới nhưng vẫn giữ cốt lõi. Đó là cách làng nghề tồn tại và phát triển bền vững.
                  </p>
                </div>

                {/* White Circle Badge with Shadow */}
                <div className="absolute left-0 top-0 z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-black/5 bg-white shadow-lg">
                  <span className="font-beVietnamPro text-[32px] font-bold text-[#000]">3</span>
                </div>
              </div>
            </div>

            {/* Right side Text Column */}
            <div className="absolute left-[875px] top-[232px] h-[456px] w-[367px]">
              <div className="absolute left-0 top-0 h-[414px] w-[367px]">
                <p className="absolute left-0 top-0 h-[63px] w-[272px] font-jaro text-[50px] text-[#355D67]">
                  TRUYỀN NGHỀ
                </p>
                <p className="absolute left-0 top-[84px] h-[330px] w-[367px] text-justify font-beVietnam text-xl font-light leading-[30px] text-[#505050]">
                  Truyền nghề không chỉ là dạy lại một kỹ thuật, mà là trao đi cả kinh nghiệm, ký ức và tình yêu dành cho nghề.
                  <br /><br />
                  Mỗi thế hệ được tiếp nối là một lần làng nghề được thắp sáng thêm một lần nữa. Và chính trong quá trình ấy, giá trị truyền thống không bị lãng quên mà tiếp tục lớn lên cùng thời đại.
                </p>
              </div>

              {/* Discover CTA Button with scale text effect */}
              <Link
                to="/workshops/list"
                className="group absolute left-0 top-[433px] flex h-[23px] w-[154px] cursor-pointer items-center"
              >
                <p className="h-[23px] w-[101px] font-beVietnamPro text-lg font-extrabold text-[#505050] transition-colors group-hover:text-[#A6341B]">
                  KHÁM PHÁ
                </p>
                <div className="ml-2 h-0.5 w-10 bg-[#505050] transition-all group-hover:w-12 group-hover:bg-[#A6341B]"></div>
              </Link>
            </div>
          </div>
        </Section>

        {/* 4. Visual CTA Banner Section */}
        <Section width="screen" gutter="none" className="mt-[132px]">
          <div className="relative h-[808px] w-full">
            <img
              src="/ImageContainer.png"
              className="absolute left-0 top-0 h-[808px] w-full max-w-none object-cover"
              alt="Image Container"
            />
            <div className="relative mx-auto h-full max-w-[1440px]">
              <p className="absolute left-[110px] top-[420px] h-[66px] w-[574px] font-oi text-[56px] uppercase leading-[66px] text-[#FFF]">
                DISANITY
              </p>
              <p className="absolute left-[110px] top-[486px] h-[60px] w-[600px] font-beVietnamPro text-lg font-light leading-[30px] text-[#FFF]">
                Hãy để chuyến đi này trở thành ký ức bạn sẽ kể lại nhiều lần sau đó.
                Bắt đầu hành trình của bạn ngay hôm nay.
              </p>

              {/* Start Button */}
              <Link
                to="/workshops"
                className="absolute left-[110px] top-[590px] inline-flex h-[66px] w-[184px] cursor-pointer items-center justify-center rounded-[40px] bg-[#FFF] py-6 px-9 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-100 active:scale-95"
              >
                <span className="font-beVietnam text-lg font-bold text-[#5D5A88]">
                  Bắt đầu
                </span>
                <div className="relative ml-2 flex h-[18px] w-[18px] items-center justify-center overflow-hidden">
                  <svg
                    width="8"
                    height="15"
                    viewBox="0 0 8 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 h-[13px] w-1.5"
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
                className="absolute left-[328px] top-[590px] inline-flex h-[66px] w-[260px] cursor-pointer items-center justify-center rounded-[36.5px] border-[1.5px] border-[#FFF] py-6 px-9 shadow-[0_4px_10px_0_rgba(20,20,43,0.04)] transition-all duration-200 hover:scale-105 hover:bg-white/10 active:scale-95"
              >
                <span className="text-center font-beVietnam text-lg font-bold text-[#FFF]">
                  Liên lạc với chúng tôi
                </span>
              </Link>
            </div>
          </div>
        </Section>

        <Section width="wide" className="mt-[131px]">
          <div className="mx-auto flex w-[1240px] max-w-full flex-col items-center overflow-visible">
            <p className="h-auto w-full text-center font-jaro text-[64px] uppercase leading-[72px] tracking-wide text-[#6C0B0B]">
              TRỞ THÀNH NGHỆ NHÂN ĐỐI TÁC
            </p>
            <p className="mt-14 h-[390px] w-[751px] text-justify font-beVietnamPro text-lg font-medium leading-[30px] text-[#A6341B]">
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
        </Section>

        <ContactUs />
      </main>

      <SiteFooter />
    </PageShell>
  );
}
