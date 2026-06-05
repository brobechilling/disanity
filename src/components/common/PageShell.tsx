import React from "react";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  background?: "plain" | "paper" | "heritage" | "artisans" | "artisanStories" | "success" | "customerInfo" | "cart" | "createWorkshop" | "booking" | "scheduleManagement" | "artisanAccount" | "userAccount" | "ticketQr";
}

const backgrounds: Record<NonNullable<PageShellProps["background"]>, string> = {
  plain: "bg-white",
  paper: "bg-[#f5efe6]",
  heritage: "bg-white bg-[url('/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  artisans: "bg-white bg-[url('/Image144.png')] bg-[length:100%_auto] bg-repeat-y",
  artisanStories: "bg-white bg-[url('/cauchuyennghenhan/Image161.png')] bg-[length:100%_auto] bg-repeat-y",
  booking: "bg-white bg-[url('/booking/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  scheduleManagement: "bg-white bg-[url('/quanlilichtrinh/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  success: "bg-white bg-[url('/sucess/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  customerInfo: "bg-white bg-[url('/thongtinkhachhang/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  cart: "bg-white bg-[url('/cart/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  createWorkshop: "bg-white bg-[url('/createworkshop/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  artisanAccount: "bg-white bg-[url('/tknghenhan/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  userAccount: "bg-white bg-[url('/tkkhachhang/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
  ticketQr: "bg-white bg-[url('/ticketqr/Image143.png')] bg-[length:100%_auto] bg-repeat-y",
};

export default function PageShell({
  children,
  className = "",
  background = "plain",
}: PageShellProps) {
  return (
    <div className={`min-h-screen overflow-x-hidden text-[#1b1717] ${backgrounds[background]} ${className}`}>
      {children}
    </div>
  );
}
