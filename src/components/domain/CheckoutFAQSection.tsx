"use client";

import React, { useState } from "react";
import Section from "@/components/common/Section";

interface CheckoutFAQ {
  q: string;
  a: string;
}

interface CheckoutFAQSectionProps {
  faqs: CheckoutFAQ[];
  defaultExpandedIndex?: number | null;
  showHotline?: boolean;
  className?: string;
}

export default function CheckoutFAQSection({
  faqs,
  defaultExpandedIndex = null,
  showHotline = false,
  className = "",
}: CheckoutFAQSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(defaultExpandedIndex);

  return (
    <Section width="screen" gutter="none" className={className}>
      <div className="z-10 mx-auto flex w-[1220px] max-w-full flex-col items-center overflow-visible">
        <p className="w-[500px] text-center font-jaro text-4xl uppercase leading-[46px] tracking-wide text-[#000]">
          Những câu hỏi thường gặp
        </p>
        <p className="mt-4 w-[596px] text-center font-dMSans text-base font-medium leading-[30px] text-[#3E3E3E]">
          Dưới đây là những câu hỏi thường gặp khi khách hàng đang trong quá trình xác nhận giỏ hàng, điền thông tin cá nhân và thanh toán.
        </p>

        {showHotline && (
          <div className="mt-6 mb-2 flex h-[50px] w-[461px] cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#A6341B] px-8 py-3 shadow-md transition-all hover:bg-[#8B2C16]">
            <span className="font-beVietnamPro text-base font-bold tracking-wide text-[#FFF]">
              Mọi sự cố xin vui lòng liên hệ: 03324233282
            </span>
          </div>
        )}

        <div className="mt-8 grid w-full grid-cols-2 gap-6 overflow-visible">
          {faqs.map((faq, idx) => {
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
    </Section>
  );
}
