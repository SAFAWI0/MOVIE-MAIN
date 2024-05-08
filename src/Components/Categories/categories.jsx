import "./categories.css";
import { Footer } from "../Footer/footer";
import Header from "../Header/header";
import { useAppStore } from "../../store";
import Container from "../Container/container";
import { products } from "../../fake";

export const Categories = () => {
  const { imagePath } = useAppStore();

  return (
    <div className="categories">
      <Header title="الأقسام" />
      <Container>
        <div className="grid-image">
          {products.map((el, i) => (
            <div key={i}>
              <img src={el.image} alt="not found" />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};
