import "./moviePage.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { message } from "antd";
import { FaUsers } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { Modal } from "antd";
import { Photo } from "../../fake";

export const MoviePage = () => {
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleonclick = () => {
    messageApi.open({
      content: "الرجاء تسجيل الدخول",
    });
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="categoriesPage">
      {value && (
        <div className="content-cat">
          <div className="image-cover">
            <img
              src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              alt={value.title}
            ></img>
          </div>

          <div className="Cover">
            {/* <Container>  */}
            <div className="inCover">
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                  alt={value.title}
                ></img>
              </div>

              <div className="information">
                <div className="title">
                  <h3>{value.title}</h3>
                </div>

                <div className="content-line">
                  <div className="star">
                    <span>IMDb:</span>
                    <p>
                      {value.vote_average !== undefined
                        ? value.vote_average.toFixed(1)
                        : 0}
                    </p>
                    <FaStar style={{ color: "gold", marginBottom: "4px" }} />
                  </div>
                  <div className="date">
                    <span>
                      {value.release_date
                        ? value.release_date.substring(0, 4)
                        : ""}
                    </span>
                  </div>
                  <div className="family">
                    <FaUsers className="icon-family" />
                  </div>
                  <div className="view">
                    <IoEyeOutline className="icon-family" />
                    <p>
                      {value.vote_count
                        ? value.vote_count.toLocaleString()
                        : ""}
                    </p>
                  </div>
                </div>

                <div className="type">
                  {value.genres &&
                    value.genres.map((el, i) => (
                      <span key={i}>
                        {el.name}
                        {i !== value.genres.length - 1 && " | "}
                      </span>
                    ))}
                </div>

                 <div className="overview">
                  <span>
                    {value.overview &&
                      (isExpanded || value.overview.length < 100
                        ? value.overview
                        : value.overview.substring(0, 100) + "... ")}
                  </span>
                  {value.overview && value.overview.length > 100 && (
                    <button onClick={toggleExpansion}>
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div> 


                <div className="content-line-2">
                  <div className="butt-play">
                    <button> Play Now</button>
                    <FaPlay className="icon-play" />
                  </div>

                  <div className="eva-view">
                    <div className="like" onClick={handleonclick}>
                      <GrDislike className="icon-like" />
                      <p>
                        {value.vote_average !== undefined
                          ? value.vote_average.toFixed(0)
                          : 0}
                      </p>
                    </div>

                    <div className="like" onClick={handleonclick}>
                      <GrLike className="icon-like" />
                      <p>{value.vote_count}</p>
                    </div>

                    <div className="like" onClick={handleonclick}>
                      <FaRegHeart className="icons" />
                    </div>
                    <Link to="https://www.youtube.com/">
                      <div className="like">
                        <AiOutlineYoutube className="icons" />
                      </div>
                    </Link>

                    <div className="like">
                      <TbExclamationMark
                        className="icons"
                        onClick={handleOpen}
                      />
                      <Modal
                        title="Information About The Movie"
                        onOk={handleCancel}
                        open={isModalOpen}
                        onCancel={handleCancel}
                        footer={null}
                      >
                        <div className="deta-mov">
                          <div className="details">
                            <span>Budget :</span>
                            <p>{Number(value.budget).toLocaleString("en")}</p>
                          </div>
                          <div className="details">
                            <span>Runtime :</span>
                            <p>{value.runtime} m.</p>
                          </div>
                          <div className="details">
                            <span>Original Country :</span>
                            <p>{value.origin_country}</p>
                          </div>
                          <div className="details">
                            <span>Popularity :</span>
                            <p>{value.popularity} </p>
                          </div>
                          <div className="details">
                            <span>Revenue :</span>
                            <p>{Number(value.revenue).toLocaleString("en")} </p>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  </div>
                </div>






              </div> 
            </div>

            <div className="chara">
              <p>Characters</p>
              <div className="photo">
              <ul>
                {Photo.map((el, i) => (
                  <li key={i}>
                  <div  className="image-photo">
                    <img src={el.image}></img>
                    <p>{el.name}</p>
                  </div>
                </li>
                ))}
                </ul>
              </div>
            </div> 

            {/* </Container> */}
          </div>
        </div>
      )}

      {contextHolder}
    </div>
  );
};
