import "./categoriesPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../Container/container";

export const CategoriesPage = () => {
  const { id } = useParams();
  const [value, setValue] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
    };
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b6434bbf5557a52512008a50a1331ff7`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setValue(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container>
        {value && (
          <div>
            <h1>{value.id}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              alt={value.title}
            ></img>
            {/* <p>{value.vote_average !== 0 ? value.vote_average.toFixed(2) : 0}</p> */}
            <h1>{value.title}</h1>
            <span>{value.overview}</span>
            <p>{value.vote_average}</p>
            <p>{value.vote_count}</p>
            <p>{value.release_date}</p>
            <p>{value.budget}</p>
            <p>{value.runtime}</p>
          </div>
        )}
      </Container>
    </div>
  );
};
