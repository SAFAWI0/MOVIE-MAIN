import "./categories.css";
import { Footer } from "../Footer/footer";
import Header from "../Header/header";
import Container from "../Container/container";
import { products } from "../../fake";

export const Categories = () => {
  return (
    <div className="categories">
      <Header title="الأقسام" />
      <Container>
        <div className="grid-image">
          {products.map((el, i) => (
            <div key={i} className="cat">
              <div className="image">
                <img src={el.image} alt="not found" />
              </div>
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};
