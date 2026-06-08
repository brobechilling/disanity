import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageShell from "@/components/common/PageShell";
import Section from "@/components/common/Section";
import SiteFooter from "@/components/common/SiteFooter";
import SiteHeader from "@/components/common/SiteHeader";
import GoogleLoginModal from "@/components/auth/GoogleLoginModal";
import { useAuth } from "@/context/AuthContext";

export default function RequireAuth({
  children,
  background = "userAccount",
}: {
  children: React.ReactNode;
  background?: React.ComponentProps<typeof PageShell>["background"];
}) {
  const { isAuthenticated, isAuthReady, isLoggingOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseLogin = () => {
    if (location.key === "default") {
      navigate("/", { replace: true });
      return;
    }

    navigate(-1);
  };

  if (isAuthReady && isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <PageShell background={background}>
      <SiteHeader />
      <main>
        <Section width="screen" gutter="none">
          <div className="min-h-[calc(100vh-156px)]" />
        </Section>
      </main>
      <SiteFooter />
      <GoogleLoginModal
        open={isAuthReady && !isAuthenticated && !isLoggingOut}
        onClose={handleCloseLogin}
      />
    </PageShell>
  );
}
