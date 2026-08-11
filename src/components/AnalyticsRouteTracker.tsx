import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

const AnalyticsRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    trackEvent("page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
      source: "spa_route_change",
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default AnalyticsRouteTracker;
