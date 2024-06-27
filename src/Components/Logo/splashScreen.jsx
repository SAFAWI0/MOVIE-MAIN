// SplashScreen.js
import { useEffect } from "react";
import "./splashScreen.css";

export const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <div className="loader-text">أفلامي</div>
    </div>
  );
};
