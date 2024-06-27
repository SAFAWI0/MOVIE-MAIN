import "./card.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";

export const Card = () => {
  const [value, setValue] = useState([]);
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

  const handelUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="card">
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {value.map((el, i) => (
            <li key={i}>
              <Link to={`/moviePage/${el.id}`}>
                <div className="grid" onClick={handelUp}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt="not found"
                  />
                  <div className="title">
                    <p>{el.title}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
