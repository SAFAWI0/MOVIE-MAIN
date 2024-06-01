import "./search.css";
import { Footer } from "../Footer/footer";
import { SearchOutlined } from "@ant-design/icons";
import Container from "../Container/container";
import { useEffect, useState } from "react";
import Header from "../Header/header";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Search = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState();
  const getData = () => {
    var requestOptions = {
      method: "GET",
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b6434bbf5557a52512008a50a1331ff7&query=${search}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.results);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, [search]);

  const handleInputChange = () => {
    setSearch(value);
  };
  console.log(products);

  return (
    <div className="search">
      <Header title="البحث" />
      <Container>
        <div className="search-box">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ابحث عن ألافلام  و المسلسلات"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(value);
              }
            }}
          />
          <button onClick={handleInputChange}>
            <SearchOutlined
              style={{ paddingLeft: "10px", fontSize: "22px", color: "#fff" }}
            />
          </button>
        </div>

        <div className="sea-card">
          {products.map((el, i) => (
            <Link to={`/moviePage/${el.id}`} key={i}>
              <div className="content-search">
                <div className="icon-play">
                  <FaPlay style={{ fontSize: "28px", color: "#fff" }} />
                </div>
                <div className="content-sea">
                  <div className="titel">
                    <h3>{el.original_title}</h3>

                    <div className="eval">
                      {el.genres &&
                        el.genres.map((genre, i) => (
                          <span key={i}>
                            {genre.name}
                            {i !== el.genres.length - 1 && " | "}
                          </span>
                        ))}
                      <span>
                        {el.release_date &&
                          el.release_date.substring(0, 4)}
                      </span>
                    </div>

                    <div className="star">
                      <FaStar style={{ color: "gold", marginBottom: "4px" }} />
                      <p>
                        {el.vote_average !== 0 ? el.vote_average.toFixed(1) : 0}
                      </p>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                      alt="not found"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};
