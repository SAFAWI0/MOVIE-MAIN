import "./categories.css";
import { Footer } from "../Footer/footer";
import Header from "../Header/header";
import Container from "../Container/container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imag1 from "../../Assets/MovieType/1.jpg";
import imag2 from "../../Assets/MovieType/2.jpg";
import imag3 from "../../Assets/MovieType/3.jpg";
import imag4 from "../../Assets/MovieType/4.jpg";
import imag5 from "../../Assets/MovieType/5.jpg";
import imag6 from "../../Assets/MovieType/6.jpg";
import imag7 from "../../Assets/MovieType/7.jpg";
import imag8 from "../../Assets/MovieType/8.jpg";
import imag9 from "../../Assets/MovieType/9.jpg";
import imag10 from "../../Assets/MovieType/10.jpg";
import imag11 from "../../Assets/MovieType/11.jpg";
import imag12 from "../../Assets/MovieType/12.jpg";
import imag13 from "../../Assets/MovieType/13.jpg";
import imag14 from "../../Assets/MovieType/14.jpg";
import imag15 from "../../Assets/MovieType/15.jpg";
import imag16 from "../../Assets/MovieType/16.jpg";
import imag17 from "../../Assets/MovieType/17.jpg";
import imag18 from "../../Assets/MovieType/18.jpg";
import imag19 from "../../Assets/MovieType/19.jpg";
import { useAppStore } from "../../store";

export const Categories = () => {
  const [genres, setGenres] = useState([]);
  const { setNameType } = useAppStore();

  const genreImages = {
    Action: imag1,
    Adventure: imag2,
    Comedy: imag3,
    Romance: imag4,
    Drama: imag5,
    "Science Fiction": imag6,
    War: imag7,
    Horror: imag8,
    Thriller: imag9,
    Family: imag10,
    Crime: imag11,
    "TV Movie": imag12,
    Fantasy: imag13,
    Animation: imag14,
    History: imag15,
    Western: imag16,
    Documentary: imag17,
    Music: imag18,
    Mystery: imag19,
  };

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
    <div className="categories">
      <Header title="الأقسام" />
      <Container>
        <div>
          <div className="grid-image">
            {genres.map((genre, i) => (
              <div key={i} className="cat">
                <Link to={`/movieType/${genre.id}`} onClick={() => setNameType({ genre: genre.name })}>
                  <div className="image">
                    <img src={genreImages[genre.name]} alt={genre.name} />
                  </div>
                  <p>{genre.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
