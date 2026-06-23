import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GA_DISABLED = import.meta.env.VITE_GA_DISABLED === "true";

let initialized = false;

export function initializeGoogleAnalytics() {
  if (GA_DISABLED || !GA_MEASUREMENT_ID) {
    return false;
  }

  if (initialized) {
    return true;
  }

  ReactGA.initialize(GA_MEASUREMENT_ID, {
    gtagOptions: {
      send_page_view: false,
    },
  });
  initialized = true;

  return true;
}

export function trackPageView(page: string) {
  if (!initializeGoogleAnalytics()) {
    return;
  }

  ReactGA.send({
    hitType: "pageview",
    page,
    title: document.title,
    location: window.location.href,
  });
}
