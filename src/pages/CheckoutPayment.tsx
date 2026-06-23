import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import CheckoutFAQSection from "@/components/domain/CheckoutFAQSection";
import CheckoutStepper from "@/components/domain/CheckoutStepper";
import { useBooking } from "@/context/BookingContext";
import { mockFAQs } from "@/utils/mockData";

export default function CheckoutPayment() {
  const navigate = useNavigate();
  const { confirmCart } = useBooking();
  const [paymentInfo, setPaymentInfo] = useState({
    lastName: "",
    firstName: "",
    cardNumber: "",
    cvc: "",
    expiry: "",
    agreed: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: keyof typeof paymentInfo, value: string | boolean) => {
    setPaymentInfo((currentInfo) => ({
      ...currentInfo,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!paymentInfo.lastName || !paymentInfo.firstName || !paymentInfo.cardNumber || !paymentInfo.cvc || !paymentInfo.expiry) {
      alert("Vui lòng điền đầy đủ thông tin thẻ trước khi thanh toán.");
      return;
    }

    if (!paymentInfo.agreed) {
      alert("Vui lòng xác nhận chịu trách nhiệm với các thông tin thanh toán.");
      return;
    }

    setShowSuccess(true);
  };

  return (
    <PageShell background="payment">
      <SiteHeader />

      <main className="overflow-hidden">
        <Section width="screen" gutter="none" className="mt-[47px]">
          <div className="mx-auto w-full max-w-[1680px] px-6 pb-12 sm:pb-16 text-center">
            <div className="text-center shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <p className="font-jaro text-[50px] uppercase leading-[72px] tracking-wide text-[#A6341B]">
                Xác nhận thanh toán
              </p>
            </div>
            <CheckoutStepper activeStep="payment" className="mt-10" />
          </div>
        </Section>

        <Section width="screen" gutter="none">
          <div className="relative overflow-hidden border-y border-[#A6341B]/10 py-12 sm:py-14 lg:py-16">
            <img
              src="/thanhtoan/Rectangle4445.png"
              className="absolute inset-0 h-full w-full object-cover opacity-60"
              alt=""
            />
            <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-start lg:px-8">
              <PaymentForm
                paymentInfo={paymentInfo}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
              <VnpayPanel />
            </div>
          </div>
        </Section>

        <CheckoutFAQSection
          faqs={mockFAQs}
          defaultExpandedIndex={0}
          showHotline
          className="py-16 lg:py-20"
        />

        <SiteFooter />
      </main>

      {showSuccess ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[28px] border border-[#A6341B]/20 bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#A6341B]/12 text-[#A6341B]">
              <CheckCircle2 size={34} />
            </div>
            <h2 className="mt-5 font-jaro text-3xl uppercase text-[#A6341B]">
              Thanh toán hợp lệ
            </h2>
            <p className="mt-3 font-beVietnamPro text-sm leading-6 text-[#504441]">
              Thông tin thanh toán đã được ghi nhận. Bạn có thể tiếp tục đến trang xác nhận vé.
            </p>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={async () => {
                  await confirmCart();
                  navigate("/ticketqr");
                }}
                className="h-12 rounded-full bg-[#A6341B] font-beVietnamPro text-sm font-bold uppercase text-white transition-all hover:-translate-y-0.5 hover:bg-[#8B2C16] active:scale-95"
              >
                Hoàn tất
              </button>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="h-12 rounded-full bg-[#F2EBE1] font-beVietnamPro text-sm font-bold text-[#504441] transition-colors hover:bg-[#eadbc9]"
              >
                Quay lại thanh toán
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </PageShell>
  );
}

function PaymentForm({
  paymentInfo,
  onChange,
  onSubmit,
}: {
  paymentInfo: {
    lastName: string;
    firstName: string;
    cardNumber: string;
    cvc: string;
    expiry: string;
    agreed: boolean;
  };
  onChange: (field: keyof typeof paymentInfo, value: string | boolean) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3 text-[#21272A]">
        <CreditCard size={28} />
        <h2 className="font-jaro text-[34px] leading-tight sm:text-[40px]">
          Thanh toán bằng thẻ VISA
        </h2>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <PaymentInput
            label="Họ"
            value={paymentInfo.lastName}
            onChange={(value) => onChange("lastName", value)}
            placeholder="Nguyễn"
          />
          <PaymentInput
            label="Tên"
            value={paymentInfo.firstName}
            onChange={(value) => onChange("firstName", value)}
            placeholder="An"
          />
        </div>
        <PaymentInput
          label="Số thẻ"
          value={paymentInfo.cardNumber}
          onChange={(value) => onChange("cardNumber", value)}
          placeholder="4242 4242 4242 4242"
          inputMode="numeric"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <PaymentInput
            label="CVC"
            value={paymentInfo.cvc}
            onChange={(value) => onChange("cvc", value)}
            placeholder="123"
            inputMode="numeric"
          />
          <PaymentInput
            label="Ngày hết hạn"
            value={paymentInfo.expiry}
            onChange={(value) => onChange("expiry", value)}
            placeholder="MM/YY"
          />
        </div>

        <label className="mt-1 flex items-start gap-3 font-roboto text-sm leading-5 text-[#21272A]">
          <input
            type="checkbox"
            checked={paymentInfo.agreed}
            onChange={(event) => onChange("agreed", event.target.checked)}
            className="mt-1 h-4 w-4 accent-[#A6341B]"
          />
          Tôi đồng ý chịu trách nhiệm với các thông tin trên
        </label>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-beVietnamPro text-sm font-semibold text-[#504441]">
            <LockKeyhole size={18} />
            Thanh toán được mã hóa
          </div>
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-[15px] bg-[#A6341B] px-8 font-roboto text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#8B2C16] active:scale-95"
          >
            Thanh toán
          </button>
        </div>
      </form>
    </section>
  );
}

function PaymentInput({
  inputMode,
  label,
  onChange,
  placeholder,
  value,
}: {
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}) {
  return (
    <label className="block font-roboto">
      <span className="text-sm leading-5 text-[#21272A]">{label}</span>
      <input
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-[20px] border-b border-[#C1C7CD] bg-[#F2F4F8] px-4 text-base text-[#21272A] outline-none transition-all placeholder:text-[#697077] focus:border-[#A6341B] focus:bg-white"
      />
    </label>
  );
}

function VnpayPanel() {
  return (
    <section className="lg:pl-6">
      <div className="mb-6 flex items-center gap-3 text-[#21272A]">
        <QrCode size={30} />
        <h2 className="font-jaro text-[34px] leading-tight sm:text-[40px]">
          Quét mã QR VNPay
        </h2>
      </div>

      <div className="rounded-[24px] border-[3px] border-[#D4A017] bg-white p-4 shadow-[0_18px_40px_rgba(71,45,24,0.12)]">
        <img
          src="/thanhtoan/Rectangle1221.png"
          className="mx-auto aspect-square w-full max-w-[460px] rounded-[16px] object-contain"
          alt="Mã QR VNPay"
        />
      </div>

      <div className="mt-5 grid gap-3 rounded-[20px] bg-white/65 p-5 font-beVietnamPro text-sm leading-6 text-[#504441] shadow-sm">
        <div className="flex items-center gap-3 font-bold text-[#A6341B]">
          <ShieldCheck size={20} />
          Giao dịch bảo mật qua VNPay
        </div>
        <p>
          Sau khi quét mã, vui lòng kiểm tra đúng nội dung thanh toán trước khi xác nhận trên ứng dụng ngân hàng.
        </p>
      </div>
    </section>
  );
}
