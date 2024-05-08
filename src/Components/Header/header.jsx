import Container from "../Container/container";
import "./header.css";
import { FaGooglePlay } from "react-icons/fa";

const Header = ({ title }) => {
  return (
    <div className="header">
      <Container>
      <div className="content">
        <div className="title">
          <FaGooglePlay />
          <span> افلامي</span>
        </div>
        <p>{title} </p>
      </div>
      </Container>
    </div>
  );
};

export default Header;
