import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function IntroGrid() {
  return (
    <div className="w-[1240px] h-[629px] absolute left-[102px] top-[265px] overflow-visible">
      <ScrollReveal className="w-full h-full relative" animation="fade-in" duration={1000}>
      
      {/* Block 1 (Large Left Image) */}
      <div className="w-[633px] h-[629px] absolute left-0 top-0 overflow-hidden rounded-2xl group cursor-pointer shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        <img
          src="/Rectangle1201.png"
          className="w-[633px] h-[629px] max-w-none object-cover transition-transform duration-500 group-hover:scale-105"
          alt="Disanity Youth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
        
        {/* News Badge */}
        <div className="bg-[#000] w-[115px] h-[45px] absolute left-[259px] top-7 rounded-md flex items-center justify-center border border-white/20">
          <p className="text-[#FFF] font-roboto text-xl font-bold tracking-wider uppercase">
            News
          </p>
        </div>
        
        {/* Caption */}
        <p className="text-[#FFF] font-beVietnam text-[30px] font-bold leading-[42px] w-[579px] h-[102px] absolute left-[27px] top-[499px] text-center drop-shadow-md">
          EMPOWERING AT-RISK AND DISADVANTAGED YOUTH IN VIETNAM
        </p>
      </div>

      {/* Block 2 (Top Right Image) */}
      <div className="w-[584px] h-[326px] absolute left-[656px] top-0 overflow-hidden rounded-2xl group cursor-pointer shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        <img
          src="/Rectangle1202.png"
          className="w-[584px] h-[326px] max-w-none object-cover transition-transform duration-500 group-hover:scale-105"
          alt="We are Disanity"
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/40"></div>
        
        {/* News Badge */}
        <div className="bg-[#000] w-[91px] h-[35px] absolute left-[246px] top-[138px] rounded-md flex items-center justify-center border border-white/20">
          <p className="text-[#FFF] font-roboto text-sm font-bold tracking-wider uppercase">
            News
          </p>
        </div>
        
        {/* Caption */}
        <p className="text-[#FFF] font-roboto text-[26px] font-bold leading-9 w-[445px] h-[76px] absolute left-[69px] top-[203px] text-center drop-shadow-sm">
          WE ARE DISANITY - The first social enterprise in Vietnam.
        </p>
      </div>

      {/* Block 3 (Bottom Center-Left Image) */}
      <div className="w-[281px] h-[275px] absolute left-[656px] top-[353px] overflow-hidden rounded-2xl group cursor-pointer shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        <img
          src="/Rectangle1203.png"
          className="w-[281px] h-[275px] max-w-none object-cover transition-transform duration-500 group-hover:scale-105"
          alt="We are Disanity Sub"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* News Badge */}
        <div className="bg-[#000] w-[65px] h-[25px] absolute left-[11px] top-[198px] rounded flex items-center justify-center border border-white/10">
          <p className="text-[#FFF] font-roboto text-[11px] font-bold uppercase">
            News
          </p>
        </div>
        
        {/* Caption */}
        <p className="text-[#FFF] font-roboto text-[18px] font-bold w-[184px] h-[26px] absolute left-[11px] top-[237px] text-left drop-shadow-sm">
          WE ARE DISANITY
        </p>
      </div>

      {/* Block 4 (Bottom Right Image) */}
      <div className="w-[281px] h-[275px] absolute left-[959px] top-[354px] overflow-hidden rounded-2xl group cursor-pointer shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
        <img
          src="/Rectangle1208.png"
          className="w-[281px] h-[275px] max-w-none object-cover transition-transform duration-500 group-hover:scale-105"
          alt="We are Disanity Sub 2"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* News Badge */}
        <div className="bg-[#000] w-[65px] h-[25px] absolute left-[11px] top-[197px] rounded flex items-center justify-center border border-white/10">
          <p className="text-[#FFF] font-roboto text-[11px] font-bold uppercase">
            News
          </p>
        </div>
        
        {/* Caption */}
        <p className="text-[#FFF] font-roboto text-[18px] font-bold w-[184px] h-[26px] absolute left-[11px] top-[234px] text-left drop-shadow-sm">
          WE ARE DISANITY
        </p>
      </div>

      </ScrollReveal>
    </div>
  );
}
