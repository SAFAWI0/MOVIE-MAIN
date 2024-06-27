import Header from "../../Components/Header/header";
import BannerSlider from "../../Components/Banner/banner";
import { Sections } from "../../Components/Sections/sections";
import { Footer } from "../../Components/Footer/footer";
import { CategoriesName } from "../../Components/CategoriesName/categoriesName";

export const HomeScreen = () => {
  return (
    <div>
      <Header title="الرئيسية"/>
      <BannerSlider />
      <CategoriesName/>
      <Sections />
      <Footer />
    </div>
  );
};
