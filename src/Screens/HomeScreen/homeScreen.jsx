import Header from "../../Components/Header/header";
import BannerSlider from "../../Components/Banner/banner";
import { Sections } from "../../Components/Sections/sections";
import { Footer } from "../../Components/Footer/footer";

export const HomeScreen = () => {
  return (
    <div>
      <Header title="الرئيسية"/>
      <BannerSlider />
      <Sections />
      <Footer />
    </div>
  );
};
