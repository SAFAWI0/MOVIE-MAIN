import "./footer.css";
import { GoHomeFill } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Container from "../Container/container";


export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="content-footer">
          <Link to={"/login"}>
            <button>
              <CgProfile className="icon" tabIndex="0" />
            </button>
          </Link>

          <Link to={"/search"}>
            <button>
              <FiSearch className="icon" tabIndex="0" />
            </button>
          </Link>

          <Link to={"/categories"}>
            <button>
              <TbCategory className="icon" tabIndex="1" />
            </button>
          </Link>

          <Link to={"/"}>
            <button>
              <GoHomeFill className="icon" tabIndex="0" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
