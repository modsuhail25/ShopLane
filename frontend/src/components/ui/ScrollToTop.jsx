import { useEffect } from "react";
import { useLocation } from "react-router";

// Scrolls the window to the top whenever the URL path changes.
// Without this, navigating to a new page keeps the previous scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // runs every time pathname changes

  return null; // renders nothing — it's a behaviour-only component
}
