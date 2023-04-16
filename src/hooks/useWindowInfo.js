import { useState, useEffect } from "react";

export default function useWindowInfo() {
  const [windowInfo, setWindowInfo] = useState({
    mobileDesign: window.document.body.clientWidth < 480 ? true : false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowInfo({
        mobileDesign: window.document.body.clientWidth < 480 ? true : false,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowInfo;
}
