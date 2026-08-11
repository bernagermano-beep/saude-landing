import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const GoogleTagManager = () => {
  useEffect(() => {
    const gtmId = import.meta.env.VITE_GTM_ID;
    if (!gtmId || typeof document === "undefined") return;
    if (document.querySelector(`[data-tractus-gtm="${gtmId}"]`)) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    script.dataset.tractusGtm = gtmId;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default GoogleTagManager;
