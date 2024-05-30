import "./moviePage.css";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
import { Card } from "../Card/card";
import { Footer } from "../Footer/footer";
import { IoMdArrowBack } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { useAppStore } from "../../store";
import { Characters } from "../Characters/characters";
import { LatestComment } from "../Comments/latestComment ";

export const MoviePage = () => {
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { setIsOpenModal, setMoreInf } = useAppStore();
  const navigate = useNavigate();
 
  
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
        setValue(result);
        setMoreInf({
          budget: result.budget,
          runtime: result.runtime,
          origin_country: result.production_countries
            .map((country) => country.name)
            .join(", "),
          popularity: result.popularity,
          revenue: result.revenue,
          image: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
        });
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, [id]);

  const handleonclick = () => {
    messageApi.open({
      content: "الرجاء تسجيل الدخول",
    });
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handelIsBack = () => {
    navigate(-2);
  };
  const handelIsSave = () => {
    messageApi.open({
      content: "   تمت الحذف",
    });
    setIsSaved(!isSaved);
  };
  const handelNotSave = () => {
    messageApi.open({
      content: " تمت الاضافة بنجاح",
    });
    setIsSaved(!isSaved);
  };

  const handleIsOpen = () => {};

  const handleOpenModal = () => {
    setIsOpenModal(true);
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


            <div className="header">
              <div className="content">
                <IoMdArrowBack className="icon-head" onClick={handelIsBack} />
                {isSaved ? (
                  <IoBookmark className="icon-head" onClick={handelIsSave} />
                ) : (
                  <CiBookmark className="icon-head" onClick={handelNotSave} />
                )}
              </div>
            </div>

            
          </div>

          <div className="Cover">
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

                    <div className="like" onClick={handleOpenModal}>
                      <TbExclamationMark className="icons" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Characters />

            <div className="comments">
              <h3>تعليقات</h3>
              <LatestComment />
              <Link to={`/categoriesPage/${id}/comment`}>
                <div className="more-comment" onClick={handleIsOpen}>
                  <button>عرض الكل</button>
                </div>
              </Link>
            </div>

            <div className="line" />

            <div className="more-movie">
              <h3>افلام مشابهة</h3>
              <Card />
            </div>
          </div>
        </div>
      )}
      <Footer />
      {contextHolder}
    </div>
  );
};
