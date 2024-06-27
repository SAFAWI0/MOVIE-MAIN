import { useEffect, useState } from "react";
import "./categoriesName.css";
import Container from "../Container/container";
import { Link } from "react-router-dom";

export const CategoriesName = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=b6434bbf5557a52512008a50a1331ff7",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setGenres(result.genres);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <div>
        <Container>
          <div className="genre-list">
            <h2>الانواع </h2>
            <ul>
              {genres.map((genre, i) => (
                <Link key={i} to={`/movieType/${genre.id}`}>
                  <li>{genre.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};
