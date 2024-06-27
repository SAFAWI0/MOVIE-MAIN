import "./moreMovie.css";
import { useEffect, useState } from "react";
import Container from "../Container/container";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Footer } from "../Footer/footer";
import Loader from "../Loader/loader";

export const MoreMovie = () => {
  const [value, setValue] = useState([]);
  const navigate = useNavigate();
  const { sectionTitle } = useParams();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    var requestOptions = {
      method: "GET",
    };
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b6434bbf5557a52512008a50a1331ff7&page=${randomNumber}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setValue(result.results);
         setLoading(false);
      })
      .catch((error) => console.log("error", error));
      setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const handelIsBack = () => {
    navigate(-1);
  };

  return (
    <div className="moreMovie">
       {loading ? (
        <Loader />
      ) : (
      <Container>
        <div className="header-moreMovie">
          <div className="content-moreMovie">
            <p> {sectionTitle}</p>
            <HiArrowSmallRight
              onClick={handelIsBack}
              style={{ cursor: "pointer", fontSize: "28px" }}
            />
          </div>
        </div>

        <div className="card">
          {value.map((el, i) => (
            <Link key={i} to={`/moviePage/${value.id}`}>
              <div className="gridImage">
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                  alt="not found"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
         )}
      <Footer/>
    </div>
  );
};
