import { useState } from "react";
import Header from "../../Components/Header/header";
import BannerSlider from "../../Components/Banner/banner";
import { Sections } from "../../Components/Sections/sections";
import { Footer } from "../../Components/Footer/footer";
import { CategoriesName } from "../../Components/CategoriesName/categoriesName";
import { SplashScreen } from "../../Components/Logo/splashScreen";


export const HomeScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <>
          <Header title="الرئيسية" />
          <BannerSlider />
          <CategoriesName />
          <Sections />
          <Footer />
        </>
      )}
    </div>
  );
};
