import "./card.css";
import { useAppStore } from "../../store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  const [value, setValue] = useState([]);
  const { setImagePath } = useAppStore();

  const getData = () => {
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
        setImagePath(
          result.results.map((el) => ({
            name: el.title,
            image: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
          }))
        );
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card">
      <ul>
        {value.map((el, i) => (
          <li key={i}>
            <Link to={`/categoriesPage/${el.id}`}>
              <div key={i} className="grid">
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
    </div>
  );
};
