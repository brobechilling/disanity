import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const GOOGLE_SCRIPT_SRC = "https://accounts.google.com/gsi/client";
const GOOGLE_SCRIPT_ID = "google-identity-services-script";

type GoogleCredentialResponse = {
  credential?: string;
};

type GoogleButtonSize = "large" | "medium" | "small";
type GoogleButtonText = "signin_with" | "signup_with" | "continue_with" | "signin";
type GoogleButtonTheme = "outline" | "filled_blue" | "filled_black";
type GoogleButtonShape = "rectangular" | "pill" | "circle" | "square";

interface GoogleButtonOptions {
  type?: "standard" | "icon";
  theme?: GoogleButtonTheme;
  size?: GoogleButtonSize;
  text?: GoogleButtonText;
  shape?: GoogleButtonShape;
  width?: string | number;
}

interface GoogleAccountsId {
  initialize: (config: {
    client_id: string;
    callback: (response: GoogleCredentialResponse) => void;
    auto_select?: boolean;
  }) => void;
  renderButton: (parent: HTMLElement, options: GoogleButtonOptions) => void;
  disableAutoSelect: () => void;
}

interface GoogleLoginModalProps {
  open: boolean;
  onClose?: () => void;
}

export default function GoogleLoginModal({ open, onClose }: GoogleLoginModalProps) {
  const { loginWithGoogleCredential } = useAuth();
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [scriptReady, setScriptReady] = useState(Boolean(window.google?.accounts.id));
  const [error, setError] = useState("");

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!open || scriptReady || !clientId) {
      return;
    }

    const existingScript = document.getElementById(GOOGLE_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      const handleExistingLoad = () => setScriptReady(Boolean(window.google?.accounts.id));
      existingScript.addEventListener("load", handleExistingLoad, { once: true });
      return () => existingScript.removeEventListener("load", handleExistingLoad);
    }

    const script = document.createElement("script");
    script.id = GOOGLE_SCRIPT_ID;
    script.src = GOOGLE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptReady(Boolean(window.google?.accounts.id));
    script.onerror = () => setError("Khong the tai Google Identity Services. Vui long thu lai.");
    document.body.appendChild(script);
  }, [clientId, open, scriptReady]);

  useEffect(() => {
    if (!open || !scriptReady || !buttonRef.current || !clientId) {
      return;
    }

    const googleId = window.google?.accounts.id;
    if (!googleId) {
      setError("Google Identity Services chua san sang. Vui long thu lai.");
      return;
    }

    buttonRef.current.innerHTML = "";
    setError("");
    googleId.initialize({
      client_id: clientId,
      auto_select: false,
      callback: (response) => {
        if (!response.credential) {
          setError("Google khong tra ve credential hop le.");
          return;
        }

        try {
          loginWithGoogleCredential(response.credential);
        } catch {
          setError("Khong the doc thong tin dang nhap Google.");
        }
      },
    });
    googleId.renderButton(buttonRef.current, {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "signin_with",
      shape: "pill",
      width: 320,
    });
  }, [clientId, loginWithGoogleCredential, open, scriptReady]);

  if (!open) {
    return null;
  }

  const configError = !clientId
    ? "Thieu VITE_GOOGLE_CLIENT_ID trong file .env. Hay them OAuth Client ID cua Google Cloud Console."
    : "";

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="google-login-title"
    >
      <div className="relative w-full max-w-[430px] rounded-[18px] bg-white px-6 py-7 text-center shadow-2xl sm:px-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#A6341B]"
          aria-label="Dong cua so dang nhap"
        >
          <X size={18} />
        </button>
        <p className="font-beVietnamPro text-xs font-bold uppercase tracking-[0.22em] text-[#A6341B]">
          DiSanity Account
        </p>
        <h1
          id="google-login-title"
          className="mt-3 font-beVietnamPro text-3xl leading-tight text-[#0F172A] sm:text-4xl"
        >
          Đăng nhập để tiếp tục.
        </h1>
        <p className="mx-auto mt-3 max-w-[320px] font-beVietnamPro text-sm leading-6 text-[#64748B]">
          Login to your account.
        </p>

        <div className="mt-6 flex min-h-[44px] justify-center">
          {configError ? (
            <p className="rounded-[10px] border border-[#A6341B]/25 bg-[#A6341B]/10 px-4 py-3 font-beVietnamPro text-sm leading-5 text-[#A6341B]">
              {configError}
            </p>
          ) : (
            <div ref={buttonRef} />
          )}
        </div>

        {!configError && error && (
          <p className="mt-4 rounded-[10px] border border-[#A6341B]/25 bg-[#A6341B]/10 px-4 py-3 font-beVietnamPro text-sm leading-5 text-[#A6341B]">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: GoogleAccountsId;
      };
    };
  }
}
