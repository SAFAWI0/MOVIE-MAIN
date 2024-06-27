import "./movieType.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../Container/container";
import { Footer } from "../Footer/footer";
import Header from "../Header/header";
import { useAppStore } from "../../store";
import Loader from "../Loader/loader";

export const MovieType = () => {
  const { genre } = useParams();
  const [value, setValue] = useState([]);
  const { nameType } = useAppStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };

        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=b6434bbf5557a52512008a50a1331ff7&with_genres=${genre}`,
          options
        );
        const movieData = await movieResponse.json();
        setValue(movieData.results);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genre]);

  return (
    <div>
      <Header title={` ${nameType.genre} :قسم`} />

      <div className="movieType">
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="movies-grid">
            {value.map((movie, i) => (
              <div key={i} className="movie-card">
                <Link to={`/moviePage/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
         )}
      </div>
      <Footer />
    </div>
  );
};
