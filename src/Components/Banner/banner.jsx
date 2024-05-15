import "./banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imag1 from "../../Assets/1.jpg";
import imag2 from "../../Assets/2.jpg";
import imag3 from "../../Assets/3.jpg";
import imag4 from "../../Assets/4.jpg";
import imag5 from "../../Assets/5.jpg";
import Container from "../Container/container";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    
  };
  return (
    <div>
      <Container>
        <div className="app-banner">
          <Slider {...settings}>
            <img src={imag1} />
            <img src={imag2} />
            <img src={imag3} />
            <img src={imag4} />
            <img src={imag5} />
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default BannerSlider;
